import type { ServiceBenefit, ServiceFaq, ServiceProcess } from "@/data/services/types";
import type {
  CityLandmark,
  PlaceholderCaseStudy,
  ServiceCityMedia,
  TabbedInsights,
} from "@/data/service-city-content/types";

export type { CityLandmark, PlaceholderCaseStudy, TabbedInsights } from "@/data/service-city-content/types";

export interface CityPageContent {
  metaDescription: string;
  localIssues: ServiceBenefit[];
  siteVisitItems: string[];
  evaluationSteps: ServiceProcess[];
  localBenefits: ServiceBenefit[];
  faqs: ServiceFaq[];
  caseStudies: PlaceholderCaseStudy[];
  landmark: CityLandmark;
  media: ServiceCityMedia;
  tabbedInsights: TabbedInsights;
}
