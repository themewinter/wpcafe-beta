<?php
namespace WpCafe\Models;

/**
 * Location_Model handles the CRUD and ORM-style access to location custom taxonomy.
 */
class Location_Model {
    /**
     * Store location id
     *
     * @var int
     */
    public $term_id;

    /**
     * Store restaurants name
     *
     * @var string
     */
    public $restaurants_name;

    /**
     * Store location
     *
     * @var string
     */
    public $location;

    /**
     * Override open hours
     *
     * @var bool
     */
    public $override_open_hours;

    /**
     * Store open hours
     *
     * @var array
     */
    public $open_hours;

    /**
     * Enable pickup
     *
     * @var bool
     */
    public $enable_pickup;

    /**
     * Store pickup minimum order amount
     *
     * @var int
     */
    public $pickup_minmum_order_amount;

    /**
     * Pickup food prepare time
     *
     * @var int
     */
    public $pickup_food_prepare_time;

        /**
     * Whether delivery is enabled
     *
     * @var bool|null
     */
    public $enable_delivery;

    /**
     * Delivery fee
     *
     * @var float|null
     */
    public $delivery_fee;

    /**
     * Minimum order amount for delivery
     *
     * @var float|null
     */
    public $delivery_minimum_order_amount;

    /**
     * Time (in minutes) required to prepare delivery order
     *
     * @var int|null
     */
    public $delivery_prepare_time;

    /**
     * Minimum guest count for reservations
     *
     * @var int|null
     */
    public $reservation_minimum_guest;

    /**
     * Maximum guest count for reservations
     *
     * @var int|null
     */
    public $reservation_maximum_guest;

    /**
     * How far in advance reservations can be made (in days)
     *
     * @var int|null
     */
    public $reservation_advanced;

    /**
     * Time slots available for reservation
     *
     * @var array|null
     */
    public $reservation_timeslot;

    /**
     * Time to hold table for late guests (in minutes)
     *
     * @var int|null
     */
    public $reservation_hold_time_late_guest;

    /**
     * Minimum spend required per reservation
     *
     * @var float|null
     */
    public $minimum_spend_per_reservation;

    /**
     * Whether to enable table layout system
     *
     * @var bool|null
     */
    public $reservation_enable_table_layout;

    /**
     * Whether to override online ordering
     *
     * @var bool|null
     */
    public $override_online_ordering;

    /**
     * Whether to override reservation
     *
     * @var bool|null
     */
    public $override_reservation;

    /**
     * Table layout
     *
     * @var string|null
     */
    public $table_layout;

    /**
     * Status
     *
     * @var string
     */
    public $status = 'publish';

    /**
     * @var string The custom taxonomy slug used to manage locations.
     */
    protected static $taxonomy = 'wpcafe_location';

    /**
     * Constructor to populate the model with data.
     *
     * @param array $data Key-value pair of property values to set.
     */
    public function __construct( $data = [] ) {
        foreach ($data as $key => $value) {
            if (property_exists($this, $key)) {
                $this->$key = $value;
            }
        }
    }

    /**
     * Find a location by term ID.
     *
     * @param int $term_id The term ID to look up.
     * @return Location_Model|null The model instance or null if not found.
     */
    public static function find( $term_id ) {
        $term = get_term( $term_id, self::$taxonomy );
        if ( is_wp_error( $term ) || ! $term ) return null;

        $meta = get_term_meta( $term_id );
        $instance = new self(['term_id' => $term_id]);

        foreach ( $meta as $key => $value ) {
            if ( property_exists( $instance, $key ) ) {
                $instance->$key = maybe_unserialize($value[0]);
            }
        }

        if ( empty($instance->restaurants_name) ) {
            $instance->restaurants_name = $term->name;
        }

        return $instance;
    }

    /**
     * Create a new location term and return the model instance.
     *
     * @param string $name The name of the new location.
     * @param array $fields Optional associative array of metadata fields.
     * @return Location_Model|null The created model instance or null on failure.
     */
    public static function create( $name, $fields = [] ) {
        $term = wp_insert_term( $name, self::$taxonomy );
        if ( is_wp_error( $term ) ) return $term;

        $instance = new self( array_merge( ['term_id' => $term['term_id'], 'restaurants_name' => $name], $fields ) );
        $instance->save();

        return $instance;
    }

