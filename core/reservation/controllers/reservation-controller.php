<?php
namespace WpCafe\Reservation\Controllers;

use WpCafe\Abstract\Base_Rest_Controller;
use WpCafe\Models\Reservation_Model;
use WP_Error;
use WP_HTTP_Response;
use WP_REST_Server;
use WpCafe\Resources\Reservation_Resource;
use WpCafe\Models\Reservation_Item_Model;
use WpCafe\Scheduler;
use WpCafe\Models\Location_Model;

/**
 * Reservation controller
 *
 * Handles all REST API endpoints for reservations.
 *
 * @package WpCafe/Reservation
 */
class Reservation_Controller extends Base_Rest_Controller {
    /**
     * Endpoint namespace
     *
     * @var string
     */
    protected $namespace = 'wpcafe/v2';

    /**
     * Route base
     *
     * @var string
     */
    protected $rest_base = 'reservations';

    /**
     * Register all routes related to reservation
     *
     * @return void
     */
    public function register_routes(): void {
        
        register_rest_route( $this->namespace,
            '/' . $this->rest_base, [
            [
                'methods'             => WP_REST_Server::CREATABLE,
                'callback'            => [$this, 'create_item'],
                'permission_callback' => [$this, 'create_item_permissions_check'],
            ],
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_items'],
                'permission_callback' => [$this, 'get_items_permissions_check'],
            ],
            [
                'methods'             => WP_REST_Server::DELETABLE,
                'callback'            => [$this, 'bulk_delete_item'],
                'permission_callback' => [$this, 'delete_item_permissions_check'],
            ],
        ] );

        register_rest_route($this->namespace, '/' . $this->rest_base . '/(?P<id>[\d]+)', 
            [
                [
                    'methods'             => WP_REST_Server::READABLE,
                    'callback'            => [$this, 'get_item'],
                    'permission_callback' => [$this, 'get_item_permissions_check'],
                ],
                [
                    'methods'             => WP_REST_Server::EDITABLE,
                    'callback'            => [$this, 'update_item'],
                    'permission_callback' => [$this, 'update_item_permissions_check'],
                ],
                [
                    'methods'             => WP_REST_Server::DELETABLE,
                    'callback'            => [$this, 'delete_item'],
                    'permission_callback' => [$this, 'delete_item_permissions_check'],
                ],
            ]
        );

