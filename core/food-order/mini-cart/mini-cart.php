<?php
/**
 * Mini Cart
 *
 * Handles mini cart rendering and fragment refresh.
 *
 * @package WpCafe\FoodOrder\Mini_Cart
 * @since   1.0.0
 */

namespace WpCafe\FoodOrder\Mini_Cart;

use Astra_Woocommerce;

/**
 * Mini Cart Class
 *
 * Provides frontend mini cart rendering, cart fragment updates,
 * and extra content like pickup/delivery toggles.
 *
 * @since 1.0.0
 */
class Mini_Cart {

    /**
     * Initialize the mini cart functionality.
     *
     * @since 1.0.0
     */
    public function __construct() {
        add_action( 'wp_head', array( $this, 'add_inline_script' ) );
        add_action( 'wp_footer', array( $this, 'add_mini_cart' ) );

        // add_action( 'woocommerce_widget_shopping_cart_buttons', array( $this, 'mini_cart_add_class' ), 20 );
        add_action( 'woocommerce_widget_shopping_cart_before_buttons', array( $this, 'handle_mini_cart_buttons_before' ) );
        add_action( 'woocommerce_widget_shopping_cart_before_buttons', array( $this, 'before_minicart_buttons_add_extra_content' ), 9, 1 );

        add_filter( 'woocommerce_add_to_cart_fragments', array( $this, 'wpc_add_to_cart_count_fragment_refresh' ), 30, 1 );
        add_filter( 'woocommerce_add_to_cart_fragments', array( $this, 'wpc_add_to_cart_content_fragment_refresh' ) );

        // Remove Astra cart fragment handling to avoid conflicts.
        if ( class_exists( 'Astra_Woocommerce' ) ) {
            $obj = Astra_Woocommerce::get_instance();
            remove_filter( 'woocommerce_add_to_cart_fragments', array( $obj, 'cart_link_fragment' ), 11 );
            remove_filter( 'add_to_cart_fragments', array( $obj, 'cart_link_fragment' ), 11 );
        }
    }

    /**
     * Add mini cart markup to the footer.
     *
     * Shows location modal if enabled in settings and location not selected.
     *
     * @since 1.0.0
     * @return void
     */
    public function add_mini_cart() {
        if ( ! class_exists( 'WooCommerce' ) ) {
            return;
        }

        if ( is_checkout() || is_cart() ) {
            return;
        }

        $settings = wpc_get_option();
        $location = isset( $_GET['location'] ) ? absint( $_GET['location'] ) : 0;

        // Show location modal if required.
        if ( ! empty( $settings['wpcafe_food_location'] ) && 'on' === $settings['wpcafe_food_location'] && empty( $location ) ) {
            ?>
            <div class="popup_location"></div>
            <script type="text/javascript">
                jQuery( document ).ready( function() {
                    var location_data = localStorage.getItem( 'wpc_location' );
                    location_data     = location_data !== null ? JSON.parse( location_data ) : null;

                    if ( jQuery( '.wpc_map_and_result_wrapper' ).length === 0 ) {
                        if ( location_data === null || ( typeof location_data.value !== 'undefined' && location_data.value === '' ) ) {
                            jQuery( '.popup_location' ).html(
                                `<div id="wpc_location_modal" class="wpc_modal">
                                    <div class="modal-content">
                                        <select name="wpc-location" class="wpc-location"></select>
                                        <div class="saving_warning hide_field"><?php echo esc_html__( 'Press OK to save your desired location', 'wpcafe' ); ?></div>
                                        <button class="wpc-select-location wpc-btn wpc-btn-primary"><?php echo esc_html__( 'Ok', 'wpcafe' ); ?></button>
                                        <button class="wpc-close wpc-btn">X</button>
                                    </div>
                                </div>`
                            );
                        }
                    }
                });
            </script>
            <?php
        }

        // Load custom mini cart template.
        $custom_mini_cart = wpcafe()->template_directory . '/mini-cart/custom-mini-cart.php';
        if ( file_exists( $custom_mini_cart ) ) {
            include_once $custom_mini_cart;
        }
        ?>

        <!-- After add to cart message -->
        <script type="text/javascript">
            jQuery( function( $ ) {
                var get_reserv_detials = localStorage.getItem( 'wpc_reservation_details' );

                $( 'body' ).on( 'added_to_cart', function( event, fragments, cart_hash, button ) {
                    $( '.wpc-cart-message' ).fadeIn().delay( 3000 ).fadeOut();

                    // Pass product data to reservation details if enabled.
                    if ( typeof food_details_reservation !== 'undefined' &&
                        typeof get_reserv_detials !== 'undefined' &&
                        get_reserv_detials !== null &&
                        typeof button !== 'undefined'
                    ) {
                        var product_id    = button.data( 'product_id' ),
                            product_name  = button.data( 'product_name' ),
                            product_price = button.data( 'product_price' );

                        food_details_reservation(
                            {
                                product_id: product_id,
                                product_name: product_name,
                                product_price: product_price,
                            },
                            $
                        );
                    }
                });
            });
        </script>
        <?php
    }

