export interface PackageFeature {
    text: string;
    included: boolean;
  }
  
  export interface PricingPackage {
    id: string;
    name: string;
    priceRange: string;
    description: string;
    features: PackageFeature[];
    isPopular?: boolean;
    ctaText: string;
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    image: string;
  }
  
  export interface NavItem {
    label: string;
    href: string;
  }