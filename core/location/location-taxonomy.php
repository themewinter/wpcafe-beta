<?php
namespace WpCafe\Location;

use WpCafe\Contracts\Hookable_Service_Contract;

/**
 * Class to register the custom taxonomy 'wpcafe_location' under WooCommerce products.
 */
class Location_Taxonomy implements Hookable_Service_Contract {

    /**
     * Initialize the class by hooking into WordPress init action.
     */
    public function register() {
        add_action( 'init', [ $this, 'register_taxonomy' ], 50 );
    }

    /**
     * Registers the 'wpcafe_location' taxonomy for WooCommerce products.
     *
     * @return void
     */
    public function register_taxonomy() {
        $labels = [
            'name'              => __( 'Food Locations', 'wpcafe' ),
            'singular_name'     => __( 'Food Location', 'wpcafe' ),
            'search_items'      => __( 'Search Food Locations', 'wpcafe' ),
            'all_items'         => __( 'All Food Locations', 'wpcafe' ),
            'parent_item'       => __( 'Parent Food Location', 'wpcafe' ),
            'parent_item_colon' => __( 'Parent Food Location:', 'wpcafe' ),
            'edit_item'         => __( 'Edit Food Location', 'wpcafe' ),
            'update_item'       => __( 'Update Food Location', 'wpcafe' ),
            'add_new_item'      => __( 'Add New Food Location', 'wpcafe' ),
            'new_item_name'     => __( 'New Food Location Name', 'wpcafe' ),
            'menu_name'         => __( 'Food Locations', 'wpcafe' ),
        ];

        $args = [
            'labels'            => $labels,
            'public'            => true,
            'show_in_nav_menus' => true,
            'can_export'        => true,
            'show_admin_column' => false,
            'hierarchical'      => true,
            'query_var'         => true,
            'show_tagcloud'     => true,
            'show_in_menu'      => false,
            'show_ui'           => true,
        ];

        // Register for WooCommerce 'product' post type
        register_taxonomy( 'wpcafe_location', 'product', $args );
    }
}
