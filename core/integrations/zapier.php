<?php
namespace WpCafe\Integrations;

use WpCafe\Contracts\Hookable_Service_Contract;
use WpCafe\Contracts\Switchable_Service_Contract;

/**
* Zapier Service
 *
 * @since 1.0.0
 */
class Zapier implements Hookable_Service_Contract, Switchable_Service_Contract {

    /**
     * Register Services
     *
     * @return  void
     */
    public function register() {
        add_action('wpcafe_after_reservation_create', [$this, 'send_zapier_reservation_data']);
    }

    /**
     * Send reservation data to Zapier after a reservation is created.
     *
     * This function is hooked to the 'wpcafe_after_reservation_create' action and sends
     * the reservation's name, email, and phone to the configured Zapier webhook URL,
     * if the integration is enabled and a webhook URL is set.
     *
     * @param object $reservation The reservation object containing reservation details.
     * @return object The original reservation object.
     */
    public function send_zapier_reservation_data( $reservation ) {

        if ( ! wpc_is_integration_enable('zapier') ) {
            return;
        }
        
        $webhook_url = wpc_get_option('zapier_webhook_url');

        if ( ! $webhook_url ) {
            return;
        }
        
        $reservation_data = [
            'name' => $reservation->name,
            'email' => $reservation->email,
            'phone' => $reservation->phone,
        ];

        $response = wp_remote_post( $webhook_url, [
            'body' => json_encode( $reservation_data ),
        ] );
        
        return $reservation;
    }

    /**
     * Check if zapier is enabled
     *
     * @return  bool
     */
    public function is_enable() {
        return wpc_is_integration_enable('zapier');
    }
}

