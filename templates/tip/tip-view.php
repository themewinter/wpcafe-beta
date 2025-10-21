<?php
    use WpCafe\Settings;

    $settings   = Settings::get();
    $wc_session = WC()->session;

    $type                 = wpc_get_option( 'tipping_calculation_method', 'fixed_amount' );
    $tip_options          = wpc_get_option( 'tip_options', [] );
    $is_enable_custom_tip = wpc_get_option( 'enable_custom_tipping' );
    $tip_selected_type    = $type;
    $tip_amount           = 0;

    $types = [
        'fixed_amount'      => __( 'Fixed', 'wpcafe-pro' ),
        'percentage_amount' => __( 'Percentage(%)', 'wpcafe-pro' ),
        'custom'            => wpc_get_option( 'custom_tipping_label', __( 'Custom Tip', 'wpcafe-pro' ) ),
    ];

    


    $tip_percentage_data = isset( $settings['wpc_pro_tip_percentage_data'] ) ? $settings['wpc_pro_tip_percentage_data'] : [];

    $tip_fixed_amount = $tip_percentage_amount = $tip_added = 0;
    $tip_data = $wc_session->get('wpc_pro_tip');

    if ( ! empty( $tip_data ) ) {
        $tip_added             = $tip_data['tip_added'];
        $tip_selected_type     = $tip_data['tip_selected_type'];
        $tip_amount            = $tip_data['tip_amount'];
    }  
    
    if ( $tip_selected_type == 'custom' && ! $is_enable_custom_tip ) {
        $tip_selected_type = $type;
        $wc_session->__unset('wpc_pro_tip');
    }
?>

<div class="wpc_pro_order_tip_block" id="wpc_pro_order_tip_block">

    <div class="wpc_pro_order_tip_title">
        <h3><?php echo esc_html__( 'Would you like to give a tip?', 'wpcafe-pro' ); ?></h3>
    </div>
    <div class="wpc_pro_order_tip_wrapper" id="wpc_pro_order_tip_wrapper">
        <div class="wpc_pro_tip_type_wrap">
            <select name="wpc_pro_tip_type" class="wpc_pro_tip_type wpc-form-control input-text">
                <option value='<?php echo esc_attr( $type ); ?>' <?php selected( $tip_selected_type, $type, true ); ?>><?php echo esc_html( $types[$type] ); ?></option>

                <?php if( $is_enable_custom_tip ): ?>
                    <option value='custom' <?php selected( $tip_selected_type, 'custom', true ); ?>><?php echo esc_html( $types['custom'] ); ?></option>
                <?php endif; ?>
            </select>
        </div>
        <div class="wpc_pro_tip_type_percentage_wrap" style="<?php echo ( $tip_selected_type != 'percentage_amount' && $tip_selected_type != 'fixed_amount' ) ? 'display: none;' : ''; ?>">
            <select name="wpc_pro_percentage_tip_amount" class="wpc_pro_percentage_tip_amount wpc-form-control input-text" id="wpc_pro_percentage_tip_amount">
                <option value="0">Please select</option>
                <?php foreach( $tip_options as $option ): ?>
                    <option value="<?php echo esc_attr( $option ); ?>" <?php selected( $tip_amount, $option, true ); ?>><?php echo esc_html( $option ); ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        
        <?php if( $is_enable_custom_tip ): ?>
        <div class="wpc_pro_tip_type_custom_wrap" style="<?php echo ( $tip_selected_type != 'custom' ) ? 'display: none;' : ''; ?>">
            <input type="number" name="wpc_pro_custom_tip_amount" class="wpc_pro_custom_tip_amount wpc-form-control input-text" id="wpc_pro_custom_tip_amount" value="<?php echo esc_attr( $tip_amount ); ?>" />
        </div>
        <?php endif; ?>
        <div class="wpc_pro_tip_button_wrap">
            <input type="button" name="wpc_pro_add_tip" class="wpc-btn wpc_pro_add_tip <?php echo ( $tip_added == 0 ) ? "wpc_pro_add_tip_disabled" : ''; ?>" <?php echo ( $tip_added == 0 ) ? "disabled" : ''; ?> value="<?php echo esc_html__( 'Add Tip', 'wpcafe-pro' ); ?>" />
            <input type="button" name="wpc_pro_remove_tip" class="wpc_pro_remove_tip wpc-btn wpc-btn-border" style="<?php echo ! $tip_data ? 'display: none;' : ''; ?>" value="<?php echo esc_html__( 'Remove Tip', 'wpcafe-pro' ); ?>" />
        </div>
        <div class="wpc_pro_tip_msg_wrap">
            <span class="wpc_pro_tip_msg"></span>
        </div>
    </div>
</div>