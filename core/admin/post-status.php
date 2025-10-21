<?php
namespace WpCafe\Admin;

use WpCafe\Contracts\Hookable_Service_Contract;

/**
 * Add default settings
 *
 * @package WpCafe/Default settings
 */
class Post_Status implements Hookable_Service_Contract {
    /**
     * Register hooks
     *
     * @return  void
     */
    public function register() {
        add_action( 'init', [ $this, 'register_active_post_status' ], 999 );
    }

    /**
     * Registers custom post status 'active' for posts.
     *
     * This function is hooked into 'init' and registers a new post status called 'active'.
     * The status is public, included in admin lists, and displays a count.
     *
     * @return void
     */
    public function register_active_post_status() {
        register_post_status( 'active', [
            'label'                     => _x( 'Active', 'wpcafe' ),
            'public'                    => true,
            'exclude_from_search'       => false,
            'show_in_admin_all_list'    => true,
            'show_in_admin_status_list' => true,
            'label_count'               => _n_noop( 'Active <span class="count">(%s)</span>', 'Active <span class="count">(%s)</span>', 'wpcafe' ),
        ] );

        register_post_status( 'inactive', [
            'label'                     => _x( 'Inactive', 'wpcafe' ),
            'public'                    => true,
            'exclude_from_search'       => false,
            'show_in_admin_all_list'    => false,
            'show_in_admin_status_list' => false,
            'label_count'               => _n_noop( 'Inactive <span class="count">(%s)</span>', 'Inactive <span class="count">(%s)</span>', 'wpcafe' ),
        ] );

        register_post_status( 'confirmed', [
            'label'                     => _x( 'Confirmed', 'wpcafe' ),
            'public'                    => true,
            'exclude_from_search'       => false,
            'show_in_admin_all_list'    => false,
            'show_in_admin_status_list' => false,
            'label_count'               => _n_noop( 'Confirmed <span class="count">(%s)</span>', 'Confirmed <span class="count">(%s)</span>', 'wpcafe' ),
        ] );

        register_post_status( 'pending_payment', [
            'label'                     => _x( 'Pending Payment', 'wpcafe' ),
            'public'                    => true,
            'exclude_from_search'       => false,
            'show_in_admin_all_list'    => false,
            'show_in_admin_status_list' => false,
            'label_count'               => _n_noop( 'Pending Payment <span class="count">(%s)</span>', 'Pending Payment <span class="count">(%s)</span>', 'wpcafe' ),
        ] );

        register_post_status( 'refunded', [
            'label'                     => _x( 'Refunded', 'wpcafe' ),
            'public'                    => true,
            'exclude_from_search'       => false,
            'show_in_admin_all_list'    => false,
            'show_in_admin_status_list' => false,
            'label_count'               => _n_noop( 'Refunded <span class="count">(%s)</span>', 'Refunded <span class="count">(%s)</span>', 'wpcafe' ),
        ] );

        register_post_status( 'cancelled', [
            'label'                     => _x( 'Cancelled', 'wpcafe' ),
            'public'                    => true,
            'exclude_from_search'       => false,
            'show_in_admin_all_list'    => false,
            'show_in_admin_status_list' => false,
            'label_count'               => _n_noop( 'Cancelled <span class="count">(%s)</span>', 'Cancelled <span class="count">(%s)</span>', 'wpcafe' ),
        ] );
    }
}
