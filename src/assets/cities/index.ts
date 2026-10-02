import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import aboutImg from "@/assets/about-daytime.jpg";
import heroImg from "@/assets/hero-bulldozer.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import demolitionImg from "@/assets/service-demolition.jpg";
import pavingImg from "@/assets/service-paving.jpg";

export interface CityLandmarkAsset {
  image: string;
  landmark: string;
  alt: string;
}

/** Jobsite photos per city until real landmark photos arrive. */
export const CITY_LANDMARK_ASSETS: Record<string, CityLandmarkAsset> = {
  riverside: {
    image: g1,
    landmark: "Mission Inn / downtown Riverside",
    alt: "Active commercial earthwork site in Riverside County",
  },
  banning: {
    image: g2,
    landmark: "Pass area / I-10 corridor",
    alt: "Mendozer X Earthworks grading equipment on a commercial pad",
  },
  temecula: {
    image: g3,
    landmark: "Old Town Temecula / wine country",
    alt: "Utility trench excavation at a commercial jobsite",
  },
  "san-bernardino": {
    image: g4,
    landmark: "San Bernardino Mountains / industrial redevelopment",
    alt: "Mini excavator working a commercial excavation site",
  },
  rialto: {
    image: excavationImg,
    landmark: "Rialto industrial / logistics corridor",
    alt: "Commercial excavation in the Inland Empire",
  },
  anaheim: {
    image: pavingImg,
    landmark: "ARTIC / commercial corridor",
    alt: "Asphalt and concrete demo staged for haul-off",
  },
  "santa-ana": {
    image: heroImg,
    landmark: "Santa Ana civic center / county seat",
    alt: "Wide view of an active Mendozer earthwork jobsite",
  },
  irvine: {
    image: aboutImg,
    landmark: "Irvine Spectrum / business district",
    alt: "Skip loader grading a commercial building pad",
  },
  "los-angeles": {
    image: demolitionImg,
    landmark: "Downtown LA skyline / industrial corridor",
    alt: "Commercial demolition and site clearing in progress",
  },
  pasadena: {
    image: aboutImg,
    landmark: "Old Pasadena / Colorado Boulevard corridor",
    alt: "Skip loader grading a commercial building pad",
  },
};

export function getCityLandmarkAsset(citySlug: string): CityLandmarkAsset {
  return (
    CITY_LANDMARK_ASSETS[citySlug] ?? {
      image: g1,
      landmark: "Southern California commercial corridor",
      alt: "Active commercial earthwork site in Southern California",
    }
  );
}
