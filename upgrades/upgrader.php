<?php
namespace WpCafe\Upgrades;

use WpCafe\Upgrades\Upgrade_3_0_0\V3_0_0;

class Upgrader {
    /**
     * The upgraders array.
     *
     * @var array
     */
    private $upgraders = [
        '3.0.0' => Upgrade_3_0_0\V3_0_0::class,
    ];
    
    /**
     * Run the upgraders.
     *
     * @return array
     */
    public function run() {
        foreach ( $this->upgraders as $version => $upgrader ) {
            if ( version_compare( get_option( 'wpcafe_version' ), $version, '>=' ) ) {
                continue;
            }

            $upgrader = new $upgrader();
            $upgrader->upgrade();

            update_option( 'wpcafe_version', $version );
        }
    }
} 
