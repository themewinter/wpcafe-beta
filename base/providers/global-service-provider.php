<?php
namespace WpCafe\Providers;
/**
 * Global service provider that will responsible for all service provider
 *
 * @package WpCafe/Providers
 */

use WpCafe\Admin\Admin_Service_Provider;
use WpCafe\Assets\Assets_Service_Provider;
use WpCafe\Contracts\Provider_Contract;
use WpCafe\Contracts\Switchable_Provider_Contract;
use WpCafe\Extensions\Extension_Service_Provider;
use WpCafe\FoodOrder\Food_Order_Service_Provider;
use WpCafe\Location\Location_Service_Provider;
use WpCafe\Products\Products_Service_Provider;
use WpCafe\Settings\Settings_Service_Provider;
use WpCafe\Onboard\Onboard_Service_Provider;
use WpCafe\Reservation\Reservation_Service_Provider;
use WpCafe\Dashboard\Dashboard_Service_Provider;
use WpCafe\Integrations\Integration_Service_Provider;
/**
 * GlobalService Provider class
 */
class Global_Service_Provider implements Provider_Contract {
    /**
     * Store container
     *
     * @var Container
     */
    protected $container;

    /**
     * Store service providers
     *
     * @var array
     */
    protected $providers = [
        'admin'         => Admin_Service_Provider::class,
        'assets'        => Assets_Service_Provider::class,
        'settings'      => Settings_Service_Provider::class,
        'onboard'       => Onboard_Service_Provider::class,
        'reservation'   => Reservation_Service_Provider::class,
        'extension'     => Extension_Service_Provider::class,
        'food-order'    => Food_Order_Service_Provider::class,
        'location'      => Location_Service_Provider::class,
        'products'      => Products_Service_Provider::class,
        'dashboard'     => Dashboard_Service_Provider::class,
        'integrations'  => Integration_Service_Provider::class,
    ];

    /**
     * GlobalServiceProvider
     *
     * @return  [type]  [return description]
     */
    public function __construct() {
        $this->container = wpcafe_container();
        $this->register();
        $this->boot();
    }

    /**
     * Register all module providers
     *
     * @return  vod
     */
    public function register() {
        $providers = $this->get_providers();

        if ( $providers ) {
            foreach( $providers as $key => $provider ) {
                $this->container->add_service_provider( $key, $provider );
            }
        }
    }

    /**
     * Boot all services from providers
     *
     * @return  void
     */
    public function boot() {
        $providers = $this->get_providers();

        if ( $providers ) {
            foreach( $providers as $provider_name => $provider ) {
                $provider = $this->container->get( $provider_name );

                if ( $provider instanceof Switchable_Provider_Contract  ) {
                    if ( $provider->is_enable() ) {
                        $provider->boot();
                    }
                } else {
                    $provider->boot();
                }
            }
        }
    }

    /**
     * Get providers
     *
     * @return  array
     */
    private function get_providers() {
        return apply_filters( 'wpcafe_service_providers', $this->providers );
    }
}

