<?php
function r_save_post($post_id, $post, $update)
{
  $our_metadata = get_post_meta($post_id, 'recipe_ratings', true);
  $our_metadata = empty($our_metadata) ? [] : $our_metadata;
  $our_metadata['ratings'] = isset($our_metadata['ratings']) ? $our_metadata['ratings'] : '0';
  $our_metadata['count'] = isset($our_metadata['count']) ? $our_metadata['count'] : '0';
  update_post_meta($post_id, 'recipe_ratings', $our_metadata);
}
