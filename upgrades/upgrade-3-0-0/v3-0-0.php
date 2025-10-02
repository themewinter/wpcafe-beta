<?php
namespace WpCafe\Upgrades\Upgrade_3_0_0;

use WpCafe\Upgrades\Upgrade_Interface;
use WpCafe\Upgrades\Upgrade_3_0_0\Upgrade_Reservation;

/**
 * Class V3_0_0
 *
 * Implements the upgrade logic for version 3.0.0.
 */ 
class V3_0_0 implements Upgrade_Interface {
    /**
     * Upgrade the plugin.
     *
     * @return void
     */
    public function upgrade() {
        new Upgrade_Module();   
        new Upgrade_Integration();
        new Upgrade_Reservation();

        if ( function_exists( 'wpcafe_pro' ) ) {
            new Upgrade_Discount();
        }
    }
} 

