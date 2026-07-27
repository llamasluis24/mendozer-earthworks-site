import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import aboutImg from "@/assets/about-daytime.jpg";
import heroImg from "@/assets/hero-bulldozer.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import demolitionImg from "@/assets/service-demolition.jpg";
import pavingImg from "@/assets/service-paving.jpg";
import concreteImg from "@/assets/service-concrete.jpg";

export interface CityLandmarkAsset {
  image: string;
  landmark: string;
  alt: string;
}

/** Distinct placeholder image per city until real landmark photos arrive. */
export const CITY_LANDMARK_ASSETS: Record<string, CityLandmarkAsset> = {
  riverside: {
    image: g1,
    landmark: "Mission Inn / downtown Riverside",
    alt: "Placeholder — Mission Inn and downtown Riverside skyline",
  },
  banning: {
    image: g2,
    landmark: "Pass area / I-10 corridor",
    alt: "Placeholder — Banning Pass area and I-10 commercial corridor",
  },
  temecula: {
    image: g3,
    landmark: "Old Town Temecula / wine country",
    alt: "Placeholder — Old Town Temecula and wine country commercial district",
  },
  "san-bernardino": {
    image: g4,
    landmark: "San Bernardino Mountains / industrial redevelopment",
    alt: "Placeholder — San Bernardino Mountains and industrial zone",
  },
  rialto: {
    image: excavationImg,
    landmark: "Rialto industrial / logistics corridor",
    alt: "Placeholder — Rialto industrial and logistics corridor",
  },
  anaheim: {
    image: pavingImg,
    landmark: "ARTIC / commercial corridor",
    alt: "Placeholder — Anaheim Regional Transportation Intermodal Center area",
  },
  "santa-ana": {
    image: heroImg,
    landmark: "Santa Ana civic center / county seat",
    alt: "Placeholder — Santa Ana civic center and Orange County seat",
  },
  irvine: {
    image: aboutImg,
    landmark: "Irvine Spectrum / business district",
    alt: "Placeholder — Irvine Spectrum business and commercial district",
  },
  "los-angeles": {
    image: demolitionImg,
    landmark: "Downtown LA skyline / industrial corridor",
    alt: "Placeholder — Downtown Los Angeles skyline and industrial corridor",
  },
  pasadena: {
    image: concreteImg,
    landmark: "Old Pasadena / Colorado Boulevard corridor",
    alt: "Placeholder — Old Pasadena and Colorado Boulevard commercial corridor",
  },
};

export function getCityLandmarkAsset(citySlug: string): CityLandmarkAsset {
  return (
    CITY_LANDMARK_ASSETS[citySlug] ?? {
      image: g1,
      landmark: "Southern California commercial corridor",
      alt: "Placeholder — Southern California commercial area",
    }
  );
}
