<?php
namespace WpCafe\Location;

use WpCafe\Contracts\Hookable_Service_Contract;
use WpCafe\Core\Modules\Guten_Block\Inc\Blocks\Location;
use WpCafe\Models\Location_Model;
use WpCafe\Session;

/**
 * Location Selector Class
 */
class Location_Selector implements Hookable_Service_Contract {

    /**
     * Initialize the class by hooking into WordPress woocommerce_review_order_before_shipping action.
     */
    public function register() {
        add_action( 'woocommerce_review_order_before_order_total', [ $this, 'display_checkout_location_selector' ] );

        add_action('wp_footer', [ $this, 'add_location_modal_html' ] );

        add_action( 'wp_ajax_save_location', [ $this, 'save_location' ] );
        add_action( 'wp_ajax_nopriv_save_location', [ $this, 'save_location' ] );

        add_action( 'woocommerce_checkout_create_order', [ $this, 'save_location_meta' ], 10, 2 );

    }

    /**
     * Display mini checkout at location selector.
     *
     * @return void
     */
    public function display_checkout_location_selector() {
        require_once wpcafe()->template_directory . '/location/checkout-location-selector.php';
    }

    /**
     * Add location modal
     *
     * @return  void
     */
    public function add_location_modal_html() {
        $locations         = Location_Model::all();
        $selected_location_id = wpc_selected_location_id();

        require_once wpcafe()->template_directory . '/location/location-selector-popup.php';
    }

    /**
     * Save location
     *
     * @return  json
     */
    public function save_location() {
        $location_id = ! empty( $_POST['location_id'] ) ? intval( $_POST['location_id'] ) : 0;

        if ( ! WC()->cart->is_empty() && $location_id != wpc_selected_location_id() ){
            WC()->cart->empty_cart();
        }

        Session::set( 'selected_location', $location_id );

        wp_send_json_success([
            'message' => __( 'Successfully updated location', 'wpcafe' )
        ]);
    }

    /**
     * Save location meta data
     *
     * @param   Object  $order  WC Order Object
     * @param   array  $data   Order data
     *
     * @return  void
     */
    public function save_location_meta( $order, $data ) {
        $selected_location_id = wpc_selected_location_id();
        $location   = Location_Model::find( $selected_location_id );

        if ( ! $location ) {
            return;
        }

        $order->update_meta_data( 'wpc_location_id', $location->term_id );
        $order->update_meta_data( 'wpc_location_name', $location->location );
    }
}
