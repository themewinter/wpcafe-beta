<?php
namespace WpCafe\Admin;

use WpCafe\Contracts\Hookable_Service_Contract;
use WpCafe\Upgrades\Upgrader;

/**
 * Migration_Runner class. Run migrations
 *
 * @package WpCafe/AdminMenu
 */
class Migration_Runner implements Hookable_Service_Contract {
    /**
     * Register hooks
     *
     * @return  void
     */
    public function register() {
        // add_action( 'admin_init', [ $this, 'run_migration' ] ); 
    }

    /**
     * Run migrations
     *
     * @return  void
     */
    public function run_migration() {
        $db_migration = get_option( 'wpcafe_db_migration' );

        if ( $db_migration ) {
            return;
        }

        $upgrade = new Upgrader();
        $upgrade->run();
        update_option( 'wpcafe_db_migration', true );
    }
}
