<?php
namespace WpCafe\FoodOrder\Shortcodes;

use WpCafe\Abstract\Base_Shortcode;
use WpCafe\Utils\Wpc_Utilities;

/**
 * Food Menu Tab Shortcode
 */
class Food_Menu_Tab extends Base_Shortcode {

    /**
     * Shortcode tag name.
     *
     * @return string
     */
    public function tag() {
        return 'wpc_food_menu_tab';
    }

    /**
     * Render shortcode content.
     *
     * @param array  $atts    Shortcode attributes.
     * @param string $content Shortcode content.
     *
     * @return string
     */
    public function render( $atts = [], $content = null ) {
        if (! class_exists('Woocommerce') ) { return; }
        $settings = array();
        $atts     = Wpc_Utilities::replace_qoute( $atts );

        $atts = extract(shortcode_atts([
            'style'                 => 'style-1',
            'wpc_food_categories'   => '',
            'no_of_product'         => 5,
            'wpc_desc_limit'        => 20,
            'wpc_menu_order'        => 'DESC',
            'wpc_show_desc'         => 'yes',
            'title_link_show'       => 'yes',
            'show_item_status'      => 'yes',
            'product_thumbnail'     => 'yes',
            'wpc_cart_button'       => 'yes',
            'wpc_price_show'        => 'yes',
        ], $atts));

        ob_start();
        $wpc_cat_arr  = explode(',', $wpc_food_categories);
        if (!empty($wpc_cat_arr)) {
            $food_menu_tabs = Wpc_Utilities::get_tab_array_from_category($wpc_cat_arr);
            
            // sort category list
            if ( !empty($food_menu_tabs) ) {
                ksort($food_menu_tabs);
            }
            
            $unique_id = md5(md5(microtime()));
            $settings["food_menu_tabs"]         = $food_menu_tabs;
            $settings["food_tab_menu_style"]    = $style;
            $settings["show_thumbnail"]         = $product_thumbnail;
            $settings["wpc_menu_order"]         = $wpc_menu_order;
            $settings["show_item_status"]       = $show_item_status;
            $settings["wpc_menu_count"]         = $no_of_product;
            $settings["wpc_show_desc"]          = $wpc_show_desc;
            $settings["wpc_desc_limit"]         = $wpc_desc_limit;
            $settings["title_link_show"]        = $title_link_show;
            $settings["wpc_cart_button"]        = $wpc_cart_button;
            $settings["wpc_price_show"]        = $wpc_price_show;
            // render template
            $template = wpcafe()->template_directory . "/shortcodes/food-tab.php";

            $allowed_styles = ['style-1', 'style-2'];
            if ( in_array( $style, $allowed_styles, true ) 
            && file_exists( wpcafe()->plugin_directory . "/widgets/wpc-food-menu-tab/style/{$style}.php" )
            && file_exists( $template ) ){
                include $template;
            }
        }
        
        return ob_get_clean();
    }
}
