<?php
namespace WpCafe\Settings\Controllers;

use WP_REST_Server;
use WpCafe\Abstract\Base_Rest_Controller;
use WpCafe\Settings;

/**
 * Settings_Controller class. Handles settings related REST API requests.
 *
 * @package WpCafe/Settings/Controllers
 */
class Settings_Controller extends Base_Rest_Controller {
    /**
     * Store the namespace for the REST API.
     *
     * @var string
     */
    protected $namespace = 'wpcafe/v2';

    /**
     * Store the REST base for the API.
     *
     * @var string
     */
    protected $rest_base = 'settings';

    /**
     * Register the REST routes for settings.
     *
     * @return void
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base,
            [
                [
                    'methods'  => WP_REST_Server::READABLE,
                    'callback' => [ $this, 'get_settings' ],
                    'permission_callback' => [ $this, 'get_settings_check_permissions' ],
                ],
                [
                    'methods'  => WP_REST_Server::EDITABLE,
                    'callback' => [ $this, 'update_settings' ],
                    'permission_callback' => [ $this, 'update_settings_check_permissions' ],
                ]
            ]
        );

        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/public',
            [
                'methods'  => WP_REST_Server::READABLE,
                'callback' => [ $this, 'get_settings' ],
                'permission_callback' => '__return_true',
            ]
        );
    }

    /**
     * Get settings.
     *
     * @param \WP_REST_Request $request The request object.
     * @return \WP_REST_Response
     */
    public function get_settings( $request ) {
        $settings = Settings::get();
    
        $settings = apply_filters( 'wpcafe_settings', $settings );

        return $this->response( $settings );
    }

    /**
     * Check permissions for accessing settings.
     *
     * @return bool
     */
    public function get_settings_check_permissions() {
        return true;
    }

    /**
     * Get public settings.
     *
     * @return void
     */
    public function get_public_settings( $request ) {
        // Logic to retrieve public settings goes here.
        return new \WP_REST_Response( [], 200 );
    }

    /**
     * Update settings.
     *
     * @return \WP_REST_Response
     */
    public function update_settings( $request ) {
        $params = $request->get_params();
        Settings::update( $params );

        return $this->get_item( $request );
    }

    /**
     * Check permissions for updating settings.
     *
     * @return bool
     */
    public function update_settings_check_permissions( $request ) {
        return current_user_can( 'manage_options' );
    }

    /**
     * Get a collection of items.
     *
     * @param WP_REST_Request $request Full data about the request.
     * @return WP_Error|WP_REST_Response
     */
    public function get_item( $request ) {
        $settings = Settings::get();

        $settings = apply_filters( 'wpcafe_settings', $settings );

        return $this->response( $settings );
    }
}

