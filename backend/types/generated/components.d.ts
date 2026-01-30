import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageBottomContent extends Struct.ComponentSchema {
  collectionName: 'components_homepage_bottom_contents';
  info: {
    displayName: 'Bottom Content';
    icon: 'arrow-down';
  };
  attributes: {
    cta: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageDiscover extends Struct.ComponentSchema {
  collectionName: 'components_homepage_discovers';
  info: {
    displayName: 'Discover';
    icon: 'compass';
  };
  attributes: {
    cta: Schema.Attribute.String;
    label: Schema.Attribute.String;
    text1: Schema.Attribute.Text;
    text2: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageFounders extends Struct.ComponentSchema {
  collectionName: 'components_homepage_founders';
  info: {
    displayName: 'Founders';
    icon: 'users';
  };
  attributes: {
    cta: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    list: Schema.Attribute.JSON;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    cta: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageMap extends Struct.ComponentSchema {
  collectionName: 'components_homepage_maps';
  info: {
    displayName: 'Map';
    icon: 'map-marked-alt';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'comments';
  };
  attributes: {
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TourDates extends Struct.ComponentSchema {
  collectionName: 'components_tour_dates';
  info: {
    displayName: 'Dates';
    icon: 'calendar-alt';
  };
  attributes: {
    availability: Schema.Attribute.Enumeration<
      ['Available', 'Few Seats', 'Full', 'Warning']
    >;
    availabilityDe: Schema.Attribute.String;
    end: Schema.Attribute.Date;
    start: Schema.Attribute.Date;
    status: Schema.Attribute.Enumeration<['available', 'warning', 'full']>;
  };
}

export interface TourFaq extends Struct.ComponentSchema {
  collectionName: 'components_tour_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question-circle';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface TourPricing extends Struct.ComponentSchema {
  collectionName: 'components_tour_pricings';
  info: {
    description: '';
    displayName: 'Pricing';
    icon: 'hand-holding-usd';
  };
  attributes: {
    pillion: Schema.Attribute.Decimal;
    rider: Schema.Attribute.Decimal;
    singleRoom: Schema.Attribute.Decimal;
  };
}

export interface TourQuickFacts extends Struct.ComponentSchema {
  collectionName: 'components_tour_quick_facts';
  info: {
    displayName: 'Quick Facts';
    icon: 'info-circle';
  };
  attributes: {
    airport: Schema.Attribute.String;
    averageRiding: Schema.Attribute.String;
    bikesMax: Schema.Attribute.String;
    pillionNote: Schema.Attribute.Text;
    startEnd: Schema.Attribute.String;
    totalDistance: Schema.Attribute.String;
    tourDuration: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.bottom-content': HomepageBottomContent;
      'homepage.discover': HomepageDiscover;
      'homepage.founders': HomepageFounders;
      'homepage.hero': HomepageHero;
      'homepage.map': HomepageMap;
      'homepage.testimonials': HomepageTestimonials;
      'tour.dates': TourDates;
      'tour.faq': TourFaq;
      'tour.pricing': TourPricing;
      'tour.quick-facts': TourQuickFacts;
    }
  }
}
