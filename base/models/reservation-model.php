<?php
namespace WpCafe\Models;

use WpCafe\Database\Post_Model;

class Reservation_Model extends Post_Model {
    /**
     * Store fillable attributes
     *
     * @var array
     */
    protected array $fillable = [  
        'name'          => '',
        'email'         => '',
        'phone'         => '',
        'date'          => '',
        'start_time'    => '',
        'end_time'      => '',
        'total_guest'   => '',
        'table_name'    => '',
        'status'        => '',
        'branch_id'     => '',
        'branch_name'   => '',
        'notes'         => '',
        'invoice'       => '',
        'total_price'  => '',
        'currency'      => '',
        'payment_method' => '',
        'food_order'    => '',
    ];

    /**
     * Get the post type
     *
     * @return  string  Post type
     */
    public function get_post_type() {
        return 'wpc_reservation';
    }
    
    /**
     * Get the total price of the reservation
     *
     * @return  float   Total price of the reservation
     */
    public function get_total_price() {
        return 0.0;
    }

    /**
     * Get reservation items associated with this reservation.
     *
     * Retrieves all Reservation_Item_Model instances that are linked to this reservation
     * by matching the 'reservation_id' field with the current reservation's ID.
     *
     * @return array List of Reservation_Item_Model objects for this reservation.
     */
    public function get_items() {
        return Reservation_Item_Model::where( 'reservation_id', $this->id );
    }

    /**
     * Build a meta query array for searching qrcode posts by a given value.
     *
     * Searches the 'table_name', 'table_id', and 'page_url' meta fields for the provided value.
     *
     * @param string $search_value The value to search for in the qrcode meta fields.
     * @return array The meta query array for use in WP_Query or similar.
     */
    public function search_query( $search_value ) {
        $meta_query = [
            'relation' => 'OR',
            [
                'key'     => 'name',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'email',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'phone',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'date',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'branch',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'start_time',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
            [
                'key'     => 'end_time',
                'value'   => $search_value,
                'compare' => 'LIKE',
            ],
        ];
        
        return $meta_query;
    }

    /**
     * Build a meta query array for filtering posts by a given value.
     *
     * This method should be implemented in the concrete model class to return
     * a meta query array suitable for use in WP_Query or similar, based on the
     * provided filter value.
     *
     * @param mixed $filter_value The value to filter the posts by.
     * @return array The meta query array for use in WP_Query or similar.
     */
    public function filter_query( $filters ) {
        $meta_query = [ 'relation' => 'AND' ];

        // branch filter
        if ( ! empty( $filters['branch'] ) ) {
            $meta_query[] = [
                'key'     => 'branch',
                'value'   => $filters['branch'],
                'compare' => 'LIKE',
            ];
        }

        // date filter (exact date)
        if ( ! empty( $filters['date'] ) ) {
            $meta_query[] = [
                'key'     => 'date',
                'value'   => $filters['date'],
                'compare' => '=',
            ];
        }

        // date filter (exact date)
        if ( ! empty( $filters['food_order'] ) ) {
            $meta_query[] = [
                'key'     => 'food_order',
                'value'   => $filters['food_order'],
                'compare' => '=',
            ];
        }

        // date range filter
        if ( ! empty( $filters['date_range'] ) && is_array( $filters['date_range'] ) ) {
            $meta_query[] = [
                'key'     => 'date',
                'value'   => $filters['date_range'],
                'compare' => 'BETWEEN',
                'type'    => 'DATE',
            ];
        }

        return $meta_query;
    }

    /**
     * Get the total guest by date and time
     *
     * @param string $date The date to get the total guest for.
     * @param string $start_time The start time to get the total guest for.
     * @param string $end_time The end time to get the total guest for.
     * @return int The total guest for the date and time.
     */
    public static function get_total_guest_by_date_time( $date, $start_time, $end_time ) {
        $reservations = get_posts( [
            'post_type' => 'wpc_reservation',
            'post_status' => 'confirmed',
            'meta_query' => [
                [
                    'key' => 'date',
                    'value' => $date,
                    'compare' => '=',
                ],
                [
                    'key' => 'start_time',
                    'value' => $start_time,
                    'compare' => '=',
                ],
                [
                    'key' => 'end_time',
                    'value' => $end_time,
                    'compare' => '=',
                ],
            ],
        ] );

        $total_guest = 0;
        
        foreach ( $reservations as $reservation ) {
            $total_guest += $reservation->total_guest;
        }
        return $total_guest;
    }
}
