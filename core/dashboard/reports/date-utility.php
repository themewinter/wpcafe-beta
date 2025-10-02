<?php
/**
 * Date Utility for Dashboard Reports
 *
 * Handles date range calculations for all dashboard reports.
 *
 * @package WpCafe\Dashboard\Reports
 * @since 1.0.0
 */

namespace WpCafe\Dashboard\Reports;

/**
 * Date Utility Class
 *
 * Provides consistent date range handling across all dashboard reports.
 *
 * @package WpCafe\Dashboard\Reports
 * @since 1.0.0
 */
class Date_Utility {

    /**
     * Get date range for the specified period.
     *
     * @since 1.0.0
     * @param string $period Time period (today, yesterday, week, month, custom).
     * @param string $start_date Custom start date (Y-m-d format) - required for custom period.
     * @param string $end_date Custom end date (Y-m-d format) - required for custom period.
     * @return array Array with start and end dates.
     */
    public static function get_date_range( $period, $start_date = '', $end_date = '' ) {
        $today = current_time( 'Y-m-d' );

        switch ( $period ) {
            case 'today':
                return array(
                    'start' => $today,
                    'end'   => $today,
                );
            case 'yesterday':
                $yesterday = date( 'Y-m-d', strtotime( '-1 day' ) );
                return array(
                    'start' => $yesterday,
                    'end'   => $yesterday,
                );
            case 'week':
                $week_start = date( 'Y-m-d', strtotime( 'monday this week' ) );
                $week_end   = date( 'Y-m-d', strtotime( 'sunday this week' ) );
                return array(
                    'start' => $week_start,
                    'end'   => $week_end,
                );
            case 'month':
                $month_start = date( 'Y-m-01' );
                $month_end   = date( 'Y-m-t' );
                return array(
                    'start' => $month_start,
                    'end'   => $month_end,
                );
            case 'custom':
                // Validate custom dates
                if ( empty( $start_date ) || empty( $end_date ) ) {
                    // Fallback to today if custom dates are not provided
                    return array(
                        'start' => $today,
                        'end'   => $today,
                    );
                }
                
                // Validate date format
                if ( ! self::is_valid_date( $start_date ) || ! self::is_valid_date( $end_date ) ) {
                    // Fallback to today if dates are invalid
                    return array(
                        'start' => $today,
                        'end'   => $today,
                    );
                }
                
                // Ensure start_date is not after end_date
                if ( strtotime( $start_date ) > strtotime( $end_date ) ) {
                    $temp = $start_date;
                    $start_date = $end_date;
                    $end_date = $temp;
                }
                
                return array(
                    'start' => $start_date,
                    'end'   => $end_date,
                );
            default:
                return array(
                    'start' => $today,
                    'end'   => $today,
                );
        }
    }

    /**
     * Get previous period date range for comparison.
     *
     * @since 1.0.0
     * @param string $period Time period.
     * @param string $start_date Custom start date (Y-m-d format) - used for custom period.
     * @param string $end_date Custom end date (Y-m-d format) - used for custom period.
     * @return array Array with start and end dates.
     */
    public static function get_previous_period_range( $period, $start_date = '', $end_date = '' ) {
        $today = current_time( 'Y-m-d' );

        switch ( $period ) {
            case 'today':
                $yesterday = date( 'Y-m-d', strtotime( '-1 day' ) );
                return array(
                    'start' => $yesterday,
                    'end'   => $yesterday,
                );
            case 'yesterday':
                $day_before = date( 'Y-m-d', strtotime( '-2 days' ) );
                return array(
                    'start' => $day_before,
                    'end'   => $day_before,
                );
            case 'week':
                $prev_week_start = date( 'Y-m-d', strtotime( 'monday last week' ) );
                $prev_week_end   = date( 'Y-m-d', strtotime( 'sunday last week' ) );
                return array(
                    'start' => $prev_week_start,
                    'end'   => $prev_week_end,
                );
            case 'month':
                $prev_month_start = date( 'Y-m-01', strtotime( '-1 month' ) );
                $prev_month_end   = date( 'Y-m-t', strtotime( '-1 month' ) );
                return array(
                    'start' => $prev_month_start,
                    'end'   => $prev_month_end,
                );
            case 'custom':
                if ( empty( $start_date ) || empty( $end_date ) ) {
                    $yesterday = date( 'Y-m-d', strtotime( '-1 day' ) );
                    return array(
                        'start' => $yesterday,
                        'end'   => $yesterday,
                    );
                }
                
                // Calculate the duration of the custom period
                $start_timestamp = strtotime( $start_date );
                $end_timestamp = strtotime( $end_date );
                $duration_days = ( $end_timestamp - $start_timestamp ) / DAY_IN_SECONDS;
                
                // Calculate previous period with same duration
                $prev_end_date = date( 'Y-m-d', strtotime( $start_date . ' -1 day' ) );
                $prev_start_date = date( 'Y-m-d', strtotime( $prev_end_date . ' -' . $duration_days . ' days' ) );
                
                return array(
                    'start' => $prev_start_date,
                    'end'   => $prev_end_date,
                );
            default:
                $yesterday = date( 'Y-m-d', strtotime( '-1 day' ) );
                return array(
                    'start' => $yesterday,
                    'end'   => $yesterday,
                );
        }
    }

    /**
     * Validate if a date string is in Y-m-d format.
     *
     * @since 1.0.0
     * @param string $date Date string to validate.
     * @return bool True if valid, false otherwise.
     */
    private static function is_valid_date( $date ) {
        if ( empty( $date ) ) {
            return false;
        }
        
        $d = \DateTime::createFromFormat( 'Y-m-d', $date );
        return $d && $d->format( 'Y-m-d' ) === $date;
    }

    /**
     * Get available period options for the frontend.
     *
     * @since 1.0.0
     * @return array Array of period options.
     */
    public static function get_period_options() {
        return array(
            'today'     => __( 'Today', 'wpcafe' ),
            'yesterday' => __( 'Yesterday', 'wpcafe' ),
            'week'      => __( 'This Week', 'wpcafe' ),
            'month'     => __( 'This Month', 'wpcafe' ),
            'custom'    => __( 'Custom Range', 'wpcafe' ),
        );
    }

    /**
     * Format date range for display.
     *
     * @since 1.0.0
     * @param string $period Time period.
     * @param string $start_date Custom start date.
     * @param string $end_date Custom end date.
     * @return string Formatted date range string.
     */
    public static function format_date_range( $period, $start_date = '', $end_date = '' ) {
        switch ( $period ) {
            case 'today':
                return __( 'Today', 'wpcafe' );
            case 'yesterday':
                return __( 'Yesterday', 'wpcafe' );
            case 'week':
                $week_start = date( 'M j', strtotime( 'monday this week' ) );
                $week_end   = date( 'M j', strtotime( 'sunday this week' ) );
                return sprintf( __( '%s - %s', 'wpcafe' ), $week_start, $week_end );
            case 'month':
                $month_name = date( 'F Y' );
                return $month_name;
            case 'custom':
                if ( ! empty( $start_date ) && ! empty( $end_date ) ) {
                    $start_formatted = date( 'M j, Y', strtotime( $start_date ) );
                    $end_formatted = date( 'M j, Y', strtotime( $end_date ) );
                    return sprintf( __( '%s - %s', 'wpcafe' ), $start_formatted, $end_formatted );
                }
                return __( 'Custom Range', 'wpcafe' );
            default:
                return __( 'Today', 'wpcafe' );
        }
    }
} 