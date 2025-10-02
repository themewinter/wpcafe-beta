<?php
namespace WpCafe\Assets;

use WpCafe\Session;
use WpCafe\Settings;

/**
 * Manage all frontend scripts and styles
 */
class Frontend_Assets extends Base_Assets {
    /**
     * Register single service
     *
     * @return  void
     */
    public function register() {
        add_action( 'wp_enqueue_scripts',  [$this, 'register_styles_scripts'] );
        add_action( 'wp_enqueue_scripts',  [$this, 'enqueue'] );
    }

    /**
     * Enqueue scripts and styles
     *
     * @return  void
     */
    public function enqueue() {
        wp_enqueue_style( 'wpcafe-frontend-style' );
        wp_enqueue_style( 'flatpicker' );
        wp_enqueue_style( 'jquery-timepicker' );
        wp_enqueue_style( 'wpc-public' );
        wp_enqueue_style( 'wpc-location-selector' );

        wp_enqueue_script( 'wpcafe-frontend-scripts' );
        wp_enqueue_script( 'wpc-flatpicker' );
        wp_enqueue_script( 'wpc-public' );
        wp_enqueue_script( 'wpc-location-selector' );
        wp_enqueue_style( 'wpc-icon' );

        $form_data                        = [];
        $form_data['settings']            = Settings::get();
        $form_data['wpc_ajax_url']        = admin_url( 'admin-ajax.php' );
        $form_data['wpc_validation_message'] = [
            'error_text'    => esc_html__('Please fill the field', 'wpcafe'),
            'email'         => esc_html__('Email is not valid', 'wpcafe'),
            'phone'         => [
                'phone_invalid'     => esc_html__('Invalid phone number', 'wpcafe'),
                'number_allowed'    => esc_html__('Only number allowed', 'wpcafe'),
             ],
             'table_layout'         => [
                'empty'         => esc_html__( 'Please choose available table/chair for reservation', 'wpcafe' ),
                'min_invalid'   => esc_html__( 'Minimum allowed guest is ', 'wpcafe' ),
                'max_invalid'   => esc_html__( 'Maximum allowed guest is ', 'wpcafe' ),
             ],
        ];
        $form_data['wpc_form_dynamic_text'] = [
            'wpc_guest_count'    => esc_html__('Select number of guests', 'wpcafe'),
            'wpc_additional_information'    => esc_html__('Additional Information:', 'wpcafe')
        ];

        $form_data['_nonces'] = [
            'wpc_check_for_submission_nonce'    => wp_create_nonce('wpc_check_for_submission_nonce'),
            'filter_food_location_nonce'        => wp_create_nonce('filter_food_location_nonce'),
            'wpc_seat_capacity_nonce'           => wp_create_nonce('wpc_seat_capacity_nonce')
        ];
        wp_localize_script( 'wpc-public', 'wpc_form_client_data', [ json_encode( $form_data ) ] );

        wp_localize_script( 'wpc-location-selector', 'wpcLocation', [
            'ajaxUrl'          => admin_url('admin-ajax.php'),
            'selectedLocation' => Session::get('selected_location'),
            'wc_cart_url'      => function_exists( 'wc_get_cart_url' ) ? wc_get_cart_url() : '',
            'require_location'          => wpc_get_option('require_location'),
            'location_selector'         => wpc_get_option('display_location_selector'),
            'location_selector_pages'   => wpc_get_option('location_selector_pages'),
            'current_page_id'           => get_the_ID(),
            'wc_cart_empty'             => function_exists( 'WC' ) ? WC()->cart->is_empty() : false,
        ] );

        wp_localize_script( 'wpcafe-frontend-scripts', 'wpCafe', Localize::get_frontend() );
    }

    /**
     * Get all scripts
     *
     * @return  array List register scripts
     */
    public function get_scripts() {
        $scripts = [
            'wpcafe-frontend-scripts'     => [
                'src'       => wpcafe()->assets_url . '/build/js/frontend.js',
                'deps'      => [],
                'in_footer' => true,
            ],
            'wpc-flatpicker'     => [
                'src'       => wpcafe()->assets_url . '/js/flatpickr.min.js',
                'deps'      => ['jquery'],
                'in_footer' => true,
            ],
            'wpc-public'    => [
                'src'       => wpcafe()->assets_url . '/js/wpc-public.js',
                'deps'      => ['jquery'],
                'in_footer' => true,
            ],
            'wpc-location-selector'    => [
                'src'       => wpcafe()->assets_url . '/js/location-selector.js',
                'deps'      => ['jquery'],
                'in_footer' => true,
            ],
        ];

        return apply_filters( 'wpcafe_frontend_scripts', $scripts );
    }

    /**
     * List of register styles
     *
     * @return  array
     */
    public function get_styles() {
        $styles = [
            'wpcafe-frontend-style'    => [
                'src' => wpcafe()->assets_url . '/build/css/frontend.css',
            ],
            'flatpicker'    => [
                'src' => wpcafe()->assets_url . '/css/flatpickr.min.css',
            ],
            'jquery-timepicker'    => [
                'src' => wpcafe()->assets_url . '/css/jquery.timepicker.min.css',
            ],
            'wpc-public'    => [
                'src' => wpcafe()->assets_url . '/css/wpc-public.css',
            ],
            'wpc-location-selector'    => [
                'src' => wpcafe()->assets_url . '/css/location-selector.css',
            ],
            'wpc-icon'    => [
                'src' => wpcafe()->assets_url . '/css/wpc-icon.css',
            ],
        ];

        return apply_filters( 'wpcafe_frontend_styles', $styles );
    }
}
