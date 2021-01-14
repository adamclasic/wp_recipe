<?php

function r_block_enqueue()
{
  wp_register_script(
    'r_block_enqueue',
    plugins_url( '/blocks/dist/bundle.js', RECIPE_PLUGIN_URL ),
    [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-api' ],
    filemtime( plugin_dir_path( RECIPE_PLUGIN_URL ) . '/blocks/dist/bundle.js' )
  );
  wp_enqueue_script('r_block_enqueue');
}
