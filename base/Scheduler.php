<?php
/**
 * Init Main Class
 *
 * @package WpCafe/Init
 */

namespace WpCafe;

use DateTime;
use DatePeriod;
use DateInterval;
use WpCafe\Models\Reservation_Model;

/**
 * Restaurant Scheduler Class
 *
 * Generates time slots for restaurant schedules.
 */

 class Scheduler {

    /**
     * Restaurant schedule.
     *
     * @var array
     */
    protected $schedule;

    /**
     * Start date.
     *
     * @var string
     */
    protected $start_date;

    /**
     * End date.
     *
     * @var string
     */
    protected $end_date;

    /**
     * Interval in minutes.
     *
     * @var int
     */
    protected $interval;

    /**
     * Max seat.
     *
     * @var int
     */
    protected $max_seat;

    /**
     * Constructor.
     *
     * @param array  $schedule   Restaurant schedule.
     * @param string $start_date Start date (Y-m-d).
     * @param string $end_date   End date (Y-m-d).
     * @param int    $interval   Interval in minutes (default 30).
     */
    public function __construct( $schedule, $start_date, $end_date ) {
        $this->schedule   = $schedule;
        $this->start_date = $start_date;
        $this->end_date   = $end_date;
        $this->interval   = wpc_get_option('slot_interval', 30);
        $this->max_seat   = wpc_get_option('reservation_maximum_guest');
    }

    /**
     * Generate all slots within the date range.
     *
     * @return array
     */
    public function generate() {

        if ( ! $this->schedule ) {
            return [];
        }

        $result = array();
        $period = new DatePeriod(
            new DateTime( $this->start_date ),
            new DateInterval( 'P1D' ),
            ( new DateTime( $this->end_date ) )->modify( '+1 day' )
        );

        foreach ( $period as $date ) {
            $day = $date->format( 'D' ); // e.g., Mon, Tue.

            if ( ! isset( $this->schedule[ $day ] ) ) {
                continue;
            }

            $day_schedule = $this->schedule[ $day ];
            $status       = $day_schedule['status'];

            $result[ $date->format( 'Y-m-d' ) ] = array(
                'status' => $status,
                'slots'  => ( 'on' === $status )
                    ? $this->generate_slots( $date, $day_schedule['slots'] )
                    : array(),
            );
        }

        return $result;
    }

    /**
     * Generate slots for a single day.
     *
     * @param array $time_ranges Array of time ranges with start and end times.
     *
     * @return array
     */
    protected function generate_slots( $date, $time_ranges ) {
        $slots = array();
        $date = $date->format( 'Y-m-d' );

        foreach ( $time_ranges as $range ) {
            $start = DateTime::createFromFormat( 'h:i A', $range['start'] );
            $end   = DateTime::createFromFormat( 'h:i A', $range['end'] );

            while ( $start < $end ) {
                $slot_start = clone $start;
                $slot_end   = ( clone $start )->modify( '+' . $this->interval . ' minutes' );

                if ( $slot_end > $end ) {
                    break;
                }

                $slots[] = array(
                    'start'          => $slot_start->format( 'h:i A' ),
                    'end'            => $slot_end->format( 'h:i A' ),
                    'status'         => $this->get_slot_status( $date,$slot_start, $slot_end ),
                    'available_seat' => $this->get_available_seat( $date, $slot_start, $slot_end ),
                );

                $start = $slot_end;
            }
        }

        return $slots;
    }

    /**
     * Determine slot status.
     *
     * @param DateTime $start Start time.
     * @param DateTime $end   End time.
     *
     * @return string
     */
    protected function get_slot_status( $date, $start, $end ) {
        // Example logic: even hour -> available, odd hour -> unavailable.
        $data = [
            'max_seat' => $this->max_seat,
            'available_seat' => $this->get_available_seat( $date, $start, $end ),
        ];

        return $this->get_available_seat( $date, $start, $end ) >= $this->max_seat   ? 'available' : 'unavailable';
    }

    /**
     * Get available seat count.
     *
     * @param DateTime $start Start time.
     * @param DateTime $end   End time.
     *
     * @return int
     */
    protected function get_available_seat( $date, $start, $end ) {
        $total_booked_seat = Reservation_Model::get_total_guest_by_date_time( $date, $start, $end );

        return $this->max_seat - $total_booked_seat;
    }
}
