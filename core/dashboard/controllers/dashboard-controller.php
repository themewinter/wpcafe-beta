<?php
/**
 * Dashboard Controller
 *
 * Handles all REST API endpoints for dashboard data.
 *
 * @package WpCafe\Dashboard\Controllers
 * @since 1.0.0
 */

namespace WpCafe\Dashboard\Controllers;

use WpCafe\Abstract\Base_Rest_Controller;
use WpCafe\Dashboard\Reports\Revenue_Report;
use WpCafe\Dashboard\Reports\Orders_Report;
use WpCafe\Dashboard\Reports\Reservations_Report;
use WpCafe\Dashboard\Reports\Customers_Report;
use WpCafe\Dashboard\Reports\Top_Sales_Report;
use WP_Error;
use WP_HTTP_Response;
use WP_REST_Server;
use Exception;

/**
 * Dashboard Controller Class
 *
 * Handles all REST API endpoints for dashboard data including overview,
 * orders, reservations, and top sales.
 *
 * @package WpCafe\Dashboard\Controllers
 * @since 1.0.0
 */
class Dashboard_Controller extends Base_Rest_Controller {

    /**
     * Endpoint namespace.
     *
     * @var string
     */
    protected $namespace = 'wpcafe/v2';

    /**
     * Route base.
     *
     * @var string
     */
    protected $rest_base = 'dashboard';

        /**
     * Report instances.
     *
     * @var array
     */
    private $reports;

        /**
     * Constructor.
     *
     * @since 1.0.0
     */
    public function __construct() {
        $this->reports = array(
            'revenue'      => new Revenue_Report(),
            'orders'       => new Orders_Report(),
            'reservations' => new Reservations_Report(),
            'customers'    => new Customers_Report(),
            'top_sales'    => new Top_Sales_Report(),
        );
    }

