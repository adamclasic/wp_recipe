<?php

/**
 * @package   recipe
 * @author    {{Adamclasic}} <{{author_email}}>
 * @copyright {{author_copyright}}
 * @license   {{MIT}}
 * @link      {{author_url}}
 *
 * Plugin Name:     recipe
 * Plugin URI:      @TODO
 * Description:     Adds recipe post type to Wordpress.
 * Version:         0.1
 * Author:          Adamclasic
 * Author URI:      author_url
 * Text Domain:     recipe
 * License:         MIT
 * License URI:     http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:     /languages
 * Requires PHP:    7.0
 */

// If this file is called directly, abort.
if ( !defined( 'ABSPATH' ) ) {
  die( 'We\'re sorry, but you can not directly access this file.' );
}

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
  echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
  exit;
}

define( 'RECIPE_PLUGIN_URL', __FILE__ );
define( 'PN_VERSION', '0.1' );
define( 'PN_TEXTDOMAIN', 'recipe' );
define( 'PN_NAME', 'recipe' );
define( 'PN_PLUGIN_ROOT', plugin_dir_path( __FILE__ ) );
define( 'PN_PLUGIN_ABSOLUTE', __FILE__ );

// WPBPGen{{#if language-files}}
add_action(
  'init',
  static function () {
    load_plugin_textdomain( PN_TEXTDOMAIN, false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
  }
  );

// {{/if}}
if ( version_compare( PHP_VERSION, '7.0.0', '<=' ) ) {
  add_action(
    'admin_init',
    static function() {
      deactivate_plugins( plugin_basename( __FILE__ ) );
    }
  );
  add_action(
    'admin_notices',
    static function() {
      echo wp_kses_post(
      sprintf(
        '<div class="notice notice-error"><p>%s</p></div>',
        __( 'Recipe requires PHP 5.6 or newer.', PN_TEXTDOMAIN )
      )
      );
    }
  );

  // Return early to prevent loading the plugin.
  return;
}

//setup

//includes
include( 'inc/admin/init.php' );
include( 'inc/admin/menu_page.php' );

include( 'inc/init.php' );
include( 'inc/process/r_save_post.php' );
include( 'inc/process/filter_content.php' );
include( 'inc/desactivation.php' );
include( 'inc/activation.php' );
include( 'inc/enqueue.php' );
include( 'inc/r_rating_form.php' );
include( 'inc/recipe_create_account.php' );
include( 'inc/recipe_login_account.php' );
include( 'inc/r_block_enqueue.php' );
include( dirname(RECIPE_PLUGIN_URL) . '\inc\widgets\recipe_of_day.php' );
include( 'inc/r_register_widgets.php' );
include( 'inc/admin/admin_init.php' );
include( 'blocks/r_enqueue_block_editor_assets.php' );
// include( 'inc/utilities/get_random_post_id.php' );
// include( 'inc/r_my_daily_event.php' );


//hooks

register_activation_hook(__FILE__, 'r_activate');
register_deactivation_hook( __FILE__, 'my_deactivation' );
add_action( 'wp_enqueue_scripts', 'r_enqueue', 100);
add_action( 'gutenberg enqueue_block_assets', 'r_block_enqueue', 100);
add_action( 'init', 'r_register_posttype' );
add_action( 'wp_ajax_r_rating_form', 'r_rating_form' );
add_action( 'wp_ajax_nopriv_r_rating_form', 'r_rating_form' );
add_action( 'wp_ajax_nopriv_recipe_create_account', 'recipe_create_account' );
add_action( 'wp_ajax_nopriv_recipe_login_account', 'recipe_login_account' );
// add_action( 'wp_ajax_recipe_create_account', 'recipe_create_account' ); //only for development. this line should be deleted in production.
add_action( 'save_post_recipe', 'r_save_post', 10, 3 );
// add_action( 'widgets_init ', 'r_register_widgets');
// add_action( 'my_daily_event ', 'r_my_daily_event');
add_action( 'admin_menu', 'wpdocs_register_my_custom_menu_page' );
add_action( 'admin_init', 'r_admin_init' );
add_action( 'enqueue_block_editor_assets', 'r_enqueue_block_editor_assets' );
 
add_action( 'admin_notices', 'sample_admin_notice__success' );

function sample_admin_notice__success() {

  ?>

  <div class="notice notice-warning is-dismissible">
      <p>You have more than 5 recipes waiting for review!</p>
  </div>
  <?php
}

add_action('wp_ajax_coolplugin_create_post', 'submit_recipe_frontend_create_post');

function submit_recipe_frontend_create_post() {
    $var1 = $_POST['title'];
    $var2 = $_POST['body'];

    $new_post = array(
        'post_type'         => 'recipe',
        'post_status'       => 'pending',
        'post_title'        => $var1,
        "post_content" => ' ',
    );

    $post_id = wp_insert_post( $new_post, $wp_error );

    if ($post_id == false){
        $post_url = get_permalink( $post_id );
        echo $post_url;
    }else {
        // some sort of error
    }
    var_dump( 2 );
}

add_filter('the_content', 'filter_content');

add_filter( 'wp_nav_menu_items', function ($items)
{

  $item = '<li>' . wp_loginout(home_url('/'), false) . '</li>';
  return $items . $item;
}, 999 );


//shortcodes
function mnrf()
{
  ob_start();
  wp_editor('', 'recipecontenteditor');
  $tiny_emc = ob_get_clean();
  return $tiny_emc;
}


add_shortcode('happy_and_short', function ()
{
  
  $Vdata = file_get_contents("creatortemplate.php", true);
  $Vdata = str_replace('1IN18', mnrf(), $Vdata);
  return $Vdata;
  
});

// started the login form!!

add_shortcode('login_form', function ()
{
  
  $form_data = file_get_contents("login_form.php", true);
  $form_data = str_replace('STR_NONCE', wp_nonce_field(), $form_data);
  $form_data = str_replace('OPN_REG', (get_option( 'users_can_register') ? '' : 'style="display: none;"' ), $form_data);
  return $form_data;
});


// start custom settings page  
