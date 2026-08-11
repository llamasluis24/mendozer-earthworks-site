import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { serviceUrl } from "@/data/services";
import { CTASection } from "@/components/site/CTA";
import { buildPageMeta } from "@/data/seo";
import heroImg from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/projects")({
  head: () =>
    buildPageMeta({
      title: "Commercial Earthwork Case Studies | Mendozer X Earthworks Inc.",
      description:
        "Commercial earthwork case studies across Southern California. Grading, excavation, concrete, and asphalt projects for developers and GCs.",
      path: "/projects",
      image: heroImg,
    }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Commercial earthwork case studies" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40" />
        </div>
        <div className="container-x relative">
          <p className="eyebrow">Case Studies</p>
          <h1 className="mt-4 heading-xl max-w-4xl">Commercial Project Case Studies Across Southern California</h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85">
            Featured commercial grading, excavation, concrete, and asphalt projects for developers, GCs, and property owners. Placeholder imagery — final project photos and drone documentation coming soon.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x space-y-16">
          {PROJECTS.map((p) => (
            <article key={p.slug} className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="aspect-[21/9] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-8 lg:p-12">
                <p className="eyebrow">{p.serviceCategory}</p>
                <h2 className="mt-2 heading-lg text-2xl lg:text-3xl">{p.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">{p.overview}</p>

                <dl className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="rounded-lg border border-border p-4"><dt className="text-xs uppercase tracking-wider text-muted-foreground">Location</dt><dd className="mt-1 font-medium">{p.location}</dd></div>
                  <div className="rounded-lg border border-border p-4"><dt className="text-xs uppercase tracking-wider text-muted-foreground">Project Type</dt><dd className="mt-1 font-medium">{p.projectType}</dd></div>
                  <div className="rounded-lg border border-border p-4"><dt className="text-xs uppercase tracking-wider text-muted-foreground">Timeline</dt><dd className="mt-1 font-medium">{p.timeline}</dd></div>
                  <div className="rounded-lg border border-border p-4"><dt className="text-xs uppercase tracking-wider text-muted-foreground">County</dt><dd className="mt-1 font-medium">{p.county}</dd></div>
                </dl>

                <div className="mt-8 grid lg:grid-cols-2 gap-8 text-sm text-muted-foreground leading-relaxed">
                  <div className="space-y-4">
                    <p><strong className="text-foreground block mb-1">Scope</strong>{p.scope}</p>
                    <p><strong className="text-foreground block mb-1">Challenge</strong>{p.challenge}</p>
                    <p><strong className="text-foreground block mb-1">Equipment</strong>{p.equipment}</p>
                  </div>
                  <div className="space-y-4">
                    <p><strong className="text-foreground block mb-1">Solution</strong>{p.solution}</p>
                    <p><strong className="text-foreground block mb-1">Results</strong>{p.results}</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {p.gallery.map((img, i) => (
                    <figure key={i} className="aspect-video rounded-lg overflow-hidden border border-border">
                      <img src={img} alt={`${p.title} photo ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                    </figure>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {p.relatedServices.map((slug) => (
                    <Link key={slug} to={serviceUrl(slug)} className="text-xs uppercase tracking-wider text-gold hover:underline">
                      {slug.replace(/-/g, " ")} →
                    </Link>
                  ))}
                </div>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-wider text-sm hover:gap-3 transition-all">
                  Discuss a Similar Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
