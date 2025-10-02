<?php
use WpCafe\Session;
use WpCafe\Validation\Validator;
use WpCafe\Validation\Rule_Factory;
use WpCafe\Settings;


/**
 * Global helper to validate data.
 *
 * @param array $data
 * @param array $rules
 * @return true|WP_Error
 */

if ( ! function_exists('wpcafe_validate') ) {
    /**
     * Validate data against rules.
     *
     * @param array $data
     * @param array $rules
     * @return true|WP_Error
     */
    function wpcafe_validate($data, $rules) {
        $parsed_rules = [];

        foreach ($rules as $field => $rule_set) {
            $parsed_rules[$field] = Rule_Factory::make($rule_set);
        }

        $validator = new Validator($data, $parsed_rules);

        if ( ! $validator->passes()) {
            $errors = $validator->errors();
            $wp_error = new WP_Error();

            foreach ($errors as $field => $messages) {
                foreach ((array) $messages as $message) {
                    $wp_error->add($field, $message);
                }
            }

            return $wp_error;
        }

        return true;
    }
}

if ( ! function_exists('wpcafe_extension') ) {
    /**
     * Get a specific extension by slug.
     *
     * @param string $slug
     * @return Object \Arraytics\Tools\Extention
     */
    function wpcafe_extension() {
        $extensions = wpcafe_get_extension_list();

        return new Arraytics\ToolsSdk\Extension( 'wpcafe_tools_settings', $extensions );
    }
}

if ( ! function_exists( 'wpc_is_module_enable' ) ) {
    /**
     * Check whether a module or submodule is enabled.
     *
     * Conditions:
     * - If the module has no parent and status === 'on' → true
     * - If the module has a parent, and both the parent and the module have status === 'on'  true
     * - Else → false
     *
     * @param string $module The extension module (module or submodule).
     *
     * @return bool
     */
    function wpc_is_module_enable( $module ) {
        return wpcafe_extension()->is_enabled( $module );
    }
}

if ( ! function_exists( 'wpc_is_integration_enable' ) ) {
    /**
     * Check whether a integration or subintegration is enabled.
     *
     * Conditions:
     * - If the integration has no parent and status === 'on' → true
     * - If the integration has a parent, and both the parent and the integration have status === 'on'  true
     * - Else → false
     *
     * @param string $integration The integration module (module or submodule).
     *
     * @return bool
     */
    function wpc_is_integration_enable( $integration ) {
        return wpc_integration()->is_enabled( $integration );
    }
}


if ( ! function_exists( 'wpc_get_pickup_delivery_properties' ) ) {
    /**
     * Get pickup delivery properties
     *
     * @return  array
     */
    function wpc_get_pickup_delivery_properties() {
        $pickup_properties = [
            'wpc_location_name'     => __( 'Food Order Location', 'wpcafe' ),
            'wpc_pro_order_time'    => __( 'Delivery Type', 'wpcafe' ),
            'wpc_pro_delivery_date' => __( 'Delivery Date', 'wpcafe' ),
            'wpc_pro_delivery_time' => __( 'Delivery Time', 'wpcafe' ),
            'wpc_pro_pickup_date'   => __( 'Pickup Date', 'wpcafe' ),
            'wpc_pro_pickup_time'   => __( 'Pickup Time', 'wpcafe' ),
        ];

        return $pickup_properties;
    }
}

if ( ! function_exists( 'wpc_get_option' ) ) {
    /**
     * Get wp cafe settings
     *
     * @param   string  $key  Option name
     *
     * @return  mixed   option data name
     */
    function  wpc_get_option($key = null, $default = false) {
        $data = Settings::get($key);

        if ( '' == $data ) {
            return $default;
        }

        return $data;
    }
}

if ( ! function_exists( 'wpc_update_option' ) ) {
    /**
     * Get wp cafe settings
     *
     * @param   string  $key  Option name
     *
     * @return  mixed   option data name
     */
    function  wpc_update_option($key, $value) {
        return Settings::update([$key => $value]);
    }
}

