import { GraphQLClient, gql } from 'graphql-request';
import type { HomePageDomain } from './types';

// Server-only: el endpoint del CMS no debe entrar al bundle del cliente.
const endpoint = process.env.WORDPRESS_API_URL;

if (!endpoint) {
  throw new Error(
    'WORDPRESS_API_URL no está configurada. ' +
    'Agrega esta variable a tu archivo .env.local (sin prefijo NEXT_PUBLIC_).'
  );
}

export const graphQLClient = new GraphQLClient(endpoint);

// --- Interfaces para el Blog ---
export interface WPPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  categories: {
    nodes: Array<{ name: string }>;
  };
}

// --- Interfaces para el Copy de la Web (ACF) ---
export interface SiteCopy {
  homePage: {
    hero: {
      title: string;
      subtitle: string;
      ctaText: string;
    };
    problem: {
      title: string;
      description: string;
    };
    solution: {
      title: string;
      description: string;
    };
    // Agregaremos más según sea necesario
  };
  global: {
    footerText: string;
    contactEmail: string;
  };
}

// --- Queries ---

// 1. Obtener todos los posts del Blog
export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        slug
        title
        excerpt
        date
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

// 2. Obtener un post por su Slug
export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;

// 3. Obtener el Copy estructurado de la Web (ACF)
// Query actualizada para ACF Free (sin Repeaters - campos individuales)
export const GET_HOME_FIELDS = gql`
  query GetHomeFields {
    pageBy(uri: "home") {
      homeFields {
        # Hero Section
        heroBadgeText
        heroTitle
        heroSubtitle
        heroCtaText
        heroSecondaryButtonText
        heroFooterText
        
        # Problem Section
        problemTitle
        problemDescription
        problemCard1Title
        problemCard1Description
        problemCard2Title
        problemCard2Description
        problemCard3Title
        problemCard3Description
        
        # Solution Section (3 tarjetas individuales)
        solutionTitle
        solutionSubtitle
        solutionCard1Title
        solutionCard1Description
        solutionCard2Title
        solutionCard2Description
        solutionCard3Title
        solutionCard3Description
        
        # How It Works Section (3 pasos individuales)
        howItWorksTitle
        howItWorksStep1Title
        howItWorksStep1Description
        howItWorksStep2Title
        howItWorksStep2Description
        howItWorksStep3Title
        howItWorksStep3Description
        
        # Dashboard Preview
        dashboardPreviewTitle
        dashboardPreviewDescription
        
        
        # Footer
        footerTagline
      }
    }
  }
`;

// --- Helper Functions ---

