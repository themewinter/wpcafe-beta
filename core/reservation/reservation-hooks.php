<?php

namespace WpCafe\Reservation;

use WpCafe\Contracts\Hookable_Service_Contract;

/**
 * Reservation Hooks Class
 *
 * Handles WordPress and WooCommerce hooks for reservation functionality
 *
 * @package WpCafe\Reservation
 * @since 1.0.0
 */
class Reservation_Hooks implements Hookable_Service_Contract {

    /**
     * Register all hooks
     *
     * @return void
     */
    public function register(): void {
        add_action( 'woocommerce_before_order_notes', [ $this, 'wpc_display_reservation_info_on_checkout' ] );
        add_filter( 'wpcafe_settings' , [ $this, 'return_empty_color_settings_as_object' ] );
    }

    /**
     * Display reservation information on WooCommerce checkout page
     *
     * Shows reservation details if they exist in the WooCommerce session
     *
     * @return void
     */
    public function wpc_display_reservation_info_on_checkout(): void {
        // Check if WooCommerce is available and session exists
        if ( ! function_exists( 'WC' ) || ! WC()->session ) {
            return;
        }

        $reservation_data = WC()->session->get( 'wpc_reservation_data' );

        // Exit early if no reservation data exists
        if ( empty( $reservation_data ) || ! is_array( $reservation_data ) ) {
            return;
        }

        // Include the reservation details template
        $template_path = wpcafe()->template_directory . '/reservation/reservation-view.php';

        if ( file_exists( $template_path ) ) {
            include $template_path;
        }
    }

    /**
     * Ensures colorSettings always returns empty object in response when empty.
     *
     * This function modifies the given settings array by replacing an empty colorSettings array with an empty stdClass.
     * This is to ensure that the colorSettings key always returns an object, even if it is empty.
     *
     * @param  array $settings The settings array to be modified.
     * @return array The modified settings array.
     */
    public function return_empty_color_settings_as_object( $settings ) {
        if ( ! isset( $settings['visual_table_layout']['colorSettings'] ) ) {
            return $settings;
        }

        $color_settings = $settings['visual_table_layout']['colorSettings'];

        if ( empty( $color_settings ) && is_array( $color_settings ) ) {
            $settings['visual_table_layout']['colorSettings'] = new \stdClass();
        }

        return $settings;
    }
}