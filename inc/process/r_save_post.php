<?php
function r_save_post($post_id, $post, $update)
{
  $our_metadata = [];
  $our_metadata['ratings'] = '0';
  update_post_meta($post_id, 'recipe_ratings', absint($our_metadata));
}
