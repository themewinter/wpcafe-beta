<?php
namespace WpCafe\Extensions\Controllers;
 
use Arraytics\ToolsSdk\PluginManager;
use WP_REST_Server;
use WpCafe\Abstract\Base_Rest_Controller;
use WP_Error;
 
/**
* Plugin_Controller class. Handles extension related REST API requests.
*
* @package WpCafe/Settings/Controllers
*/
class Plugin_Controller extends Base_Rest_Controller {
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
    protected $rest_base = 'plugins';
 
    /**
     * Register routes
     *
     * @return void
     */
    public function register_routes() {
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
     * Enable or disable plugin
     *
     * @param   WP_Rest_Request  $request  [$request description]
     *
     * @return  WP_Response | WP_Error
     */
    public function update_item( $request ) {
        $input_data = json_decode( $request->get_body(), true );
 
        $name   = ! empty( $input_data['name'] ) ? sanitize_text_field( $input_data['name'] ) : '';
        $status = ! empty( $input_data['status'] ) ? sanitize_text_field( $input_data['status'] ) : '';
 
        $statuses = ['install', 'activate', 'deactivate'];
 
        if ( ! $name ) {
            return $this->error( __( 'Please enter plugin name', 'wpcafe' ) );
        }
 
        if (  ! $status ) {
            return $this->error( __( 'Please plugin enter status', 'wpcafe' ) );
        }
 
        if ( ! in_array( $status, $statuses ) ) {
            return $this->error( __( 'Invalid status', 'wpcafe' ) );
        }
 
        $plugin = wpcafe_extension()->find( $name );
        $deps = ! empty( $plugin['deps'] ) ? $plugin['deps'] : [];
 
        if ( $deps ) {
            foreach ( $deps as $dep ) {
                if ( ! PluginManager::is_installed( $dep ) ) {
                    return $this->error( __( 'Dependency plugin ' . $dep . ' is not installed', 'wpcafe' ) );
                }
            }
        }
 
        $update = false;
 
        if ( $status === 'install' ) {
            $update = PluginManager::install_plugin( $name );
        }
 
        if ( $status === 'activate' ) {
            $update = PluginManager::activate_plugin( $name );
        }
 
        if ( $status === 'deactivate' && PluginManager::is_activated( $name ) ) {
            $update = PluginManager::deactivate_plugin( $name );
        }
        
        if ( ! $update ) {
            return $this->error( __( 'Plugin couldn\'t ' . $status, 'wpcafe' ) );
        }
 
        $response = [
            'message' => __( 'Successfully updated', 'wpcafe' ),
        ];
 
        return $this->response( $response );
    }
}