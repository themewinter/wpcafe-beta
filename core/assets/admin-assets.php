<?php
namespace WpCafe\Assets;

/**
 * Manage all admin scripts and styles
 */
class Admin_Assets extends Base_Assets {
    /**
     * Register single service
     *
     * @return  void
     */
    public function register() {
        add_action( 'admin_enqueue_scripts',  [$this, 'register_styles_scripts'] );
        add_action( 'admin_enqueue_scripts',  [$this, 'enqueue'] );
    }

    /**
     * Enqueue scripts and styles
     *
     * @return  void
     */
    public function enqueue( $top ) {
        wp_enqueue_style( 'wpc-admin' );        

        if ( 'toplevel_page_wpcafe' !== $top ) {
            return;
        }

        // Ensure WordPress media library scripts are available for React media upload components.
        // Only load on WpCafe related admin pages to avoid unnecessary overhead.
        // $top examples: 'toplevel_page_wpcafe', 'wpcafe_page_wpcafe_settings', etc.
        if ( strpos( (string) $top, 'wpcafe' ) !== false ) {
            // Allow disabling via filter if needed by site owners.
            if ( apply_filters( 'wpcafe_enqueue_media_library', true, $top ) ) {
                wp_enqueue_media();
            }
        }

        $this->i18n_loader();
        wp_enqueue_style( 'wpcafe-admin-style' );
        wp_enqueue_style( 'jquery-timepicker' );

        wp_enqueue_script( 'wpcafe-packages' );
        wp_enqueue_script( 'wpcafe-dashboard-scripts' );

        wp_localize_script( 'wpcafe-packages', 'wpCafe', Localize::get_admin() );
    }

    /**
     * Load i18n
     *
     * @return  void
     */
    public function i18n_loader() {
        $data = [
            'baseUrl'     => false,
            'locale'      => determine_locale(),
            'domainMap'   => [],
            'domainPaths' => [],
        ];

        $lang_dir    = WP_LANG_DIR;
        $content_dir = WP_CONTENT_DIR;
        $abspath     = ABSPATH;

        if ( strpos( $lang_dir, $content_dir ) === 0 ) {
            $data['baseUrl'] = content_url( substr( trailingslashit( $lang_dir ), strlen( trailingslashit( $content_dir ) ) ) );
        } elseif ( strpos( $lang_dir, $abspath ) === 0 ) {
            $data['baseUrl'] = site_url( substr( trailingslashit( $lang_dir ), strlen( untrailingslashit( $abspath ) ) ) );
        }

        wp_enqueue_script('wpcafe-i18n');

        $data['domainMap']   = (object) $data['domainMap']; // Ensure it becomes a json object.
        $data['domainPaths'] = (object) $data['domainPaths']; // Ensure it becomes a json object.
        wp_add_inline_script( 'wpcafe-i18n', 'if (typeof wp.wpCafeI18nLoader === "undefined") { wp.wpCafeI18nLoader = {}; } wp.wpCafeI18nLoader.state = ' . wp_json_encode( $data, JSON_UNESCAPED_SLASHES ) . ';' );
    }


    /**
     * Get all scripts
     *
     * @return  array List register scripts
     */
    public function get_scripts() {
        $scripts = [
            'wpcafe-dashboard-scripts'     => [
                'src'       => wpcafe()->assets_url . '/build/js/dashboard.js',
                'deps'      => ['wpcafe-packages'],
                'in_footer' => true,
            ],
            'wpcafe-packages'     => [
                'src'       => wpcafe()->assets_url . '/build/js/packages.js',
                'deps'      => [
                    'wp-api-fetch',
                    'wp-components',
                    'wp-compose',
                    'wp-i18n'
                ],
                'in_footer' => true,
            ], 
        ];

        $scripts =  apply_filters( 'wpcafe_admin_scripts', $scripts );

        return $scripts;
    }

    /**
     * List of register styles
     *
     * @return  array
     */
    public function get_styles() {
        $styles = [
            'wpcafe-admin-style'    => [
                'src' => wpcafe()->assets_url . '/build/css/admin.css',
            ],
            'wpc-admin' => [
                'src' => wpcafe()->assets_url . '/css/wpc-admin.css',
            ],
            'jquery-timepicker' => [
                'src' => wpcafe()->assets_url . '/css/jquery.timepicker.min.css',
            ]
        ];

        return apply_filters( 'wpcafe_admin_styles', $styles );
    }
}