    /**
     * Add inline script for mini cart template.
     *
     * @since 1.0.0
     * @return void
     */
    public function add_inline_script() {
        if ( ! class_exists( 'WooCommerce' ) ) {
            return;
        }

        $template = wpcafe()->template_directory . '/mini-cart/mini-cart.php';
        if ( file_exists( $template ) ) {
            include_once $template;
        }
    }

    /**
     * Add checkout button in mini cart.
     *
     * @since 1.0.0
     * @return void
     */
    public function mini_cart_add_class() {
        echo '<a href="' . esc_url( wc_get_checkout_url() ) . '" class="button checkout wc-forward">' . esc_html__( 'Checkout', 'wpcafe-pro' ) . '</a>';
    }

    /**
     * Handle mini cart button wrapper logic.
     *
     * Adds pickup/delivery toggle, cross-sells, coupon toggle,
     * and quantity update handling in mini cart.
     *
     * @since 1.0.0
     * @return void
     */
    public function handle_mini_cart_buttons_before() {
        ?>
        <script type="text/javascript">
            jQuery( function( $ ) {
                // Quantity increment/decrement.
                $( '.mini-cart-quantity-wrapper' ).on( 'click', '.action.plus,.action.minus,button.plus,button.minus', function() {
                    var qty  = $( this ).parent( '.quantity' ).find( '.qty' );
                    var val  = parseFloat( qty.val() );
                    var max  = parseFloat( qty.attr( 'max' ) );
                    var min  = parseFloat( qty.attr( 'min' ) );
                    var step = parseFloat( qty.attr( 'step' ) );

                    if ( $( this ).is( '.plus' ) ) {
                        qty.val( max && ( max <= val ) ? max : val + step );
                    } else {
                        qty.val( min && ( min >= val ) ? min : ( val > 1 ? val - step : val ) );
                    }
                    qty.trigger( 'change' );
                });

                // Remove order time if reservation exists.
                var get_reserv_detials = localStorage.getItem( 'wpc_reservation_details' );
                if ( typeof get_reserv_detials !== 'undefined' && get_reserv_detials !== null ) {
                    $( '.wpc_pro_order_time' ).remove();
                }

                // Cross sell products swiper.
                var swiper = new Swiper( '.wpc-cross-sells', {
                    navigation: {
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev',
                    },
                    autoplay: false,
                    spaceBetween: 0,
                    pagination: true
                });

                // Coupon form toggle.
                $( '.showcoupon' ).on( 'click', function() {
                    $( '.coupon_from_wrap' ).slideToggle( 400 );
                });

                // Add plus/minus buttons if not present.
                if ( $( '.minus' ).length === 0 ) {
                    $( '.mini-cart-quantity-wrapper .quantity' ).prepend( '<button type="button" class="minus">-</button>' );
                }
                if ( $( '.plus' ).length === 0 ) {
                    $( '.mini-cart-quantity-wrapper .quantity' ).append( '<button type="button" class="plus">+</button>' );
                }
            });
        </script>
        <?php

        if ( ! class_exists( 'Wpcafe_Multivendor' ) ) {
            ?>
            <div class="wpc_pro_order_time">
                <div class="minicart-condition-parent">

                    <?php if ( wpc_is_module_enable( 'delivery' ) ): ?>
                    <div class="wpc-field-wrap">
                        <label for="wpc_pro_order_time_delivary">
                            <input 
                                type="radio" 
                                name="wpc_pro_order_time" 
                                class="wpc-minicart-condition-input" id="wpc_pro_order_time_delivary" 
                                value="Delivery"
                            > 
                            <?php echo esc_html__( 'Delivery', 'wpcafe' ); ?>
                            <span class="dot-shadow"></span>
                        </label>
                    </div>
                    <?php endif; ?>

                    <?php if ( wpc_is_module_enable( 'pickup' ) ): ?>
                    <div class="wpc-field-wrap">
                        <label for="wpc_pro_order_time_pickup">
                            <input 
                                type="radio" 
                                name="wpc_pro_order_time" 
                                class="wpc-minicart-condition-input" id="wpc_pro_order_time_pickup" 
                                value="Pickup"
                            > 
                            <?php echo esc_html__( 'Pickup', 'wpcafe' ); ?>
                            <span class="dot-shadow"></span>
                        </label>
                    </div>
                    <?php endif; ?>

                    <?php if ( wpc_is_module_enable( 'delivery' ) && wpc_is_module_enable( 'pickup' ) ): ?>
                    <input type="hidden" name="is_order_time_selected" id="wpc-minicart-condition-value-holder" value=""/>
                    <input type="hidden" name="order_type" class="order_type" value="<?php echo esc_attr( wpc_is_module_enable( 'delivery' ) ? 'Delivery' : 'Pickup' ); ?>"/>
                    <?php endif; ?>
                </div>
            </div>
            <?php
        }
    }

