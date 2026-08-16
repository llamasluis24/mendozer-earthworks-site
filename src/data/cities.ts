export interface City {
  slug: string;
  name: string;
  county: "Riverside County" | "San Bernardino County" | "Orange County" | "Los Angeles County";
  region: "inland-empire" | "orange-county" | "los-angeles-county";
  nearby: string[];
  /** City center used to place service area map markers. */
  coords: { lng: number; lat: number };
}

export const REGIONS = [
  {
    slug: "inland-empire",
    name: "Inland Empire",
    description:
      "Commercial earthwork across Riverside and San Bernardino counties — warehouse pads, retail centers, industrial sites, and municipal projects in Riverside, Banning, Temecula, San Bernardino, and Rialto.",
  },
  {
    slug: "orange-county",
    name: "Orange County",
    description:
      "Grading, excavation, concrete, and asphalt for commercial redevelopment and new construction across Anaheim, Santa Ana, and Irvine.",
  },
  {
    slug: "los-angeles-county",
    name: "Los Angeles County",
    description:
      "Heavy civil sitework for developers, GCs, and property owners across Los Angeles and Pasadena commercial and industrial corridors.",
  },
] as const;

export const CITIES: City[] = [
  {
    slug: "riverside",
    name: "Riverside",
    county: "Riverside County",
    region: "inland-empire",
    nearby: ["banning", "temecula", "san-bernardino"],
    coords: { lng: -117.3755, lat: 33.9806 },
  },
  {
    slug: "banning",
    name: "Banning",
    county: "Riverside County",
    region: "inland-empire",
    nearby: ["riverside", "temecula", "san-bernardino"],
    coords: { lng: -116.8763, lat: 33.9256 },
  },
  {
    slug: "temecula",
    name: "Temecula",
    county: "Riverside County",
    region: "inland-empire",
    nearby: ["riverside", "banning", "rialto"],
    coords: { lng: -117.1484, lat: 33.4936 },
  },
  {
    slug: "san-bernardino",
    name: "San Bernardino",
    county: "San Bernardino County",
    region: "inland-empire",
    nearby: ["rialto", "riverside", "banning"],
    coords: { lng: -117.2898, lat: 34.1083 },
  },
  {
    slug: "rialto",
    name: "Rialto",
    county: "San Bernardino County",
    region: "inland-empire",
    nearby: ["san-bernardino", "riverside", "temecula"],
    coords: { lng: -117.3703, lat: 34.1064 },
  },
  {
    slug: "anaheim",
    name: "Anaheim",
    county: "Orange County",
    region: "orange-county",
    nearby: ["santa-ana", "irvine", "los-angeles"],
    coords: { lng: -117.9143, lat: 33.8366 },
  },
  {
    slug: "santa-ana",
    name: "Santa Ana",
    county: "Orange County",
    region: "orange-county",
    nearby: ["anaheim", "irvine", "los-angeles"],
    coords: { lng: -117.8678, lat: 33.7455 },
  },
  {
    slug: "irvine",
    name: "Irvine",
    county: "Orange County",
    region: "orange-county",
    nearby: ["anaheim", "santa-ana", "pasadena"],
    coords: { lng: -117.8265, lat: 33.6846 },
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    county: "Los Angeles County",
    region: "los-angeles-county",
    nearby: ["pasadena", "anaheim", "santa-ana"],
    coords: { lng: -118.2437, lat: 34.0522 },
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    county: "Los Angeles County",
    region: "los-angeles-county",
    nearby: ["los-angeles", "anaheim", "irvine"],
    coords: { lng: -118.1445, lat: 34.1478 },
  },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getCityBySlugParam(slugParam: string): City | undefined {
  return getCity(slugParam.replace(/-ca$/, ""));
}

export function cityUrl(slug: string) {
  return `/service-areas/${slug}` as const;
}

export function citiesInRegion(region: City["region"]) {
  return CITIES.filter((c) => c.region === region);
}
