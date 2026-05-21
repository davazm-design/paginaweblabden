<?php
/**
 * Plugin Name: LABDEN Pre-Publish SEO Checker
 * Description: Warns if a blog post is missing FAQs or content before publishing.
 * Version: 1.0
 * Author: LABDEN Tech Team
 */

if (!defined('ABSPATH')) exit;

function labden_check_post_requirements() {
    $screen = get_current_screen();
    
    // Only run on 'post' type
    if ($screen->post_type !== 'post') return;

    global $post;
    
    // Check if it's an autosave or revision
    if (!$post || wp_is_post_revision($post->ID) || wp_is_post_autosave($post->ID)) return;

    $warnings = [];

    // 1. Check Content
    $content = get_post_field('post_content', $post->ID);
    if (empty($content)) {
        // Note: If using ACF for content (blog_content), check that instead
        $acf_content = get_field('blog_content', $post->ID);
        if (empty($acf_content)) {
            $warnings[] = "⚠️ **Blog Content** appears to be empty.";
        }
    }

    // 2. Check FAQs
    // Assuming repeater field name is 'faq'
    if (function_exists('get_field')) {
        $faqs = get_field('faq', $post->ID);
        if (!$faqs || empty($faqs)) {
            $warnings[] = "⚠️ **Missing FAQs**. Good SEO requires at least 2-3 Frequently Asked Questions.";
        }
    }

    if (!empty($warnings)) {
        echo '<div class="notice notice-warning is-dismissible">';
        foreach ($warnings as $w) {
            echo "<p>$w</p>";
        }
        echo '</div>';
    }
}

add_action('admin_notices', 'labden_check_post_requirements');
