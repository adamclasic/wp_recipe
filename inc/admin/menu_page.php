<?php

/**
 * Register a custom menu page.
 */
function wpdocs_register_my_custom_menu_page(){
  add_menu_page(
      'Custom Menu Title',
      'custom menu',
      'manage_options',
      'custompageslug',
      'my_custom_menu_page',
      'dashicons-portfolio',
      6
  ); 
}

/**
* Display a custom menu page
*/
function my_custom_menu_page(){
  $r_form_content = wp_remote_get( plugins_url('assets\extras\options-page.txt', RECIPE_PLUGIN_URL) );
  // if ( is_array( $r_form_content ) && ! is_wp_error( $r_form_content ) ) {
    // $body    = $r_form_content['body']; // use the content
// }
  echo($r_form_content['body']);
  echo 'Admin Page Test';
}