    /**
     * Refresh cart count fragment.
     *
     * @since 1.0.0
     * @param array $fragments Cart fragments.
     * @return array
     */
    public function wpc_add_to_cart_count_fragment_refresh( $fragments ) {
        ob_start();
        ?>
        <span class="wpc-mini-cart-count">
            <?php echo esc_html( WC()->cart->get_cart_contents_count() ); ?>
        </span>
        <?php
        $fragments['.wpc-mini-cart-count'] = ob_get_clean();
        return $fragments;
    }

    /**
     * Refresh mini cart content fragment.
     *
     * @since 1.0.0
     * @param array $fragments Cart fragments.
     * @return array
     */
    public function wpc_add_to_cart_content_fragment_refresh( $fragments ) {
        ob_start();
        ?>
        <div class="widget_shopping_cart_content">
            <?php
            if ( file_exists( wpcafe()->template_directory . '/mini-cart/mini-cart-template.php' ) ) {
                include_once wpcafe()->template_directory . '/mini-cart/mini-cart-template.php';
            }
            ?>
        </div>
        <?php
        $fragments['div.widget_shopping_cart_content'] = ob_get_clean();
        return $fragments;
    }

    /**
     * Add extra content like total inside mini cart.
     *
     * @since 1.0.0
     * @return void
     */
    public function before_minicart_buttons_add_extra_content() {
        $cart_obj = WC()->cart;

        if ( ! empty( $cart_obj ) ) {
            ?>
            <div class="wpc-minicart-extra">
                <div class="wpc-minicart-extra-total">
                    <span>
                        <?php echo esc_html__( 'Total', 'wpcafe' ); ?>
                        <span class="wpc-extra-text"><?php echo esc_html__( '(including all charges)', 'wpcafe' ); ?></span>
                    </span>
                    <b class="wpc-minicart-total">
                        <?php
                        echo wp_kses(
                            wc_price( $cart_obj->total ),
                            array(
                                'span'  => array(),
                                'small' => array(),
                                'a'     => array(),
                                'bdi'   => array(),
                                'del'   => array(),
                            )
                        );
                        ?>
                    </b>
                </div>
            </div>
            <?php
        }
    }
}
