<?php

function recipe_login_account()
{
  $output = ['status' => 1];

  $username  = $_POST['username'];
  $password  = $_POST['password'];

  $login_status = wp_signon([
    'user_login'    => $username,
    'user_password' => $password,
    'remember'      => true
  ]);

  if (is_wp_error($login_status)) {
    // wp_send_json($login_status);
    wp_send_json($output);
  }

  $output = ['status' => 2];

  wp_send_json($output);
}