        register_rest_route( $this->namespace,
            '/' . $this->rest_base . '/time-slots', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_slots'],
                'permission_callback' => [$this, 'get_slots_permissions_check'],
            ]
        ] );
    }

    
    /**
     * Create a new reservation item
     *
     * @param \WP_REST_Request $request
     * @return WP_HTTP_Response|WP_Error
     */
    public function create_item($request) {
        $data = $this->prepare_item_for_database($request);

        if ( is_wp_error( $data ) ) {
            return $this->error( $data->get_error_message() );
        }

        $food_items = [];

        if ( ! empty( $data['food_items'] ) ) {
            $food_items = $data['food_items'];
            unset( $data['food_items'] );
        }

        $data['invoice'] = 'WPC' . rand( 1000, 9999 );

        $reservation = Reservation_Model::create( $data );

        if ( is_wp_error( $reservation ) ) {
            return $this->error( $reservation->get_error_message() );
        }

        if ( ! empty( $food_items ) ) {
            $this->create_food_items( $reservation->id, $food_items );
            $reservation->update( [ 'food_order' => 'yes' ] );
        }

        $response = new Reservation_Resource( $reservation );

        do_action( 'wpcafe_after_reservation_create', $reservation );

        return $this->response( $response, __( 'Reservation created successfully.', 'wpcafe' ) );
    }

    /**
     * Permission check for creating a reservation
     *
     * @param \WP_REST_Request $request
     * @return bool
     */
    public function create_item_permissions_check($request): bool {
        return true;
    }

    /**
     * Get a list of reservation items
     *
     * @param \WP_REST_Request $request
     * @return WP_HTTP_Response
     */
    public function get_items( $request ) {
        $per_page = ! empty( $request['per_page'] ) ? intval( $request['per_page'] ) : 10;
        $paged    = ! empty( $request['paged'] ) ? intval( $request['paged'] ) : 1;
        $search   = ! empty( $request['search'] ) ? sanitize_text_field( $request['search'] ) : '';
        $status   = ! empty( $request['status'] ) ? sanitize_text_field( $request['status'] ) : 'any';


        $filter = [];

        if ( isset( $request['status'] ) ) {
            $filter['status'] = $request['status'];
        }

        if ( isset( $request['branch'] ) ) {
            $filter['branch'] = $request['branch'];
        }

        if ( isset( $request['food_order'] ) ) {
            $filter['food_order'] = $request['food_order'];
        }

        if ( isset( $request['date_range'] ) ) {
            $filter['date_range'] = $request['date_range'];
        }

        $args = [
            'post_status'    => $status,
            'posts_per_page' => $per_page,
            'paged'          => $paged,
        ];

        if ( ! empty( $search ) ) {
            $args['search'] = $search;
        }

        if ( ! empty( $filter ) ) {
            $args['filters'] = $filter;
        }

        $data = Reservation_Model::paginate( $args );

        if ( ! $data ) {
            return $this->error( __( 'No reservations found', 'wpcafe' ), 404 );
        }

        $response = Reservation_Resource::collection( $data['items'] );

        $data['items'] = $response;

        return $this->response( $data );
    }

    /**
     * Permission check for reading reservations
     *
     * @param \WP_REST_Request $request
     * @return bool
     */
    public function get_items_permissions_check($request): bool {
        return current_user_can('manage_options');
    }

    /**
     * Get a single reservation item
     *
     * @param \WP_REST_Request $request
     * @return WP_HTTP_Response|WP_Error
     */
    public function get_item($request) {
        $id = intval( $request['id'] );

        $reservation = Reservation_Model::find($id);

        if ( ! $reservation ) {
            return $this->error(__('Reservation not found', 'wpcafe'), 404);
        }
        
        $response = new Reservation_Resource( $reservation );

        return $this->response( $response );
    }

    /**
     * Permission check for getting a single reservation
     *
     * @param \WP_REST_Request $request
     * @return bool
     */
    public function get_item_permissions_check($request): bool {
        return true;
    }

    /**
     * Update reservation.
     */
    public function update_item($request) {
        $id = intval($request['id']);
        $reservation = Reservation_Model::find($id);

        if ( ! $reservation ) {
            return $this->error( __('Reservation not found.', 'wpcafe'), 404 );
        }

        $data = $this->prepare_item_for_database($request);

        if ( is_wp_error( $data ) ) {
            return $this->error($data->get_error_message());
        }

        $updated = $reservation->update($data);

        if ( ! $updated ) {
            return $this->error( __('Failed to update reservation.', 'wpcafe'), 500 );
        }

        $response = new Reservation_Resource( $reservation );

        return $this->response( $response, __('Reservation updated successfully.', 'wpcafe') );
    }

    /**
     * Permission check for updating a reservation
     *
     * @param \WP_REST_Request $request
     * @return bool
     */
    public function update_item_permissions_check($request): bool {
        return current_user_can('manage_options');
    }   

    /**
     * Delete reservation.
     *
     * @param \WP_REST_Request $request
     *
     * @return \WP_REST_Response
     */
    public function delete_item($request) {
        $id = intval( $request['id'] );
        $reservation = Reservation_Model::find($id);

        if ( ! $reservation ) {
            return $this->error( __('Reservation not found.', 'wpcafe'), 404 );
        }

        $deleted = $reservation->delete();

        if ( ! $deleted ) {
            return $this->error( __('Failed to delete reservation.', 'wpcafe'), 500 );
        }

        return $this->response( ['deleted' => true], __('Reservation deleted.', 'wpcafe') );
    }

    /**
     * Permission check for deleting a reservation
     *
     * @param \WP_REST_Request $request
     * @return bool
     */
    public function delete_item_permissions_check( $request ): bool {
        return current_user_can( 'manage_options' );
    }

    /**
     * Bulk delete reservations.
     *
     * @param \WP_REST_Request $request
     *
     * @return \WP_REST_Response
     */
    public function bulk_delete_item($request) {
        $ids = $request->get_param('ids');

        if ( ! is_array( $ids ) || empty( $ids )) {
            return $this->error(__('Invalid or empty reservation IDs.', 'wpcafe'), 400);
        }

        $deleted = [];

        foreach ( $ids as $id ) {
            $id = intval($id);
            $reservation = Reservation_Model::find( $id );

            if ( $reservation ) {
                $reservation->delete(); // Skip if reservation not found
            }

        }

        return $this->response( ['deleted' => $deleted], __( 'Selected reservations deleted.', 'wpcafe' ) );
    }

    /**
     * Prepare item for database storage
     *
     * @param \WP_REST_Request $request
     * @return array|WP_Error
     */
    protected function prepare_item_for_database( $request ) {
        $body = $request->get_body();
        $data = json_decode( $body, true );

        if ( ! is_array( $data ) ) {
            return [];
        }

        $validate = wpcafe_validate( $data , [
            'name' => [
                'required',
                'string',
            ],
            'email' => [
                'required',
                'email',
            ],
        ]);

        if ( is_wp_error( $validate ) ) {
            return $validate;
        }

        return $data;
    }

    /**
     * Create food items for a reservation
     *
     * @param int $reservation_id
     * @param array $food_items
     * @return void
     */
    public function create_food_items( $reservation_id, $food_items ) {
        if ( ! function_exists('wc_get_product') ) {
            return;
        }

        foreach ( $food_items as $food_item ) {
            $product = wc_get_product( $food_item['product_id'] );
            if ( ! $product ) {
                continue;
            }

            $quantity = $food_item['quantity'];
            $price = $product->get_price();

            $item = [
                'reservation_id' => $reservation_id,
                'product_id'     => $food_item['product_id'],
                'product_name'   => $product->get_name(),
                'quantity'       => $quantity,
                'price'          => $price * $quantity,
            ];

            Reservation_Item_Model::create( $item );
        }
    }

    /**
     * Get time slots
     *
     * @param \WP_REST_Request $request
     * @return WP_HTTP_Response
     */
    public function get_slots($request) {
        $start_date     = $request->get_param('start_date');
        $end_date       = $request->get_param('end_date');
        $location_id    = $request->get_param('location_id');
        $schedules = wpc_get_option('restaurant_schedule', []);

        if ( ! $start_date ) {
            return $this->error( 'Please start date', 'wpcafe' );
        }

        if ( ! $end_date ) {
            return $this->error( 'Please end date', 'wpcafe' );
        }

        if ( $location_id ) {
            $location = Location_Model::find( $location_id );

            $schedules = $location->open_hours;   
        }

        if ( ! $schedules ) {
            return $this->error(__('Schedules did not set', 'wpcafe'), 404);
        }

        $scheduler = new Scheduler($schedules, $start_date, $end_date);

        $slots = $scheduler->generate();

        return $this->response($slots);
    }

    /**
     * Permission check for getting time slots
     *
     * @param \WP_REST_Request $request
     * @return bool
     */
    public function get_slots_permissions_check($request): bool {
        return true;
    }
}
