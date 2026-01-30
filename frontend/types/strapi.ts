export interface StrapiImage {
    id: number;
    documentId?: string;
    url: string;
    alternativeText?: string;
    name?: string;
    caption?: string;
    width?: number;
    height?: number;
}

export interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface Pricing {
    id: number;
    rider: number;
    pillion: number;
    singleRoom: number;
}

export interface QuickFacts {
    id: number;
    startEnd: string;
    tourDuration: string;
    totalDistance: string;
    averageRiding: string;
    bikesMax: string;
    airport: string;
    pillionNote?: string;
}

export interface FAQ {
    id: number;
    question: string;
    answer: string;
}

export interface TourDate {
    id: number;
    start: string;
    end: string;
    availability: 'Available' | 'Few Seats' | 'Full' | 'Warning';
    availabilityDe?: string;
    status: 'available' | 'warning' | 'full';
}

export interface Tour {
    id: number;
    documentId: string;
    slug: string;
    title: string;
    subtitle: string;
    description: any; // Strapi v5 Rich Text (Blocks)
    duration: string;
    introText: any; // Strapi v5 Rich Text (Blocks)
    itinerary: any; // Strapi v5 Rich Text (Blocks)
    included: any; // Strapi v5 Rich Text (Blocks)
    requirements: any; // Strapi v5 Rich Text (Blocks)
    pricing: Pricing;
    quickFacts: QuickFacts;
    faq: FAQ[];
    dates: TourDate[];
    image?: StrapiImage;
    headerImage?: StrapiImage;
    mapImage?: StrapiImage;
    locale?: string;
}

export interface HomepageHero {
    id: number;
    title: string;
    subtitle: string;
    cta: string;
    image?: StrapiImage;
}

export interface HomepageDiscover {
    id: number;
    label: string;
    title: string;
    text1: string;
    text2: string;
    cta: string;
}

export interface HomepageFounders {
    id: number;
    label: string;
    title: string;
    text: string;
    list: string[];
    cta: string;
    image?: StrapiImage;
}

export interface HomepageMap {
    id: number;
    label: string;
    title: string;
    text: string;
    image?: StrapiImage;
}

export interface HomepageTestimonials {
    id: number;
    label: string;
    title: string;
}

export interface HomepageBottomContent {
    id: number;
    title: string;
    text: string;
    cta: string;
}

export interface Homepage {
    id: number;
    documentId: string;
    locale: string;
    hero: HomepageHero;
    discover: HomepageDiscover;
    founders: HomepageFounders;
    map: HomepageMap;
    testimonials: HomepageTestimonials;
    bottomContent: HomepageBottomContent;
}
