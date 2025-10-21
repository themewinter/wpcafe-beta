<?php
namespace WpCafe\Payments\Controllers;

use WpCafe\Abstract\Base_Rest_Controller;
use WP_Error;
use WP_HTTP_Response;
use WP_REST_Server;
use WpCafe\Payments\Payment_Processor;

/**
 * Payment controller
 *
 * Handles all REST API endpoints for payments.
 *
 * @package WpCafe/Payments
 */
class Payment_Controller extends Base_Rest_Controller {
    /**
     * Endpoint namespace
     *
     * @var string
     */
    protected $namespace = 'wpcafe/v2';

    /**
     * Route base
     *
     * @var string
     */
    protected $rest_base = 'payments';

    /**
     * Register all routes related to payment
     *
     * @return void
     */
    public function register_routes(): void {

        register_rest_route($this->namespace, '/' . $this->rest_base, [
            [
                'methods'             => WP_REST_Server::CREATABLE,
                'callback'            => [$this, 'create_item'],
                'permission_callback' => [$this, 'create_item_permissions_check'],
            ],
        ]);
    }

    /**
     * Check user permissions
     *
     * @param \WP_REST_Request $request
     * @return bool
     */
    public function permissions_check($request): bool {
        return true;
    }

    /**
     * Create a new payment
     *
     * @param \WP_REST_Request $request
     * @return WP_HTTP_Response|WP_Error
     */
    public function create_item($request) {
        $data = json_decode( $request->get_body(), true );
        $payment_method = $data['payment_method'];
        $reservation_id = $data['reservation_id'];

        if ( empty( $payment_method ) ) {
            return $this->error( __( 'Payment method is required', 'wpcafe' ) );
        }

        if ( empty( $reservation_id ) ) {
            return $this->error( __( 'Reservation ID is required', 'wpcafe' ) );
        }

        $payment_procce = new Payment_Processor( $payment_method );
        $response       = $payment_procce->process_payment( [
            'reservation_id' => $reservation_id,
        ] );

        return $this->response( $response );
    }

    /**
     * Check if a given request has access to create items.
     *
     * @param WP_REST_Request $request Full data about the request.
     * @return WP_Error|boolean
     */
    public function create_item_permissions_check( $request ) {
        return true;
    }
}
