<?php

function r_enqueue_block_editor_assets() {
  $sharedBlockPath = 'blocks/dist/bundle.js';
  wp_enqueue_script(
      'frontend-js',
      plugins_url( $sharedBlockPath, RECIPE_PLUGIN_URL ),
      [  'wp-blocks', 'wp-element', 'wp-components', 'wp-i18n', 'wp-editor' ],
      filemtime( plugin_dir_path( RECIPE_PLUGIN_URL ) . $sharedBlockPath )
    );
   }