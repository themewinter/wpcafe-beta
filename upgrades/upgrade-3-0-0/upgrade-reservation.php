<?php
namespace WpCafe\Upgrades\Upgrade_3_0_0;

use WpCafe\Models\Reservation_Model;

/**
 * Class Upgrade_Reservation
 *
 * Handles the upgrade process for version 3.0.0.
 */
class Upgrade_Reservation {
    
    /**
     * Constructor for the Upgrade_Reservation class.
     *
     * Automatically triggers the upgrade process when an instance is created.
     */
    public function __construct() {
        // $this->migrate_reservation();
    }

    /**
     * Upgrade the reservation.
     *
     * @return void
     */
    public function migrate_reservation() {

        $reservations = get_posts( [
            'post_type'      => 'wpc_reservation',
            'posts_per_page' => -1,
        ] );

        if ( $reservations ) {
            foreach ( $reservations as $reservation ) {
                $reservation_data = get_post_meta( $reservation->ID );
                $data = [
                    'name'          => get_post_meta( $reservation->ID, 'wpc_name', true ),
                    'email'         => get_post_meta( $reservation->ID, 'wpc_email', true ),
                    'phone'         => get_post_meta( $reservation->ID, 'wpc_phone', true ),
                    'date'          => get_post_meta( $reservation->ID, 'wpc_booking_date_date', true ),
                    'start_time'    => get_post_meta( $reservation->ID, 'wpc_from_time', true ),
                    'end_time'      => '',
                    'total_guest'   => get_post_meta( $reservation->ID, 'wpc_to_time', true ),
                    'table_name'    => get_post_meta( $reservation->ID, '_table_name', true ),
                    'status'        => get_post_meta( $reservation->ID, 'wpc_reservation_state', true ),
                    'branch_id'     => '',
                    'branch_name'   => get_post_meta( $reservation->ID, 'wpc_branch', true ),
                    'notes'         => get_post_meta( $reservation->ID, 'wpc_booking_note', true ),
                    'invoice'       => get_post_meta( $reservation->ID, 'wpc_reservation_invoice', true ),
                    'total_price'  => '',
                ];

                Reservation_Model::create( $data );
            }
        }
    }
} 
