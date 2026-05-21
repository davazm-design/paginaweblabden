export interface HeroDomain {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    footerText: string;
}

export interface ProblemCard {
    title: string;
    description: string;
}

export interface ProblemDomain {
    title: string;
    description: string;
    cards: ProblemCard[];
}

export interface SolutionCard {
    title: string;
    description: string;
}

export interface SolutionDomain {
    title: string;
    subtitle: string;
    cards: SolutionCard[];
}

export interface HowItWorksStep {
    number: string;
    title: string;
    description: string;
}

export interface HowItWorksDomain {
    title: string;
    steps: HowItWorksStep[];
    dashboardPreview: {
        title: string;
        description: string;
    };
}

export interface SecurityFeature {
    title: string;
    description: string;
}

export interface SecurityDomain {
    title?: string;
    features?: SecurityFeature[];
    finalCta?: {
        title?: string;
        description?: string;
        buttonText?: string;
        disclaimer?: string;
    };
}

export interface FooterDomain {
    tagline: string;
}

export interface HomePageDomain {
    hero: HeroDomain;
    problem: ProblemDomain;
    solution: SolutionDomain;
    howItWorks: HowItWorksDomain;
    security?: SecurityDomain;
    footer: FooterDomain;
}
