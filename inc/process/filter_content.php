<?php

function filter_content($the_content)
{
  global $post;
  if(is_singular('recipe')) {
  $post_id = $post->ID;
  $rate_content = file_get_contents( PN_PLUGIN_ROOT . 'inc/recipe-template.php' );
  $rate_content = str_replace('RATE_I18N', 'Rating', $rate_content);
  $rate_content = str_replace('RECIPE_ID', $post_id, $rate_content);
    // var_dump($rate_content);
    $ratings = get_post_meta($post_id, 'recipe_ratings', true)['ratings'];
    $count = get_post_meta($post_id, 'recipe_ratings', true)['count'];
    $html = '<p>test' . $ratings . $count . '</p>';
    return $the_content . $rate_content;
  }
  return $the_content;
}