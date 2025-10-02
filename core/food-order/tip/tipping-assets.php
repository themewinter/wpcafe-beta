<?php
    namespace WpCafe\FoodOrder\Tip;

/**
 * Handles loading frontend assets for the tipping module.
 */
class Tipping_Assets {
    /**
     * Register WordPress hooks.
     *
     * @return void
     */
    public function __construct() {
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue' ] );
    }

    /**
     * Enqueue CSS and JS assets with localized data.
     *
     * @return void
     */
    public function enqueue() {
        wp_enqueue_style( 'wpc-pro-tip' );

        wp_enqueue_script( 'wpc-pro-tip' );

        wp_localize_script( 'wpc-pro-tip', 'wpc_pro_tip_obj', [
            'ajax_url'         => admin_url( 'admin-ajax.php' ),
            'add_tip_nonce'    => wp_create_nonce( 'add_tip_nonce_value' ),
            'remove_tip_nonce' => wp_create_nonce( 'remove_tip_nonce_value' ),
        ]);
    }
}
