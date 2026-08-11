import type { PillarService } from "@/data/services/types";
import { GradeBalanceSimulator } from "./grading/GradeBalanceSimulator";
import { TrenchDepthExplorer } from "./excavation/TrenchDepthExplorer";
import { PourPhaseTimeline } from "./concrete/PourPhaseTimeline";
import { PavementLayerStack } from "./paving/PavementLayerStack";
import { DemoSequenceBoard } from "./demolition/DemoSequenceBoard";
import { SiteworkMilestonePath } from "./site-development/SiteworkMilestonePath";

const INTERACTIVE_COPY: Record<string, { eyebrow: string; title: string; subtitle: string }> = {
  grading: {
    eyebrow: "Try It",
    title: "Earthwork Quantity & Soil Factor Calculator",
    subtitle: "Adjust cut/fill depth, expansion, and shrink factors to see bank, loose, and compacted cubic yard differences — and why geotechnical reports matter before bid packages go out.",
  },
  excavation: {
    eyebrow: "Try It",
    title: "Utility Trench Explorer",
    subtitle: "Select a utility type to see typical trench depth, width, and what we coordinate before mass excavation begins.",
  },
  concrete: {
    eyebrow: "Try It",
    title: "Pour Phase Timeline",
    subtitle: "Click through each commercial pour phase — from form inspection to cure — and see what happens on an active job site.",
  },
  paving: {
    eyebrow: "Try It",
    title: "What's Under a Parking Lot?",
    subtitle: "Tap each layer to see what sits below the asphalt — explained in plain language, from the surface you drive on down to the prepared ground.",
  },
  demolition: {
    eyebrow: "Try It",
    title: "Demolition Sequence Board",
    subtitle: "Step through a permitted commercial demo program — utilities, hazmat, structural takedown, and export.",
  },
  "site-development": {
    eyebrow: "Try It",
    title: "Sitework Milestone Path",
    subtitle: "Follow the integrated sitework sequence developers and GCs use to turn a raw parcel into a certificate-of-occupancy-ready site.",
  },
};

export function ServiceInteractive({ service }: { service: PillarService }) {
  const copy = INTERACTIVE_COPY[service.slug];
  if (!copy) return null;

  const Widget = {
    grading: GradeBalanceSimulator,
    excavation: TrenchDepthExplorer,
    concrete: PourPhaseTimeline,
    paving: PavementLayerStack,
    demolition: DemoSequenceBoard,
    "site-development": SiteworkMilestonePath,
  }[service.slug];

  if (!Widget) return null;

  return (
    <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="container-x">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="mt-3 heading-lg max-w-3xl">{copy.title}</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{copy.subtitle}</p>
        <div className="mt-10">
          <Widget />
        </div>
      </div>
    </section>
  );
}
