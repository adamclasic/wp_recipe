<?php

function recipe_create_account()
{
  $output = ['status' => 1];
  // print_r($_POST);

  $username  = $_POST['username'];
  $password  = $_POST['password'];
  $website   = $_POST['website'];

  // check if the username is taken
  $user_id = 0;
  $user_id = wp_create_user(
    $username,
    $password,
    $website
  );
  $user_id = username_exists( $username );
  // check that the email address does not belong to a registered user
  if (!$user_id) {
    wp_send_json($output);
  } else {
  //   // wp_redirect( wp_login_url() );
  //   $creds = array(
  //     'user_login'    => $username,
  //     'user_password' => $password,
  //     'remember'      => false
  //   );
  //   $user = wp_signon( $creds, false );
  //   wp_redirect(home_url('/'));
  //   wp_send_json($output);
  }

  $output = ['status' => 2];

  wp_send_json($output);
}
