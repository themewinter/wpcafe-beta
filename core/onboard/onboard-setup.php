<?php

namespace WpCafe\Onboard;

use WpCafe\Contracts\Hookable_Service_Contract;
/**
 * Onboard Setup
 *
 * @package WpCafe/Onboard
 */
class Onboard_Setup implements Hookable_Service_Contract {
    /**
     * Register hooks
     *
     * @return  void
     */
    public function register() {
        add_action( 'admin_init', [ self::class, 'redirect_to_onboarding' ] );
    }   

    /**
     * Initialize onboarding
     *
     * @return  void
     */
    public static function init() {
        add_action( 'admin_init', [ self::class, 'redirect_to_onboarding' ] );
    }   

    /**
     * Redirect to onboarding
     *
     * @return  void
     */
    public static function redirect_to_onboarding() {
        if ( wpc_get_option( 'onboarding_init', false ) ) {
            Onboarding::redirect_to_onboarding();
        }
    }
}

