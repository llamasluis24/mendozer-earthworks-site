export const MAIN_NAV = [
  { to: "/", label: "Home" },
  { to: "/services/$slug" as const, params: { slug: "grading" }, label: "Grading" },
  { to: "/services/$slug" as const, params: { slug: "excavation" }, label: "Excavation" },
  { to: "/services/$slug" as const, params: { slug: "concrete" }, label: "Concrete" },
  { to: "/services/$slug" as const, params: { slug: "paving" }, label: "Asphalt" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const FOOTER_SERVICES = [
  { to: "/services/$slug" as const, params: { slug: "grading" }, label: "Commercial Grading" },
  { to: "/services/$slug" as const, params: { slug: "excavation" }, label: "Commercial Excavation" },
  { to: "/services/$slug" as const, params: { slug: "concrete" }, label: "Commercial Concrete" },
  { to: "/services/$slug" as const, params: { slug: "paving" }, label: "Commercial Asphalt" },
] as const;
