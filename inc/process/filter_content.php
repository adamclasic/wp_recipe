<?php

function filter_content($the_content)
{
  global $post;
  $post_id = $post->ID;
  if(is_singular('recipe')) {
    // var_dump(get_post_meta($post_id, 'recipe_ratings', true));
    $ratings = get_post_meta($post_id, 'recipe_ratings', true)['ratings'];
    $count = get_post_meta($post_id, 'recipe_ratings', true)['count'];
    $html = '<p>test' . $ratings . $count . '</p>';
  }
  return $the_content . $html;
}