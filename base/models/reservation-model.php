<?php
namespace WpCafe\Models;

use WpCafe\Database\Post_Model;

class Reservation_Model extends Post_Model {
    /**
     * Store fillable attributes
     *
     * @var array
     */
    protected array $fillable = [
        'name'          => '',
        'email'         => '',
        'phone'         => '',
        'date'          => '',
        'start_time'    => '',
        'end_time'      => '',
        'total_guest'   => '',
        'table_name'    => '',
        'status'        => '',
        'branch_id'     => '',
        'branch_name'   => '',
        'notes'         => '',
        'invoice'       => '',
        'total_price'   => '',
        'currency'      => '',
        'payment_method'=> '',
        'payment_intent'=> '',
        'food_order'    => '',
        'seats'         => '',
        'custom_fields' => [],
    ];

    /**
     * Get the post type
     *
     * @return  string  Post type
     */
    public function get_post_type() {
        return 'wpc_reservation';
    }

    /**
     * Get the total price of the reservation
     *
     * @return  float   Total price of the reservation
     */
    public function get_total_price() {
        $total_price = $this->total_price;
        $items       = $this->get_items();

        if ( ! empty( $items ) ) {
            foreach ( $items as $item ) {
                $total_price += $item->price * $item->quantity;
            }
        }

        return $total_price;
    }

    /**
     * Get reservation items associated with this reservation.
     *
     * Retrieves all Reservation_Item_Model instances that are linked to this reservation
     * by matching the 'reservation_id' field with the current reservation's ID.
     *
     * @return array List of Reservation_Item_Model objects for this reservation.
     */
    public function get_items() {
        return Reservation_Item_Model::where( 'reservation_id', $this->id );
    }

    /**
     * Get seats associated with this reservation
     *
     * @return array Array of Seat_Plan_Model instances
     */
    public function get_seats() {
        $seat_ids = $this->seats ?? [];

        if ( empty( $seat_ids ) || ! is_array( $seat_ids ) ) {
            return [];
        }

        // Check if wpcafe-pro is active and has the Seat_Plan_Model
        if ( ! class_exists( 'WpCafePro\Models\Seat_Plan_Model' ) ) {
            return [];
        }

        $seats = [];
        foreach ( $seat_ids as $seat_id ) {
            $seat = \WpCafePro\Models\Seat_Plan_Model::find( $seat_id );
            if ( $seat ) {
                $seats[] = $seat;
            }
        }

        return $seats;
    }

