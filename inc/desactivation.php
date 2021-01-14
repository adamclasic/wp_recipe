<?php
function my_deactivation() {
    wp_clear_scheduled_hook( 'my_daily_event' );
}
