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
  slug?: string;
  title: string;
  excerpt: string;
  date: string;
  content?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
  categories: {
    nodes: Array<{ name: string }>;
  };
}

// --- Responses crudos de WPGraphQL ---

interface GetAllPostsResponse {
  posts: { nodes: WPPost[] };
}

interface GetPostBySlugResponse {
  post: WPPost | null;
}

// HomeFields refleja los campos ACF individuales del custom post "home".
// Todos opcionales: ACF puede no tenerlos definidos sin romper la query.
interface HomeFieldsRaw {
  heroBadgeText?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroCtaText?: string;
  heroSecondaryButtonText?: string;
  heroFooterText?: string;

  problemTitle?: string;
  problemDescription?: string;
  problemCard1Title?: string;
  problemCard1Description?: string;
  problemCard2Title?: string;
  problemCard2Description?: string;
  problemCard3Title?: string;
  problemCard3Description?: string;

  solutionTitle?: string;
  solutionSubtitle?: string;
  solutionCard1Title?: string;
  solutionCard1Description?: string;
  solutionCard2Title?: string;
  solutionCard2Description?: string;
  solutionCard3Title?: string;
  solutionCard3Description?: string;

  howItWorksTitle?: string;
  howItWorksStep1Title?: string;
  howItWorksStep1Description?: string;
  howItWorksStep2Title?: string;
  howItWorksStep2Description?: string;
  howItWorksStep3Title?: string;
  howItWorksStep3Description?: string;

  dashboardPreviewTitle?: string;
  dashboardPreviewDescription?: string;

  securityTitle?: string;
  securityFeature1Title?: string;
  securityFeature1Description?: string;
  securityFeature2Title?: string;
  securityFeature2Description?: string;
  securityFeature3Title?: string;
  securityFeature3Description?: string;

  finalCtaTitle?: string;
  finalCtaDescription?: string;
  finalCtaButtonText?: string;
  finalCtaDisclaimer?: string;

  footerTagline?: string;
}

interface GetHomeFieldsResponse {
  pageBy: { homeFields: HomeFieldsRaw } | null;
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
  const data = await graphQLClient.request<GetAllPostsResponse>(GET_ALL_POSTS);
  return data.posts.nodes;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const data = await graphQLClient.request<GetPostBySlugResponse>(GET_POST_BY_SLUG, { slug });
    return data.post;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

export async function getHomeFields() {
  try {
    const data = await graphQLClient.request<GetHomeFieldsResponse>(GET_HOME_FIELDS);
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
    const data = await graphQLClient.request<GetHomeFieldsResponse>(GET_HOME_FIELDS);
    const raw = data.pageBy?.homeFields;

    // Sin raw o sin el copy crítico del hero el sitio queda mudo: activamos error.tsx.
    if (!raw || !raw.heroTitle || !raw.heroCtaText) return null;

    const pushIfTitled = <T extends { title?: string }>(
      list: { title: string; description: string }[],
      item: T,
      description?: string
    ) => {
      if (item.title) list.push({ title: item.title, description: description ?? "" });
    };

    const problemCards: { title: string; description: string }[] = [];
    pushIfTitled(problemCards, { title: raw.problemCard1Title }, raw.problemCard1Description);
    pushIfTitled(problemCards, { title: raw.problemCard2Title }, raw.problemCard2Description);
    pushIfTitled(problemCards, { title: raw.problemCard3Title }, raw.problemCard3Description);

    const solutionCards: { title: string; description: string }[] = [];
    pushIfTitled(solutionCards, { title: raw.solutionCard1Title }, raw.solutionCard1Description);
    pushIfTitled(solutionCards, { title: raw.solutionCard2Title }, raw.solutionCard2Description);
    pushIfTitled(solutionCards, { title: raw.solutionCard3Title }, raw.solutionCard3Description);

    const steps: { number: string; title: string; description: string }[] = [];
    if (raw.howItWorksStep1Title) steps.push({ number: "01", title: raw.howItWorksStep1Title, description: raw.howItWorksStep1Description ?? "" });
    if (raw.howItWorksStep2Title) steps.push({ number: "02", title: raw.howItWorksStep2Title, description: raw.howItWorksStep2Description ?? "" });
    if (raw.howItWorksStep3Title) steps.push({ number: "03", title: raw.howItWorksStep3Title, description: raw.howItWorksStep3Description ?? "" });

    return {
      hero: {
        badge: raw.heroBadgeText ?? "",
        title: raw.heroTitle,
        subtitle: raw.heroSubtitle ?? "",
        ctaPrimary: raw.heroCtaText,
        ctaSecondary: raw.heroSecondaryButtonText ?? "",
        footerText: raw.heroFooterText ?? ""
      },
      problem: {
        title: raw.problemTitle ?? "",
        description: raw.problemDescription ?? "",
        cards: problemCards
      },
      solution: {
        title: raw.solutionTitle ?? "",
        subtitle: raw.solutionSubtitle ?? "",
        cards: solutionCards
      },
      howItWorks: {
        title: raw.howItWorksTitle ?? "",
        steps,
        dashboardPreview: {
          title: raw.dashboardPreviewTitle ?? "",
          description: raw.dashboardPreviewDescription ?? ""
        }
      },
      // Security: cuando ACF tenga securityFeature*Title/Description y finalCta*,
      // añadirlos a GET_HOME_FIELDS y mapearlos aquí. Hoy SecuritySection usa sus defaults internos.
      security: undefined,
      footer: {
        tagline: raw.footerTagline ?? ""
      }
    };
  } catch (error) {
    console.error("Error fetching structured home data:", error);
    return null;
  }
}
