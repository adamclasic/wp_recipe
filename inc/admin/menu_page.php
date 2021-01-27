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

  
  // Adding settings page

  
  /** Set Defaults **/
  add_option( 'myplugin_field_1', 'some default value' );
  add_option( 'myplugin_field_2', '1' );
  add_option( 'myplugin_field_3', 'another default value' );
  
  /** Add Settings Page **/

  add_options_page(
    'My Plugin Settings',
    'Recepe Settings',
    'manage_options',
    'myplugin_settings',
    'myplugin_settings_page'
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

function myplugin_settings_page()
{
  
  ?>
 
  <div class="wrap">
      <?php 
       
      // Uncomment if this screen isn't added with add_options_page() 
      // settings_errors(); 
       
      ?>

      <h2>My Plugin</h2>
      <p>Some text describing what the plugin settings do.</p>

      <form method="post" action="options.php">
          <?php

          // Output the settings sections.
          do_settings_sections( 'myplugin_settings' );

          // Output the hidden fields, nonce, etc.
          settings_fields( 'myplugin_settings_group' );

          // Submit button.
          submit_button();

          ?>
          <form method="post">
            <input id="wk-media-url" type="text" name="media" />
            <input id="wk-button" type="button" class="button" value="Upload Image" />
            <input type="submit" value="Submit" />
        </form>
      </form>
  </div>

  <?php
}