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
  echo 'Admin Page Test';
}
