import type { ServiceBenefit, ServiceFaq, ServiceProcess } from "@/data/services/types";

export interface PlaceholderCaseStudy {
  title: string;
  location: string;
  scope: string;
  challenge: string;
  result: string;
  image: string;
  isPlaceholder: true;
}

export interface CityLandmark {
  image: string;
  alt: string;
  caption: string;
  label: string;
}

export interface ServiceCityMedia {
  photos: { src: string; caption: string }[];
  video: { poster: string; caption: string };
}

export interface TabbedInsights {
  siteConditions: string[];
  ourApproach: string[];
  localPermits: string[];
}

export interface ServiceCityPageContent {
  metaDescription: string;
  siteVisitItems: string[];
  evaluationSteps: ServiceProcess[];
  localBenefits: ServiceBenefit[];
  serviceIssues: ServiceBenefit[];
  faqs: ServiceFaq[];
  caseStudies: PlaceholderCaseStudy[];
  landmark: CityLandmark;
  media: ServiceCityMedia;
  tabbedInsights: TabbedInsights;
}
