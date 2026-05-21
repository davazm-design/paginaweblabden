<?php
/**
 * Plugin Name: LABDEN Pre-Publish Checker
 * Description: Validates critical ACF fields before publishing blog posts
 * Version: 1.0.0
 * Author: LABDEN
 */

if (!defined('ABSPATH')) {
    exit;
}

class LABDEN_PrePublish_Checker
{

    public function __construct()
    {
        add_action('admin_notices', array($this, 'check_post_fields'));
    }

    public function check_post_fields()
    {
        global $post;

        // Only run on post edit screen
        $screen = get_current_screen();
        if (!$screen || $screen->post_type !== 'post' || $screen->base !== 'post') {
            return;
        }

        if (!$post) {
            return;
        }

        // Check if ACF is active
        if (!function_exists('get_field')) {
            return;
        }

        $warnings = array();

        // Check blog_title
        $blog_title = get_field('blog_title', $post->ID);
        if (empty($blog_title)) {
            $warnings[] = 'blog_title (Título del Blog)';
        }

        // Check blog_excerpt
        $blog_excerpt = get_field('blog_excerpt', $post->ID);
        if (empty($blog_excerpt)) {
            $warnings[] = 'blog_excerpt (Extracto del Blog)';
        }

        // Check blog_content
        $blog_content = get_field('blog_content', $post->ID);
        if (empty($blog_content)) {
            $warnings[] = 'blog_content (Contenido del Blog)';
        }

        // Check faq
        $faq = get_field('faq', $post->ID);
        if (empty($faq) || !is_array($faq) || count($faq) === 0) {
            $warnings[] = 'faq (Preguntas Frecuentes) - Se recomienda agregar al menos una para visibilidad IA';
        }

        // Check citable_quotes
        $citable_quotes = get_field('citable_quotes', $post->ID);
        if (empty($citable_quotes) || !is_array($citable_quotes) || count($citable_quotes) === 0) {
            $warnings[] = 'citable_quotes (Citas Citables) - Se recomienda agregar al menos una para visibilidad IA';
        }

        // Display warnings
        if (!empty($warnings)) {
            echo '<div class="notice notice-warning is-dismissible">';
            echo '<p><strong>⚠️ LABDEN Pre-Publish Checker:</strong></p>';
            echo '<ul style="list-style: disc; margin-left: 20px;">';
            foreach ($warnings as $warning) {
                echo '<li>' . esc_html($warning) . '</li>';
            }
            echo '</ul>';
            echo '<p><em>Nota: Estas son advertencias, no bloquean la publicación.</em></p>';
            echo '</div>';
        }
    }
}

// Initialize plugin
new LABDEN_PrePublish_Checker();
