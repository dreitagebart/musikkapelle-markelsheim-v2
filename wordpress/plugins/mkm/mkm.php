<?php
/**
 * Plugin Name: MKM Plugin
 * Description: Plugin for extending the MKM REST API
 * Version:     1.0
 * Author:      dreitagebart
 * Author URI:  http://mindreport.com/
 */

function mkm_custom_post_type() {
  register_post_type('events',
    array(
      'labels' => array(
                    'name'          => __('Termine'),
                    'singular_name' => __('Termin'),
                  ),
      'menu_icon'           => 'dashicons-calendar-alt',
      'menu_position'       => 4,
      'public'              => true,
      'has_archive'         => true,
      'show_in_rest'        => true,
	    'show_in_graphql'     => true,
	    'graphql_single_name' => 'event',
      'graphql_plural_name' => 'events',
    )
  );

  register_post_type('news',
    array(
      'labels' => array(
                    'name'          => __('Neuigkeiten'),
                    'singular_name' => __('Neuigkeit'),
                  ),
      'menu_icon'           => 'dashicons-welcome-widgets-menus',
      'menu_position'       => 4,
      'public'              => true,
      'has_archive'         => true,
      'show_in_rest'        => true,
	    'show_in_graphql'     => true,
	    'graphql_single_name' => 'new',
      'graphql_plural_name' => 'news',
    )
  );
}

function mkm_custom_login_logo() {
  echo '<style type="text/css"> h1 a {  background-image: url("https://musikkapelle-markelsheim.de/images/logo.png") !important; }</style>';
}

add_action('login_head', 'mkm_custom_login_logo');
add_action('init', 'mkm_custom_post_type');