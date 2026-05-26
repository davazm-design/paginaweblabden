import { cache } from 'react';
import { GraphQLClient, gql } from 'graphql-request';

// Server-only: el endpoint del CMS no debe entrar al bundle del cliente.
const endpoint = process.env.WORDPRESS_API_URL;

if (!endpoint) {
  console.warn("[wordpress-blog] WORDPRESS_API_URL no está configurada. Blog WP deshabilitado.");
}

const graphQLClient = endpoint ? new GraphQLClient(endpoint) : null;

// --- Types: respuesta cruda de WPGraphQL para blog posts ---

export interface BlogPostFAQ {
  pregunta: string;
  respuesta: string;
}

export interface BlogPostFeaturedImage {
  sourceUrl: string;
  altText: string;
}

export interface BlogPostFields {
  blogTitle?: string;
  blogExcerpt: string;
  blogCategory: string;
  blogContent: string;
  blogReadTime: string;
  featuredImage?: BlogPostFeaturedImage | null;
  citableQuotes?: string;
  faq?: BlogPostFAQ[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  blogFields: BlogPostFields;
}

interface GetBlogPostResponse {
  post: BlogPost | null;
}

interface GetBlogPostsResponse {
  posts: {
    nodes: { slug: string }[];
  };
}

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

export const getBlogPost = cache(async (slug: string): Promise<BlogPost | null> => {
  if (!endpoint) return null;
  try {
    const data = await graphQLClient!.request<GetBlogPostResponse>(GET_BLOG_POST_BY_SLUG, { slug });
    return data.post ?? null;
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

export const getBlogPosts = cache(async (): Promise<{ slug: string }[]> => {
  if (!endpoint) return [];
  try {
    const data = await graphQLClient!.request<GetBlogPostsResponse>(GET_BLOG_POSTS);
    return data.posts?.nodes ?? [];
  } catch (error) {
    console.error("Error fetching blog posts slugs:", error);
    return [];
  }
});
