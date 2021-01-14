<?php

include( 'fl_edit_columns.php' );
include( 'ac_edit_columns.php' );

add_filter('manage_recipe_posts_columns', 'fl_edit_columns');
add_action('manage_posts_custom_column', 'ac_edit_columns', 10, 2);
