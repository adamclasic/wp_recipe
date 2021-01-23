<?php

function r_activate()
{
  global $wpdb;
  $the_var = $wpdb->prefix;
  $createSQL = $wpdb->prepare("CREATE TABLE `wrdprs2`.`%s_ratings` ( `ID` BIGINT(20) NOT NULL , `recipe_id` BIGINT(20) NOT NULL , `user_ip` TEXT NOT NULL , `rating` FLOAT(3.2) NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB;", [$the_var]);
  require( ABSPATH . "/wp-admin/includes/upgrade.php" );
  dbDelta( $createSQL );
  wp_schedule_event( time(), 'daily', 'my_daily_event' );

  r_register_posttype();
  flush_rewrite_rules();
}
