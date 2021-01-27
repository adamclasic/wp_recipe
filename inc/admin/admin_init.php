<?php

function r_admin_init()
{
 
  /** Setting section 1. **/
 add_settings_section(
 /*1*/   'myplugin_settings_section_1',
 /*2*/   'Section 1',
 /*3*/   'myplugin_settings_section_1_callback',
 /*4*/   'myplugin_settings'
 );
  
 // Field 1.
 add_settings_field(
 /*1*/   'myplugin_field_1',
 /*2*/   'Field 1',
 /*3*/   'myplugin_field_1_input',
 /*4*/   'myplugin_settings',
 /*5*/   'myplugin_settings_section_1'
 );

 // Register this field with our settings group.
 register_setting( 'myplugin_settings_group', 'myplugin_field_1' );
  
/** Section 2 **/
 add_settings_section(
 /*1*/   'myplugin_settings_section_2',
 /*2*/   'Section 2',
 /*3*/   'myplugin_settings_section_2_callback',
 /*4*/   'myplugin_settings'
 );
  
 // Field 2.
 add_settings_field(
 /*1*/   'myplugin_field_2',
 /*2*/   'Field 2',
 /*3*/   'myplugin_field_2_input',
 /*4*/   'myplugin_settings',
 /*5*/   'myplugin_settings_section_2'
 );

 // Register this field with our settings group.
 register_setting( 'myplugin_settings_group', 'myplugin_field_2' );  
  
 // Field 3.
 add_settings_field(
 /*1*/   'myplugin_field_3',
 /*2*/   'Field 3',
 /*3*/   'myplugin_field_3_input',
 /*4*/   'myplugin_settings',
 /*5*/   'myplugin_settings_section_2'
 );

 // Register this field with our settings group.
 register_setting( 'myplugin_settings_group', 'myplugin_field_3' );
}
  


function myplugin_settings_section_1_callback() {
 
  echo( 'Some info about this section.' );
}

function myplugin_settings_section_2_callback() {

  echo( 'An explanation of this section.' );
}

/** Field 1 Input **/
function myplugin_field_1_input() {

  echo( '<input type="text" name="myplugin_field_1" id="myplugin_field_1" value="'. get_option( 'myplugini_field_1' ) .'" />' );
}

/** Field 2 Input **/
function myplugin_field_2_input() {

  // This example input will be a dropdown.
  // Available options.
  $options = array(
      '1' => 'Option 1',
      '2' => 'Option 2',
      '3' => 'Option 3',
  );
   
  // Current setting.
  $current = get_option( 'myplugin_field_2' );
   
  // Build <select> element.
  $html = '<select id="myplugin_field_2" name="myplugin_field_2">';

  foreach ( $options as $value => $text )
  {
      $html .= '<option value="'. $value .'"';

      // We make sure the current options selected.
      if ( $value == $current ) $html .= ' selected="selected"';

      $html .= '>'. $text .'</option>';
  }
   
  $html .= '</select>';

  echo( $html );  
}

/** Field 3 Input **/
function myplugin_field_3_input() {

  // Output the form input, with the current setting as the value.
  echo( '<input type="text" name="myplugin_field_3" id="myplugin_field_3" value="'. get_option( 'myplugin_field_3' ) .'" />' ); 
}