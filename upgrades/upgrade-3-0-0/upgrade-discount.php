<?php
namespace WpCafe\Upgrades\Upgrade_3_0_0;

use WpCafePro\Models\Discount_Model;

/**
 * Class Upgrade_Discount
 *
 * Handles the upgrade process for version 3.0.0.
 */
class Upgrade_Discount {
    
    /**
     * Constructor for the Upgrade_Discount class.
     *
     * Automatically triggers the upgrade process when an instance is created.
     */
    public function __construct() {
        $this->migrate_discount();
    }

    /**
     * Upgrade the discount.
     *
     * @return void
     */
    public function migrate_discount() {
        $products        = wpc_get_option( 'wpc_pro_include_menu' );
        $categories      = wpc_get_option( 'wpc_pro_include_cat' );
        $discount_amount = wpc_get_option( 'wpc_pro_discount_percentage' );

        $date_rule = [
            'type'       => 'date_range',
            'start_date' => wp_date( 'Y-m-d' ),
            'end_date'   => wp_date( 'Y-m-d' )
        ];

        $data = [
            'discount_type'     => 'percentage',
            'discount_amount'   => $discount_amount,
            'discount_title'    => 'Discount (migrated)',
            'products'          => $products,
            'categories'        => $categories,
            'discount_status'   => 'active',
            'date_rule'         => $date_rule,
        ];

        $discount = Discount_Model::create( $data );
    }
} 
