<?php
/**
 * Orders Report
 *
 * Handles all orders-related business logic and data retrieval.
 *
 * @package WpCafe\Dashboard\Reports
 * @since 1.0.0
 */

namespace WpCafe\Dashboard\Reports;
use WC_Order_Query;

/**
 * Orders Report Class
 *
 * Responsible for managing WooCommerce orders data.
 *
 * @package WpCafe\Dashboard\Reports
 * @since 1.0.0
 */
class Orders_Report {

    /**
     * Get orders data from WooCommerce orders.
     *
     * @since 1.0.0
     * @param string $period     Time period for data.
     * @param string $branch     Branch filter.
     * @param string $start_date Custom start date (Y-m-d format) - required for custom period.
     * @param string $end_date   Custom end date (Y-m-d format) - required for custom period.
     * @return array Orders data with change percentage.
     */
    public function get_orders_data( $start_date = '', $end_date = '' ) {
        // Get current period WooCommerce orders.
        $current_orders = $this->get_total_orders( $start_date, $end_date );

        // Get previous period orders.
        $prev_date_range = Date_Utility::get_previous_period_range('month', $start_date, $end_date );
        $prev_orders = $this->get_total_orders( $prev_date_range['start'], $prev_date_range['end'] );

        $change_percentage = $prev_orders > 0 ? ( ( $current_orders - $prev_orders ) / $prev_orders ) * 100 : 0;
        $change_direction  = $change_percentage >= 0 ? 'up' : 'down';

        return array(
            'total'             => $current_orders,
            'change_percentage' => round( abs( $change_percentage ), 1 ),
            'change_direction'  => $change_direction,
        );
    }

    /**
     * Get orders list with pagination and filters.
     *
     * @since 1.0.0
     * @param int    $per_page   Number of items per page.
     * @param int    $page       Current page number.
     * @param string $status     Order status filter.
     * @param string $branch     Branch filter.
     * @param string $period     Time period for data.
     * @param string $start_date Custom start date (Y-m-d format) - required for custom period.
     * @param string $end_date   Custom end date (Y-m-d format) - required for custom period.
     * @return array Orders list with pagination info.
     */
    public function get_orders_list( $per_page, $page, $status, $branch, $start_date = '', $end_date = '' ) {

        if ( ! function_exists( 'wc_get_orders' ) ) {
            return [];
        }

        $statuses = array( 'completed', 'processing', 'on-hold' );
        $orders = wc_get_orders( array(
            'limit'        => $per_page,
            'status'       => array( 'wc-completed', 'wc-processing', 'wc-on-hold' ),
            'return'       => 'ids',
        ) );


        $formatted_orders = array();
        foreach ( $orders as $order_id ) {
            $order = wc_get_order( $order_id );

            $first_name = $order->get_billing_first_name();
            $last_name  = $order->get_billing_last_name();

            $customer_name = $first_name . ' ' . $last_name;

            $formatted_orders[] = array(
                'order_id'           => $order->get_id(),
                'order_date'         => $order->get_date_created(),
                'status'             => $order->get_status(),
                'status_label'       => $this->get_order_status_label( $order->get_status() ),
                'total_amount'       => round( (float) $order->get_total(), 2 ),
                'customer_name'      => $customer_name,
                'customer_email'     => $order->get_billing_email(),
                'items_count'        => (int) $order->get_item_count(),
            );
        }

        return array(
            'orders'      => $formatted_orders,
        );
    }

    /**
     * Update order status.
     *
     * @since 1.0.0
     * @param int    $order_id Order ID.
     * @param string $status   New status.
     * @return bool True if updated successfully.
     */
    public function update_order_status( $order_id, $status ) {
        $order = wc_get_order( $order_id );
        if ( ! $order ) {
            throw new \Exception( 'Order not found' );
        }

        $order->update_status( $status );
        return true;
    }

    /**
     * Get order status label.
     *
     * @since 1.0.0
     * @param string $status Order status.
     * @return string Status label.
     */
    private function get_order_status_label( $status ) {
        $status_labels = array(
            'wc-pending'    => 'Pending',
            'wc-processing' => 'Processing',
            'wc-on-hold'    => 'On Hold',
            'wc-completed'  => 'Completed',
            'wc-cancelled'  => 'Cancelled',
            'wc-refunded'   => 'Refunded',
            'wc-failed'     => 'Failed',
        );

        return isset( $status_labels[ $status ] ) ? $status_labels[ $status ] : ucfirst( str_replace( 'wc-', '', $status ) );
    }

    /**
     * Get status filter SQL condition.
     *
     * @since 1.0.0
     * @param string $status Status filter.
     * @return string SQL condition.
     */
    private function get_status_filter( $status ) {
        if ( empty( $status ) ) {
            return '';
        }

        global $wpdb;
        return $wpdb->prepare( "AND p.post_status = %s", $status );
    }



    /**
     * Get branch filter SQL condition.
     *
     * @since 1.0.0
     * @param string $branch Branch ID or 'all'.
     * @return string SQL condition for branch filtering.
     */
    private function get_branch_filter( $branch ) {
        if ( 'all' === $branch ) {
            return '';
        }

        global $wpdb;
        return $wpdb->prepare(
            "AND EXISTS (
                SELECT 1 FROM {$wpdb->postmeta} branch_meta 
                WHERE branch_meta.post_id = p.ID 
                AND branch_meta.meta_key = '_branch_id' 
                AND branch_meta.meta_value = %s
            )",
            $branch
        );
    }

    /**
     * Get total orders.
     *
     * @since 1.0.0
     * @param string $start_date Start date (Y-m-d format).
     * @param string $end_date   End date (Y-m-d format).
     * @param array  $statuses   Order statuses to include (default: completed & processing).
     * @return int             Total orders.
     */
    public function get_total_orders( $start_date, $end_date, $statuses = array( 'wc-completed', 'wc-processing', 'wc-on-hold' ) ) {
        
        if ( ! function_exists( 'WC' ) ) {
            return 0;
        }

        $query = new WC_Order_Query( array(
            'limit'        => -1,
            'status'       => $statuses,
            'date_created' => $start_date . '...' . $end_date,
            'return'       => 'ids',
        ) );

        $order_ids = $query->get_orders();

        return count( $order_ids );
    }
} 