    /**
     * Register all routes related to dashboard.
     *
     * @since 1.0.0
     * @return void
     */
    public function register_routes(): void {

        // Dashboard overview endpoint.
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/overview',
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_overview' ),
                    'permission_callback' => array( $this, 'get_overview_permissions_check' ),
                ),
            )
        );

        // Food orders endpoint.
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/food-orders',
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_food_orders' ),
                    'permission_callback' => array( $this, 'get_food_orders_permissions_check' ),
                ),
            )
        );

        // Reservations endpoint.
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/reservations',
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_reservations' ),
                    'permission_callback' => array( $this, 'get_reservations_permissions_check' ),
                ),
            )
        );

        // Update order status endpoint.
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/orders/(?P<id>[\d]+)/status',
            array(
                array(
                    'methods'             => WP_REST_Server::EDITABLE,
                    'callback'            => array( $this, 'update_order_status' ),
                    'permission_callback' => array( $this, 'update_order_status_permissions_check' ),
                ),
            )
        );

        // Top sales endpoint.
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/top-sales',
            array(
                array(
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_top_sales' ),
                    'permission_callback' => array( $this, 'get_top_sales_permissions_check' ),
                ),
            )
        );
    }

    /**
     * Get dashboard overview data.
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Request object.
     * @return WP_HTTP_Response|WP_Error Response object or WP_Error on failure.
     */
    public function get_overview( $request ) {
        $start_date = $request->get_param( 'start_date' ) ?: date( 'Y-m-d');
        $end_date = $request->get_param( 'end_date' ) ?: date( 'Y-m-d', strtotime( '+1 day' ) );

        try {
            // Get revenue data.
            $revenue_data = $this->reports['revenue']->get_revenue_data( $start_date, $end_date );

            // Get orders data.
            $orders_data = $this->reports['orders']->get_orders_data( $start_date, $end_date );

            // Get reservations data.
            $reservations_data = $this->reports['reservations']->get_reservations_data( $start_date, $end_date ); 

            // Get customers data.
            $customers_data = $this->reports['customers']->get_customers_data( $start_date, $end_date );

            $overview_data = array(
                'total_revenue'      => $revenue_data,
                'total_orders'       => function_exists('WC') ? $orders_data : 0,
                'total_reservations' => $reservations_data,
                'total_customers'    => $customers_data,
            );

            return $this->response( $overview_data );

        } catch ( Exception $e ) {
            return $this->error( $e->getMessage(), 500 );
        }
    }

    /**
     * Get food orders list.
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Request object.
     * @return WP_HTTP_Response|WP_Error Response object or WP_Error on failure.
     */
    public function get_food_orders( $request ) {
        $per_page = $request->get_param( 'per_page' ) ?: 5;
        $page     = $request->get_param( 'page' ) ?: 1;
        $status   = $request->get_param( 'status' ) ?: '';
        $branch   = $request->get_param( 'branch' ) ?: 'all';

        try {
            $orders = $this->reports['orders']->get_orders_list( $per_page, $page, $status, $branch );
            return $this->response( $orders );

        } catch ( Exception $e ) {
            return $this->error( $e->getMessage(), 500 );
        }
    }

    /**
     * Get reservations list.
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Request object.
     * @return WP_HTTP_Response|WP_Error Response object or WP_Error on failure.
     */
    public function get_reservations( $request ) {
        $per_page = $request->get_param( 'per_page' ) ?: 10;
        $page     = $request->get_param( 'page' ) ?: 1;
        $status   = $request->get_param( 'status' ) ?: '';
        $branch   = $request->get_param( 'branch' ) ?: 'all';

                try {
            $reservations = $this->reports['reservations']->get_reservations_list( $per_page, $page, $status, $branch );
            return $this->response( $reservations );

        } catch ( Exception $e ) {
            return $this->error( $e->getMessage(), 500 );
        }
    }

    /**
     * Update order status.
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Request object.
     * @return WP_HTTP_Response|WP_Error Response object or WP_Error on failure.
     */
    public function update_order_status( $request ) {
        $order_id = $request->get_param( 'id' );
        $status   = $request->get_param( 'status' );

        if ( ! $status ) {
            return $this->error( 'Status is required', 400 );
        }

                try {
            $result = $this->reports['orders']->update_order_status( $order_id, $status );
            return $this->response( array( 'message' => 'Order status updated successfully' ) );

        } catch ( Exception $e ) {
            return $this->error( $e->getMessage(), 500 );
        }
    }

    /**
     * Get top sales data.
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Request object.
     * @return WP_HTTP_Response|WP_Error Response object or WP_Error on failure.
     */
    public function get_top_sales( $request ) {
        $limit  = $request->get_param( 'limit' ) ?: 3;
        $period = $request->get_param( 'period' ) ?: 'month';
        $branch = $request->get_param( 'branch' ) ?: 'all';

        try {
            $top_sales = $this->reports['top_sales']->get_top_sales_data( $limit, $period, $branch );
            return $this->response( $top_sales );

        } catch ( Exception $e ) {
            return $this->error( $e->getMessage(), 500 );
        }
    }

    /**
     * Check permissions for getting overview data.
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Request object.
     * @return bool|WP_Error True if user has permission, WP_Error otherwise.
     */
    public function get_overview_permissions_check( $request ) {
        return current_user_can( 'manage_woocommerce' );
    }

    /**
     * Check permissions for getting food orders.
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Request object.
     * @return bool|WP_Error True if user has permission, WP_Error otherwise.
     */
    public function get_food_orders_permissions_check( $request ) {
        return current_user_can( 'manage_woocommerce' );
    }

    /**
     * Check permissions for getting reservations.
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Request object.
     * @return bool|WP_Error True if user has permission, WP_Error otherwise.
     */
    public function get_reservations_permissions_check( $request ) {
        return current_user_can( 'manage_woocommerce' );
    }

    /**
     * Check permissions for updating order status.
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Request object.
     * @return bool|WP_Error True if user has permission, WP_Error otherwise.
     */
    public function update_order_status_permissions_check( $request ) {
        return current_user_can( 'manage_woocommerce' );
    }

    /**
     * Check permissions for getting top sales.
     *
     * @since 1.0.0
     * @param \WP_REST_Request $request Request object.
     * @return bool|WP_Error True if user has permission, WP_Error otherwise.
     */
    public function get_top_sales_permissions_check( $request ) {
        return current_user_can( 'manage_woocommerce' );
    }
} 
