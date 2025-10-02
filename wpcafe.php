<?php
/**
 * Plugin Name:        WP Cafe
 * Plugin URI:         https://product.themewinter.com/wpcafe
 * Description:        WordPress Restaurant solution plugin to launch Restaurant Websites.
 * Version:            2.2.34
 * Author:             Themewinter
 * Author URI:         http://themewinter.com/
 * License:            GPL-2.0+
 * License URI:        http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:        wpcafe
 * Domain Path:       /languages
 * Requires at least: 6.2
 * Requires PHP:      7.4
 */

defined( 'ABSPATH' ) || exit;

use WpCafe\Init;
use WpCafe\Container\Container;
use WpCafe\Providers\Global_Service_Provider;

require_once __DIR__ . '/vendor/autoload.php';


// Define constant for the Plugin file.
defined( 'WPCAFE_FILE' ) || define( 'WPCAFE_FILE', __FILE__ );
defined( 'WPCAFE_DIR' ) || define( 'WPCAFE_DIR', __DIR__ );
defined( 'WPCAFE_VERSION' ) || define( 'WPCAFE_VERSION', '2.2.34' );


global $wpcafe_container;

$wpcafe_container = new Container();

$wpcafe_container->add_service_provider( 'global', Global_Service_Provider::class );

/**
 * wpcafe container
 *
 * @return  Container
 */
function wpcafe_container() {
    global $wpcafe_container;

    return $wpcafe_container;
}

/**
 * Main plugin initialization
 *
 * @return Wpcafe
 */
function wpcafe() {
    return Init::instance();
}

// Kick-off the plugin.
wpcafe();

/**
 * Allow SVG uploads by adding the SVG mime type.
 * Note: SVGs can contain scripts. Consider using a sanitizer if accepting user uploads.
 */
if ( ! function_exists( 'wpcafe_allow_svg_uploads' ) ) {
    function wpcafe_allow_svg_uploads( $mimes ) {
        $mimes['svg'] = 'image/svg+xml';
        return $mimes;
    }
}
add_filter( 'upload_mimes', 'wpcafe_allow_svg_uploads' );

/**
 * Ensure WordPress correctly recognizes SVG file type and mime on upload.
 * This does NOT sanitize SVG content; it only fixes detection.
 */
if ( ! function_exists( 'wpcafe_sanitize_svg' ) ) {
    function wpcafe_sanitize_svg( $data, $file, $filename, $mimes ) {
        $ext = pathinfo( $filename, PATHINFO_EXTENSION );
        if ( strtolower( $ext ) === 'svg' ) {
            $data['ext']  = 'svg';
            $data['type'] = 'image/svg+xml';
        }
        return $data;
    }
}
add_filter( 'wp_check_filetype_and_ext', 'wpcafe_sanitize_svg', 10, 4 );