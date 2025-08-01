// Common types used throughout the application

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  logo: string;
}

export interface PricingTier {
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}