<?php
/**
 * Revenue Report
 *
 * Handles all revenue-related business logic and data retrieval.
 *
 * @package WpCafe\Dashboard\Reports
 * @since 1.0.0
 */

namespace WpCafe\Dashboard\Reports;

use WC_Order_Query;
use WpCafe\Models\Reservation_Model;

/**
 * Revenue Report Class
 *
 * Responsible for calculating revenue data from WooCommerce orders.
 *
 * @package WpCafe\Dashboard\Reports
 * @since 1.0.0
 */
class Revenue_Report {
    /**
     * Get revenue data from WooCommerce orders and reservations.
     *
     * @since 1.0.0
     * @param string $period     Time period for data.
     * @param string $branch     Branch filter.
     * @param string $start_date Custom start date (Y-m-d format) - required for custom period.
     * @param string $end_date   Custom end date (Y-m-d format) - required for custom period.
     * @return array Revenue data with change percentage.
     */
    public function get_revenue_data( $start_date = '', $end_date = '' ) {
        $current_orders_revenue = $this->get_total_order_revenue( $start_date, $end_date );

        $current_reservations_revenue = $this->get_total_reservations_revenue( $start_date, $end_date );

        // Calculate total current revenue.
        $current_revenue = $current_orders_revenue + $current_reservations_revenue;

        // Get previous period revenue for comparison.
        $prev_date_range = Date_Utility::get_previous_period_range( 'month', $start_date, $end_date );

        // Previous period WooCommerce orders revenue.
        $prev_orders_revenue = $this->get_total_order_revenue( $prev_date_range['start'], $prev_date_range['end'] );

        // Previous period reservations revenue.
        $prev_reservations_revenue = $this->get_total_reservations_revenue( $prev_date_range['start'], $prev_date_range['end'] );

        // Calculate total previous revenue.
        $prev_revenue = $prev_orders_revenue + $prev_reservations_revenue;

        $change_percentage = $prev_revenue > 0 ? ( ( $current_revenue - $prev_revenue ) / $prev_revenue ) * 100 : 0;
        $change_direction  = $change_percentage >= 0 ? 'up' : 'down';

        return array(
            'total'     			=> round( $current_revenue, 2 ),
            'orders_revenue'    	=> round( $current_orders_revenue, 2 ),
            'reservations_revenue'  => round( $current_reservations_revenue, 2 ),
            'change_percentage' 	=> round( abs( $change_percentage ), 2 ),
            'change_direction'  	=> $change_direction,
        );
    }

    /**
     * Get total revenue of WooCommerce orders within a date range using WC_Order_Query.
     *
     * @param string $start_date Start date (Y-m-d format).
     * @param string $end_date   End date (Y-m-d format).
     * @param array  $statuses   Order statuses to include (default: completed & processing).
     * @return float             Total revenue in store currency.
     */
    public function get_total_order_revenue( $start_date, $end_date, $statuses = array( 'wc-completed', 'wc-processing' ) ) {
        
        if ( ! function_exists( 'WC' ) ) {
            return 0.0;
        }

        $query = new WC_Order_Query( array(
            'limit'        => -1,
            'status'       => $statuses,
            'date_created' => $start_date . '...' . $end_date,
            'return'       => 'ids',
        ) );

        $order_ids = $query->get_orders();

        if ( empty( $order_ids ) ) {
            return 0.0;
        }

        $total = 0.0;

        foreach ( $order_ids as $order_id ) {
            $order = wc_get_order( $order_id );
            if ( $order ) {
                $total += (float) $order->get_total();
            }
        }

        return $total;
    }

    /**
     * Get total reservation value within a date range.
     *
     * @param string $start_date Start date (Y-m-d format).
     * @param string $end_date   End date (Y-m-d format).
     * @param string $price_meta Meta key storing reservation price (default: _reservation_total).
     * @param string $date_meta  Meta key storing reservation date (default: wpc_booking_date).
     * @return float             Total reservation value.
     */
    public function get_total_reservations_revenue( $start_date, $end_date ) {
        $args = array(
            'post_type'      => 'wpc_reservation',
            'post_status'    => 'any',
            'posts_per_page' => -1,
            'fields'         => 'ids',
            'date_query'     => array(
                array(
                    'after'     => $start_date . ' 00:00:00',
                    'before'    => $end_date . ' 23:59:59',
                    'inclusive' => true,
                ),
            ),
        );

        $posts = get_posts( $args );

        $total = 0.0;

        foreach ( $posts as $post_id ) {
            $reservation = new Reservation_Model( $post_id );
            $total += floatval( $reservation->get_total_price() );
        }

        return $total;
    }
} 
