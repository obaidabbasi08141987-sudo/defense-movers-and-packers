export type PageRoute = 
  | 'home' 
  | 'services' 
  | 'about' 
  | 'areas' 
  | 'dha-movers' 
  | 'intercity' 
  | 'contact' 
  | '404';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  materialsIncluded: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface AreaItem {
  name: string;
  category: 'DHA' | 'South Karachi' | 'East Karachi' | 'Central Karachi' | 'Malir & Cantt' | 'Highway & Suburbs';
  popularFor: string;
  description: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email?: string;
  pickupLocation: string;
  destinationLocation: string;
  movingType: string;
  preferredDate?: string;
  roomsOrItems?: string;
  additionalNotes?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
