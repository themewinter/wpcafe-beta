<?php
namespace WpCafe;
use WpCafe\Onboard\Onboarding;

/**
 * Activation class
 * 
 * @package WpCafe
 */
class Activate {
    /**
     * Trigger on plugin activation hook
     *
     * @return  void
     */
    public static function run(): void {
        // todo: Add activation logic.
        Onboarding::onboarding_init();
    }
}