    /**
     * Build a meta query array for searching qrcode posts by a given value.
     *
     * Searches the 'table_name', 'table_id', and 'page_url' meta fields for the provided value.
     *
     * @param string $search_value The value to search for in the qrcode meta fields.
     * @return array The meta query array for use in WP_Query or similar.
     */
    public function search_query( $search_value ) {
        $meta_query = [
            'relation' => 'OR',
            [
                'key'     => 'name',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'email',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'phone',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'date',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'branch',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'start_time',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'end_time',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
        ];

        return $meta_query;
    }

    /**
     * Build a meta query array for filtering posts by a given value.
     *
     * This method should be implemented in the concrete model class to return
     * a meta query array suitable for use in WP_Query or similar, based on the
     * provided filter value.
     *
     * @param mixed $filter_value The value to filter the posts by.
     * @return array The meta query array for use in WP_Query or similar.
     */
    public function filter_query( $filters ) {
        $meta_query = [ 'relation' => 'AND' ];

        // branch filter
        if ( ! empty( $filters['branch'] ) ) {
            $meta_query[] = [
                'key'     => 'branch',
                'value'   => $filters['branch'],
                'compare' => 'LIKE',
            ];
        }

        // date filter (exact date)
        if ( ! empty( $filters['date'] ) ) {
            $meta_query[] = [
                'key'     => 'date',
                'value'   => $filters['date'],
                'compare' => '=',
            ];
        }

        // date filter (exact date)
        if ( ! empty( $filters['food_order'] ) ) {
            $meta_query[] = [
                'key'     => 'food_order',
                'value'   => $filters['food_order'],
                'compare' => '=',
            ];
        }

        // date range filter
        if ( ! empty( $filters['date_range'] ) && is_array( $filters['date_range'] ) ) {
            $meta_query[] = [
                'key'     => 'date',
                'value'   => $filters['date_range'],
                'compare' => 'BETWEEN',
                'type'    => 'DATE',
            ];
        }

        return $meta_query;
    }

    /**
     * Get the total guest by date and time
     *
     * @param string $date The date to get the total guest for.
     * @param string $start_time The start time to get the total guest for.
     * @param string $end_time The end time to get the total guest for.
     * @return int The total guest for the date and time.
     */
    public static function get_total_guest_by_date_time( $date, $start_time, $end_time ) {
        $reservations = get_posts( [
            'post_type' => 'wpc_reservation',
            'post_status' => 'confirmed',
            'meta_query' => [
                [
                    'key' => 'date',
                    'value' => $date,
                    'compare' => '=',
                ],
                [
                    'key' => 'start_time',
                    'value' => $start_time,
                    'compare' => '=',
                ],
                [
                    'key' => 'end_time',
                    'value' => $end_time,
                    'compare' => '=',
                ],
            ],
        ] );

        $total_guest = 0;
        
        foreach ( $reservations as $reservation ) {
            $total_guest += $reservation->total_guest;
        }
        return $total_guest;
    }

    /**
     * Get the reservation booked capacity
     *
     * @param string $date The date to get the reservation booked capacity for.
     * @param string $start_time The start time to get the reservation booked capacity for.
     * @param string $end_time The end time to get the reservation booked capacity for.
     * @param int|string $branch_id Optional branch ID to filter by.
     * @return int The reservation booked capacity for the date and time.
     */
    public static function get_reservation_booked_capacity($date, $start_time, $end_time, $branch_id = '') {
        $capacity = 0;

        $start_time_string = strtotime( $date . ' ' . $start_time );
        $end_time_string   = strtotime( $date . ' ' . $end_time );

        $meta_query = [
            'relation' => 'AND',
            [
                'key' => 'start_time',
                'value' => $start_time_string,
                'compare' => '<=',
                'type' => 'NUMERIC',
            ],
            [
                'key' => 'end_time',
                'value' => $end_time_string,
                'compare' => '>=',
                'type' => 'NUMERIC',
            ],
        ];

        // Add branch filter if provided
        if ( ! empty( $branch_id ) ) {
            $meta_query[] = [
                'key' => 'branch_id',
                'value' => $branch_id,
                'compare' => '=',
            ];
        }

        $args = [
            'post_type' => 'wpc_reservation',
            'post_status' => 'confirmed',
            'meta_query' => $meta_query,
        ];

        $reservations = get_posts($args);

        foreach ( $reservations as $reservation ) {
            $capacity += $reservation->total_guest;
        }

        return $capacity;
    }

    /**
     * Get booked seat IDs for a specific time slot
     *
     * Finds all reservations that overlap with the given time slot
     * and returns all seat IDs that are booked during that period.
     *
     * @param string $date The reservation date
     * @param string $start_time The start time (can be timestamp or time string)
     * @param string $end_time The end time (can be timestamp or time string)
     * @param int $branch_id The branch ID to filter by
     * @return array Array of unique booked seat IDs
     */
    public static function get_booked_seats_for_time_slot( $date, $start_time, $end_time, $branch_id ) {
        // Convert time to timestamps for comparison
        $start_timestamp = is_numeric( $start_time ) ? $start_time : strtotime( $date . ' ' . $start_time );
        $end_timestamp   = is_numeric( $end_time ) ? $end_time : strtotime( $date . ' ' . $end_time );

        // Build meta query for overlapping reservations
        $meta_query = [
            'relation' => 'AND',
            [
                'relation' => 'OR',
                // Case 1: Reservation starts before or at our start time and ends after or at our start time
                [
                    'relation' => 'AND',
                    [
                        'key'     => 'start_time',
                        'value'   => $start_timestamp,
                        'compare' => '<=',
                        'type'    => 'NUMERIC',
                    ],
                    [
                        'key'     => 'end_time',
                        'value'   => $start_timestamp,
                        'compare' => '>=',
                        'type'    => 'NUMERIC',
                    ],
                ],
                // Case 2: Reservation starts before or at our end time and ends after or at our end time
                [
                    'relation' => 'AND',
                    [
                        'key'     => 'start_time',
                        'value'   => $end_timestamp,
                        'compare' => '<=',
                        'type'    => 'NUMERIC',
                    ],
                    [
                        'key'     => 'end_time',
                        'value'   => $end_timestamp,
                        'compare' => '>=',
                        'type'    => 'NUMERIC',
                    ],
                ],
                // Case 3: Reservation is completely within our time slot
                [
                    'relation' => 'AND',
                    [
                        'key'     => 'start_time',
                        'value'   => $start_timestamp,
                        'compare' => '>=',
                        'type'    => 'NUMERIC',
                    ],
                    [
                        'key'     => 'end_time',
                        'value'   => $end_timestamp,
                        'compare' => '<=',
                        'type'    => 'NUMERIC',
                    ],
                ],
            ],
        ];

        // Add branch filter (filter by location) if provided
        if ( ! empty( $branch_id ) && $branch_id !== 'undefined' ) {
            $meta_query[] = [
                'key'     => 'branch_id',
                'value'   => $branch_id,
                'compare' => '=',
            ];
        }

        $statuses_for_blocking_seats = wpc_get_option('block_timeslot_statuses', []);
        if ( ! is_array( $statuses_for_blocking_seats ) || empty( $statuses_for_blocking_seats ) ) {
            $statuses_for_blocking_seats = ['confirmed'];
        }

        $posts = get_posts([
            'post_type'     => 'wpc_reservation',
            'post_status'   => $statuses_for_blocking_seats ,
            'numberposts'   => -1,
            'meta_query'    => $meta_query,
        ]);

        // Convert posts to model Reservation_Model instances
        $reservations = array_map( function( $post ) {
            return new self( $post );
        }, $posts );

        // Collect all booked seat IDs
        $booked_seat_ids = [];

        foreach ( $reservations as $reservation ) {
            $seats = $reservation->seats ?? [];

            if ( ! empty( $seats ) && is_array( $seats ) ) {
                $booked_seat_ids = array_merge( $booked_seat_ids, $seats );
            }
        }

        // Return unique seat IDs
        return array_values( array_unique( $booked_seat_ids ) );
    }
}
