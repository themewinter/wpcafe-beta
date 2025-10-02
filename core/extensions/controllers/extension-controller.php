<?php
namespace WpCafe\Extensions\Controllers;

use WP_REST_Server;
use WpCafe\Abstract\Base_Rest_Controller;
use WpCafe\Settings;
use WP_Error;

/**
 * Extension_Controller class. Handles extension related REST API requests.
 *
 * @package WpCafe/Settings/Controllers
 */
class Extension_Controller extends Base_Rest_Controller {
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
    protected $rest_base = 'extentions';

    /**
     * Register routes
     *
     * @return void
     */
    public function register_routes() {
        /*
         * Register route
         */
        register_rest_route( $this->namespace, $this->rest_base, [
            [
                'methods'             => \WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_items'],
                'permission_callback' => function () {
                    return current_user_can( 'manage_options' );
                },
            ],
        ] );

        register_rest_route( $this->namespace, $this->rest_base, [
            [
                'methods'             => \WP_REST_Server::EDITABLE,
                'callback'            => [$this, 'update_item'],
                'permission_callback' => function () {
                    return current_user_can( 'manage_options' );
                },
            ],
        ] );

    }

    /**
     * Get all extensions
     *
     * @param   WP_Rest_Request  $request
     *
     * @return  WP_Rest_Response
     */
    public function get_items( $request ) {
        $type = ! empty( $request['type'] ) ? $request['type'] : 'all';

        $types = [
            'module' => wpcafe_extension()->get_modules(),
            'addon'  => wpcafe_extension()->get_addons(),
            'plugin' => wpcafe_extension()->get_plugins(),
            'all'    => wpcafe_extension()->get()
        ];

        if ( ! array_key_exists( $type, $types ) ) {
            return $this->error( __( 'Invalid type provided', 'wpcafe' ) );
        }

        return $this->response( $types[$type] );
    }

    /**
     * Enable or disable extension
     *
     * @param   WP_Rest_Request  $request  [$request description]
     *
     * @return  WP_Response | WP_Error
     */
    public function update_item( $request ) {
        $input_data = json_decode( $request->get_body(), true );

        $name   = ! empty( $input_data['name'] ) ? sanitize_text_field( $input_data['name'] ) : '';
        $status = ! empty( $input_data['status'] ) ? sanitize_text_field( $input_data['status'] ) : '';

        $statuses = ['off', 'on', 'install', 'activate', 'deactivate'];

        if ( ! $name ) {
            return $this->error( __( 'Please enter extension name', 'wpcafe' ) );
        }

        if (  ! $status ) {
            return $this->error( __( 'Please enter status', 'wpcafe' ) );
        }

        if ( ! in_array( $status, $statuses ) ) {
            return $this->error( __( 'Please enter status on/off', 'wpcafe' ) );
        }

        if ( ! wpcafe_extension()->find( $name ) ) {
            return $this->error( __( 'Invalid extension.', 'wpcafe' ) );
        }

        $update = wpcafe_extension()->update( $name, $status );

        $parent = wpcafe_extension()->find_parent( $name );

        if ( $parent ) {
            $parent_status = wpcafe_extension()->find( $parent )['status'];

            if ( $status === 'on' ) {
                wpcafe_extension()->update( $parent, 'on' );
            }
        }

        if ( is_wp_error( $update ) ) {
            return $this->error( strip_tags($update->get_error_message()) );
        }

        if ( ! $update ) {
            return $this->error( __( 'Extension couldn\'t ' . $status, 'wpcafe' ) );
        }

        $response = wpcafe_extension()->get();

        $response['message'] = __( 'Successfully updated', 'wpcafe' );

        return $this->response( $response );
    }
}

