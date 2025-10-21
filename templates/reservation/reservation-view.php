<?php
/**
 * Reservation Details Template
 *
 * Displays reservation information on checkout page
 *
 * @package WpCafe
 * @since 1.0.0
 */

if ( empty( $reservation_data ) || ! is_array( $reservation_data ) ) {
    return;
}
?>

<div class="wpc-reservation-info" style="background:#f9f9f9;padding:15px;margin-bottom:20px;border-radius:6px;">
    <h3><?php echo esc_html__( 'Reservation Details', 'wpcafe' ); ?></h3>

    <?php if ( ! empty( $reservation_data['reservation_date'] ) ) : ?>
        <p>
            <strong><?php echo esc_html__( 'Date:', 'wpcafe' ); ?></strong>
            <?php echo esc_html( $reservation_data['reservation_date'] ); ?>
        </p>
    <?php endif; ?>

    <?php if ( ! empty( $reservation_data['start_time'] ) && ! empty( $reservation_data['end_time'] ) ) : ?>
        <p>
            <strong><?php echo esc_html__( 'Time:', 'wpcafe' ); ?></strong>
            <?php
            echo esc_html(
                sprintf(
                    '%s - %s',
                    wp_date( get_option( 'time_format' ), $reservation_data['start_time'] ),
                    wp_date( get_option( 'time_format' ), $reservation_data['end_time'] )
                )
            );
            ?>
        </p>
    <?php endif; ?>

    <?php if ( ! empty( $reservation_data['name'] ) ) : ?>
        <p>
            <strong><?php echo esc_html__( 'Name:', 'wpcafe' ); ?></strong>
            <?php echo esc_html( $reservation_data['name'] ); ?>
        </p>
    <?php endif; ?>
</div>