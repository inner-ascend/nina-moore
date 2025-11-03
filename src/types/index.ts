// Type definitions for Nina Moore website

export type Language = 'en' | 'es' | 'fr';

export type ProgramFormat = 'individual' | 'couples' | 'group';

export type PricingInterval = 'one-time' | 'per-session' | 'monthly' | 'per-person';

export interface Pricing {
  amount: number;
  currency: string;
  interval?: PricingInterval;
  description?: string;
}

export interface CTA {
  text: string;
  link: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  pricing: Pricing;
  duration?: string;
  format: ProgramFormat;
  image: string;
  whoThisIsFor: string[];
  whatYouGet: string[];
  cta: CTA;
  sessionCount?: number;
  includes?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  text: string | string[];
  outcome: string;
  program?: string;
  date?: string;
  avatar?: string;
  metrics?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  value: string;
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string | string[];
}

export interface RetreatDate {
  id: string;
  location: string;
  startDate: string;
  endDate: string;
  type: 'private' | 'couples' | 'small-group';
  spotsAvailable?: number;
  totalSpots?: number;
}

export interface Credential {
  id: string;
  title: string;
  description?: string;
  year?: string;
}

export interface TrustSignal {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  preferredContact?: 'email' | 'phone' | 'whatsapp';
  timezone?: string;
  message: string;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export interface ApproachPillar {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ComparisonFeature {
  label: string;
  sacredUnion: string | boolean;
  kundalini: string | boolean;
  privateRetreat: string | boolean;
  groupRetreat: string | boolean;
}