export async function getAllPosts(): Promise<WPPost[]> {
  const data: any = await graphQLClient.request(GET_ALL_POSTS);
  return data.posts.nodes;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const data: any = await graphQLClient.request(GET_POST_BY_SLUG, { slug });
    return data.post;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

export async function getHomeFields() {
  try {
    const data: any = await graphQLClient.request(GET_HOME_FIELDS);
    const raw = data.pageBy?.homeFields;

    if (!raw) return null;

    // Transformar campos individuales en arrays para los componentes
    return {
      // Hero
      heroBadgeText: raw.heroBadgeText,
      heroTitle: raw.heroTitle,
      heroSubtitle: raw.heroSubtitle,
      heroCtaText: raw.heroCtaText,
      heroSecondaryButtonText: raw.heroSecondaryButtonText,
      heroFooterText: raw.heroFooterText,

      // Problem
      problemTitle: raw.problemTitle,
      problemDescription: raw.problemDescription,
      problemCards: [
        {
          cardTitle: raw.problemCard1Title,
          cardDescription: raw.problemCard1Description
        },
        {
          cardTitle: raw.problemCard2Title,
          cardDescription: raw.problemCard2Description
        },
        {
          cardTitle: raw.problemCard3Title,
          cardDescription: raw.problemCard3Description
        }
      ].filter(card => card.cardTitle),
      // Solution: convertir campos individuales en array
      solutionTitle: raw.solutionTitle,
      solutionSubtitle: raw.solutionSubtitle,
      solutionCards: [
        {
          cardTitle: raw.solutionCard1Title,
          cardDescription: raw.solutionCard1Description
        },
        {
          cardTitle: raw.solutionCard2Title,
          cardDescription: raw.solutionCard2Description
        },
        {
          cardTitle: raw.solutionCard3Title,
          cardDescription: raw.solutionCard3Description
        }
      ].filter(card => card.cardTitle), // Filtrar cards vacías

      // How It Works: convertir campos individuales en array
      howItWorksTitle: raw.howItWorksTitle,
      howItWorksSteps: [
        {
          stepNumber: "01",
          stepTitle: raw.howItWorksStep1Title,
          stepDescription: raw.howItWorksStep1Description
        },
        {
          stepNumber: "02",
          stepTitle: raw.howItWorksStep2Title,
          stepDescription: raw.howItWorksStep2Description
        },
        {
          stepNumber: "03",
          stepTitle: raw.howItWorksStep3Title,
          stepDescription: raw.howItWorksStep3Description
        }
      ].filter(step => step.stepTitle), // Filtrar steps vacíos

      // Dashboard Preview
      dashboardPreviewTitle: raw.dashboardPreviewTitle,
      dashboardPreviewDescription: raw.dashboardPreviewDescription,

      // Security: convertir campos individuales en array
      securityTitle: raw.securityTitle,
      securityFeatures: [
        {
          featureTitle: raw.securityFeature1Title,
          featureDescription: raw.securityFeature1Description
        },
        {
          featureTitle: raw.securityFeature2Title,
          featureDescription: raw.securityFeature2Description
        },
        {
          featureTitle: raw.securityFeature3Title,
          featureDescription: raw.securityFeature3Description
        }
      ].filter(feature => feature.featureTitle), // Filtrar features vacías

      // Final CTA
      finalCtaTitle: raw.finalCtaTitle,
      finalCtaDescription: raw.finalCtaDescription,
      finalCtaButtonText: raw.finalCtaButtonText,
      finalCtaDisclaimer: raw.finalCtaDisclaimer,

      // Footer
      footerTagline: raw.footerTagline
    };
  } catch (error) {
    console.error("Error fetching home fields:", error);
    return null;
  }
}

export async function getHomeDataStruct(): Promise<HomePageDomain | null> {
  try {
    const data: any = await graphQLClient.request(GET_HOME_FIELDS);
    const raw = data.pageBy?.homeFields;

    if (!raw) return null;

    return {
      hero: {
        badge: raw.heroBadgeText,
        title: raw.heroTitle,
        subtitle: raw.heroSubtitle,
        ctaPrimary: raw.heroCtaText,
        ctaSecondary: raw.heroSecondaryButtonText,
        footerText: raw.heroFooterText
      },
      problem: {
        title: raw.problemTitle,
        description: raw.problemDescription,
        cards: [
          { title: raw.problemCard1Title, description: raw.problemCard1Description },
          { title: raw.problemCard2Title, description: raw.problemCard2Description },
          { title: raw.problemCard3Title, description: raw.problemCard3Description }
        ].filter(c => c.title)
      },
      solution: {
        title: raw.solutionTitle,
        subtitle: raw.solutionSubtitle,
        cards: [
          { title: raw.solutionCard1Title, description: raw.solutionCard1Description },
          { title: raw.solutionCard2Title, description: raw.solutionCard2Description },
          { title: raw.solutionCard3Title, description: raw.solutionCard3Description }
        ].filter(c => c.title)
      },
      howItWorks: {
        title: raw.howItWorksTitle,
        steps: [
          { number: "01", title: raw.howItWorksStep1Title, description: raw.howItWorksStep1Description },
          { number: "02", title: raw.howItWorksStep2Title, description: raw.howItWorksStep2Description },
          { number: "03", title: raw.howItWorksStep3Title, description: raw.howItWorksStep3Description }
        ].filter(s => s.title),
        dashboardPreview: {
          title: raw.dashboardPreviewTitle,
          description: raw.dashboardPreviewDescription
        }
      },
      // Security: cuando ACF tenga securityFeature*Title/Description y finalCta*,
      // añadirlos a GET_HOME_FIELDS y mapearlos aquí. Hoy SecuritySection usa sus defaults internos.
      security: undefined,
      footer: {
        tagline: raw.footerTagline
      }
    };
  } catch (error) {
    console.error("Error fetching structured home data:", error);
    return null;
  }
}