if ( ! function_exists( 'wpc_selected_location_id' ) ) {
    /**
     * Get wp cafe settings
     *
     * @param   string  $key  Option name
     *
     * @return  mixed   option data name
     */
    function  wpc_selected_location_id() {
        return Session::get('selected_location');
    }
}

if ( ! function_exists( 'wpc_get_plugin_status' ) ) {
    /**
     * Get plugin status
     *
     * @param   string  $slug  The plugin slug
     *
     * @return  string Plugin current status
     */
    function wpc_get_plugin_status($slug) {
        include_once ABSPATH . 'wp-admin/includes/plugin.php';
        include_once ABSPATH . 'wp-admin/includes/file.php';

        $plugins = get_plugins();

        foreach ( $plugins as $path => $plugin ) {
            // Check if the plugin path starts with the slug followed by a slash
            if ( strpos( $path, $slug . '/' ) === 0 ) {
                if ( is_plugin_active( $path ) ) {
                    return 'active';
                } else {
                    return 'inactive';
                }
            }
            // Check if the plugin file exactly matches the slug.php
            if ( $path === $slug . '.php' ) {
                if ( is_plugin_active( $path ) ) {
                    return 'active';
                } else {
                    return 'inactive';
                }
            }
        }

        return 'not-installed';
    }
}

if ( ! function_exists( 'wpc_get_currencies' ) ) {
    /**
     * Get currency list
     *
     * @return  array
     */
    function wpc_get_currencies() {
        $currencies = require_once __DIR__ . '/currency.php';

        return $currencies;
    }
}

if ( ! function_exists('wpcafe_get_extension_list') ) {
    /**
     * Get a specific extension by slug.
     *
     * @param string $slug
     * @return array|null
     */
    function wpcafe_get_extension_list() {
        $existing_tools_settings      = get_option( 'wpcafe_tools_settings' );
        $table_layout_status          = isset( $tools_settings['enable_table_layout'] ) ? $existing_tools_settings['enable_table_layout'] : 'off';
        $delivery_module_status       = isset( $existing_tools_settings['enable_delivery_module'] ) ? $existing_tools_settings['enable_delivery_module'] : 'off';

        $pickup_module_status       = isset( $existing_tools_settings['enable_pickup_module'] ) ? $existing_tools_settings['enable_pickup_module'] : 'off';

        $extension_list = require wpcafe()->plugin_directory . '/utils/extension-list.php';

        return $extension_list;
    }
}

if ( ! function_exists('wpc_get_integration_list') ) {
    /**
     * Get a specific extension by slug.
     *
     * @param string $slug
     * @return array|null
     */
    function wpc_get_integration_list() {
        $integration_list = require wpcafe()->plugin_directory . '/utils/integration-list.php';

        return $integration_list;
    }
}

if ( ! function_exists('wpc_integration') ) {
    /**
     * Get integration class object
     *
     * @return \Arraytics\ToolsSdk\Extension
     */
    function wpc_integration() {
        $integration_list = wpc_get_integration_list();

        return new Arraytics\ToolsSdk\Extension( 'wpcafe_integration_settings', $integration_list );
    }
}


if ( ! function_exists( 'wpc_get_addons_icon_url' ) ) {
    /**
     * Get addons icon url
     *
     * @return string
     */
    function wpc_get_addons_icon_url($name) {
        
        return wpcafe()->assets_url . '/images/addons/' . $name . '.svg';
    }
}

if ( ! function_exists('wpc_get_pages') ) {
    /**
     * Get all WordPress pages with only ID and title
     *
     * @return array
     */
    function wpc_get_pages() {
        $pages = get_pages( array(
            'sort_order'  => 'asc',
            'sort_column' => 'post_title',
            'post_status' => 'publish',
        ) );

        $result = array();

        foreach ( $pages as $page ) {
            $result[] = array(
                'id'    => $page->ID,
                'title' => $page->post_title,
            );
        }

        return $result;
    }
}
