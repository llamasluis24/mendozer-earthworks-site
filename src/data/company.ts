export const COMPANY = {
  name: "Mendozer X Earthworks Inc.",
  shortName: "Mendozer X Earthworks",
  /** The X stands for Excavation — core to company identity */
  brandMark: "Mendozer X",
  phone: "(951) 427-4904",
  phoneHref: "tel:+19514274904",
  email: "inquiries@mendozerxearthworks.com",
  license: "1069854",
  licenseLabel: "Licensed #1069854",
  serviceAreas: ["Inland Empire", "Orange County", "Los Angeles County", "Southern California"],
  description:
    "Mendozer X Earthworks Inc. is a licensed commercial earthwork contractor serving the Inland Empire, Orange County, and Los Angeles County. The X stands for Excavation — grading, excavation, concrete flatwork, and asphalt for developers, general contractors, and construction professionals.",
  founder: "Miguel Mendoza",
  licensingSchool: "Blue Collar Licensing",
  licensingInstructor: "Luis Gonzalez",
} as const;

export const SERVICE_OPTIONS = [
  "Grading",
  "Excavation",
  "Concrete",
  "Asphalt",
  "Other",
] as const;

export const EARTHWORK_DISCLAIMER =
  "Earthwork quantities shown are conceptual planning estimates only. Final excavation, import, and export quantities vary based on geotechnical reports, existing field conditions, soil expansion and shrink factors, project revisions, and engineer-approved grading plans.";
