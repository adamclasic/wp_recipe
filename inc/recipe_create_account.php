<?php

function recipe_create_account()
{
  $output = ['status' => 1];
  wp_send_json(print_r($_POST));
}