    /**
     * Save all properties of the model as term meta.
     *
     * @return bool True on success, false on failure.
     */
    public function save() {
        if ( ! $this->term_id ) return false;

        foreach ( get_object_vars( $this ) as $key => $value ) {
            if ( $key === 'term_id' || $value === null ) continue;
            update_term_meta( $this->term_id, $key, $value );
        }

        return true;
    }

    /**
     * Update the model's properties with provided data and save.
     *
     * @param array $fields Associative array of fields to update.
     * @return bool True on success, false otherwise.
     */
    public function update( $fields = [] ) {
        foreach ( $fields as $key => $value ) {
            if ( property_exists( $this, $key ) ) {
                $this->$key = $value;
            }
        }

        return $this->save();
    }

    /**
     * Delete the location term from WordPress.
     *
     * @return bool True on success, false on failure.
     */
    public function delete() {
        if ( ! $this->term_id ) return false;

        $deleted = wp_delete_term( $this->term_id, self::$taxonomy );

        return ! is_wp_error( $deleted );
    }

    /**
     * Get all location terms as model instances.
     *
     * @return Location_Model[] Array of location model instances.
     */
    public static function all() {
        $terms = get_terms([
            'taxonomy'   => self::$taxonomy,
            'hide_empty' => false,
        ]);

        $locations = [];
        if ( ! is_wp_error( $terms ) ) {
            foreach ( $terms as $term ) {
                $locations[] = self::find( $term->term_id );
            }
        }

        return $locations;
    }

    /**
     * Get paginated location terms as model instances.
     *
     * @param int $page Current page number (1-based).
     * @param int $per_page Number of items per page.
     * @return array {
     *     @type Location_Model[] $data Array of location models.
     *     @type int $total Total number of locations.
     *     @type int $total_pages Total number of pages.
     *     @type int $current_page Current page number.
     * }
     */
    public static function paginated( int $page = 1, int $per_page = 10, $search = '' ): array {
        $offset = ( $page - 1 ) * $per_page;

        $args = [
            'taxonomy'   => self::$taxonomy,
            'hide_empty' => false,
            'number'     => $per_page,
            'offset'     => $offset,
        ];

        if ( ! empty( $search ) ) {
            $args['meta_query'] = [
                'relation' => 'OR',
                [
                    'key'   => 'restaurants_name',
                    'value' => $search,
                    'compare' => 'LIKE',
                ],
                [
                    'key'   => 'location',
                    'value' => $search,
                    'compare' => 'LIKE',
                ],
                
            ];
        }

        $terms = get_terms( $args );

        $locations = [];

        if ( ! is_wp_error( $terms ) ) {
            foreach ( $terms as $term ) {
                $locations[] = self::find( $term->term_id );
            }
        }

        $total = wp_count_terms( self::$taxonomy, [ 'hide_empty' => false ] );
        $total = is_wp_error( $total ) ? 0 : (int) $total;

        return [
            'items'        => $locations,
            'total'        => $total,
            'total_pages'  => ceil( $total / $per_page ),
            'current_page' => $page,
        ];
    }


    /**
     * Retrieve locations filtered by a specific meta key and value.
     *
     * @param string $key Meta key.
     * @param mixed $value Meta value to match.
     * @return Location_Model[] Array of matching location model instances.
     */
    public static function where($key, $value) {
        $args = [
            'taxonomy'   => self::$taxonomy,
            'hide_empty' => false,
            'meta_query' => [
                [
                    'key'   => $key,
                    'value' => $value,
                ]
            ]
        ];

        $terms = get_terms( $args );
        $locations = [];

        if ( ! is_wp_error( $terms ) ) {
            foreach ( $terms as $term ) {
                $locations[] = self::find( $term->term_id );
            }
        }

        return $locations;
    }

    /**
     * Get selected location
     *
     * @return Location_Model|null The selected location model instance or null if not found.
     */
    public static function get_selected_location() {
        return self::find( wpc_selected_location_id() );
    }
}
