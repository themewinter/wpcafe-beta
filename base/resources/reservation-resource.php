<?php
namespace WpCafe\Resources;
use WpCafe\Abstract\Resource;

/**
 * Reservation Resource
 *
 * Handles reservation data and interactions.
 *
 * @package WpCafe/Resources
 */
class Reservation_Resource extends Resource {
    /**
     * Transform the resource into an array.
     *
     * @return array
     */
    public function to_array() {
        $status = get_post_status( $this->data->id );
        $reservation_data = [
            'id'                => $this->data->id,
            'name'              => $this->data->name,
            'email'             => $this->data->email,
            'phone'             => $this->data->phone,
            'date'              => $this->data->date,
            'start_time'        => wp_date('h:i A', $this->data->start_time),
            'end_time'          => wp_date('h:i A', $this->data->end_time),
            'total_guest'       => $this->data->total_guest,
            'status'            => $status,
            'branch_id'         => $this->data->branch_id,
            'branch_name'       => $this->data->branch_name,
            'notes'             => $this->data->notes,
            'invoice'           => $this->data->invoice,
            'total_price'       => $this->data->total_price,
            'currency'          => $this->data->currency,
            'payment_method'    => $this->data->payment_method,
            'table_name'        => $this->data->table_name,
            'custom_fields'     => $this->data->custom_fields,
            'seats'             => $this->data->seats,
            'food_items'        => Reservation_Item_Resource::collection( $this->data->get_items() ),
        ];

        if ( ! empty( $reservation_data['food_items'] && class_exists('WooCommerce') && function_exists('wc_get_checkout_url') ) ) {
            $reservation_data['redirect_url'] = wc_get_checkout_url();
        }

        return $reservation_data;
    }
}
