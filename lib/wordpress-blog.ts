
import { cache } from 'react';
import { GraphQLClient, gql } from 'graphql-request';

// Server-only: el endpoint del CMS no debe entrar al bundle del cliente.
const endpoint = process.env.WORDPRESS_API_URL || '';

// Check if endpoint is defined
if (!endpoint) {
  console.error("ERROR: WORDPRESS_API_URL is not defined in environment");
}

const graphQLClient = new GraphQLClient(endpoint);

const GET_BLOG_POST_BY_SLUG = gql`
  query GetBlogPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      slug
      title(format: RENDERED)
      date
      blogFields {
        blogTitle
        blogExcerpt
        blogCategory
        blogContent
        blogReadTime
        featuredImage {
            sourceUrl
            altText
        }
        citableQuotes
        faq {
          pregunta
          respuesta
        }
      }
    }
  }
`;

export const getBlogPost = cache(async (slug: string) => {
  if (!endpoint) return null;
  try {
    const data: any = await graphQLClient.request(GET_BLOG_POST_BY_SLUG, { slug });
    return data.post;
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return null;
  }
});

const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    posts {
      nodes {
        slug
      }
    }
  }
`;

export const getBlogPosts = cache(async () => {
  if (!endpoint) return [];
  try {
    const data: any = await graphQLClient.request(GET_BLOG_POSTS);
    return data.posts.nodes || [];
  } catch (error) {
    console.error("Error fetching blog posts slugs:", error);
    return [];
  }
});
