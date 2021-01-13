<?php
function getIP() 
{
    // populate a local variable to avoid extra function calls.
    // NOTE: use of getenv is not as common as use of $_SERVER.
    //       because of this use of $_SERVER is recommended, but 
    //       for consistency, I'll use getenv below
    $tmp = getenv("HTTP_CLIENT_IP");
    // you DON'T want the HTTP_CLIENT_ID to equal unknown. That said, I don't
    // believe it ever will (same for all below)
    if ( $tmp && !strcasecmp( $tmp, "unknown"))
        return $tmp;
        
    $tmp = getenv("HTTP_X_FORWARDED_FOR");
    if( $tmp && !strcasecmp( $tmp, "unknown"))
        return $tmp;
        
    // no sense in testing SERVER after this. 
    // $_SERVER[ 'REMOTE_ADDR' ] == gentenv( 'REMOTE_ADDR' );
    $tmp = getenv("REMOTE_ADDR");
    if($tmp && !strcasecmp($tmp, "unknown"))
        return $tmp;
        
    return("unknown");
}

function r_rating_form()
{
  global $wpdb;
  $output = ['respence' => 1];
  $ip = getIP();
  $rate_val = $_POST['rVal'];
  $post_id = $_POST['postId'];
  $wpdb->insert(
    $wpdb->prefix . '_ratings',
    [
      'user_ip' => $ip,
      'rating' => $rate_val,
      'recipe_id' => $post_id,
    ],
    // '%d', '%f', '%s'
  );

  // var_dump($_SERVER['REMOTE_ADDR']);
  // echo($output . $ip . $rate_val . $post_id);
  wp_die();
}