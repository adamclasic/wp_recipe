<?php
function ac_edit_columns( $column, $post_id ){
  switch( $column ){
      case 'count':
          $recipe_data        =   get_post_meta( $post_id, 'recipe_ratings', true );
          echo isset($recipe_data['count']) ? $recipe_data['count'] : 0;
          break;
      case 'rating':
          $recipe_data        =   get_post_meta( $post_id, 'recipe_ratings', true );
          echo isset($recipe_data['ratings']) ? $recipe_data['ratings'] : 'N/A';
          break;
      default:
          break;
  }
}