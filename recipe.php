<?php

/**
 * @package   recipe
 * @author    {{Adamclasic}} <{{author_email}}>
 * @copyright {{author_copyright}}
 * @license   {{author_license}}
 * @link      {{author_url}}
 *
 * Plugin Name:     recipe
 * Plugin URI:      @TODO
 * Description:     Adds recipe post type to Wordpress.
 * Version:         0.1
 * Author:          Adamclasic
 * Author URI:      author_url
 * Text Domain:     recipe
 * License:         author_license
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
        __( '"{{plugin_name}}" requires PHP 5.6 or newer.', PN_TEXTDOMAIN )
      )
      );
    }
  );

  // Return early to prevent loading the plugin.
  return;
}