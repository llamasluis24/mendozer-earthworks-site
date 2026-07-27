export interface ServiceBenefit {
  title: string;
  body: string;
}

export interface ServiceProcess {
  step: string;
  title: string;
  body: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface SubService {
  title: string;
  body: string;
  image: string;
}

export interface TrustBarItem {
  icon: string;
  label: string;
}

export interface PillarService {
  slug: string;
  eyebrow: string;
  title: string;
  shortName: string;
  intro: string;
  cardDesc: string;
  heroImage: string;
  metaTitle: string;
  metaDesc: string;
  definition: string;
  aeoSummary: string;
  whyMatters: { title: string; paragraphs: string[] };
  trustBar: TrustBarItem[];
  howProblemsHappen: ServiceBenefit[];
  signsYouNeedService: ServiceBenefit[];
  whatWeEvaluate: string[];
  commonProblems: ServiceBenefit[];
  serviceBreakdown: ServiceBenefit[];
  subServices: SubService[];
  scopeIncludes: string[];
  process: ServiceProcess[];
  educational: { title: string; paragraphs: string[]; callout: string };
  secondaryCallout: { title: string; body: string };
  commercialBenefits: ServiceBenefit[];
  benefits: ServiceBenefit[];
  placeholderTestimonial: { quote: string; author: string; company: string };
  faqs: ServiceFaq[];
  hasDetailPage?: boolean;
}
