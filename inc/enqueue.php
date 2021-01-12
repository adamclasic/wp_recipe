<?php
function r_enqueue()
{
  wp_register_script('r_rateit_script' ,PN_PLUGIN_ROOT . './assets/rateit/jquery.rateit.min.js', ['jquery'], false, true);
  wp_register_style('r_rateit_style' ,PN_PLUGIN_ROOT . './assets/rateit/rateit.css');
  wp_register_script('r_main' ,PN_PLUGIN_ROOT . './assets/js/main.js', ['jquery'], false, true);

  wp_enqueue_script('r_rateit_script');
  wp_enqueue_style('r_rateit_style');
  wp_enqueue_script('r_main');
}