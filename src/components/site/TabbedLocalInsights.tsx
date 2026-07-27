import { useState } from "react";
import type { TabbedInsights } from "@/data/service-city-content/types";

const TABS = [
  { id: "siteConditions" as const, label: "Site Conditions" },
  { id: "ourApproach" as const, label: "Our Approach" },
  { id: "localPermits" as const, label: "Local Permits" },
];

export function TabbedLocalInsights({
  insights,
  county,
}: {
  insights: TabbedInsights;
  county?: string;
}) {
  const [active, setActive] = useState<keyof TabbedInsights>("siteConditions");
  const items = insights[active];

  return (
    <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="container-x max-w-4xl">
        <p className="eyebrow">Local Insights</p>
        <h2 className="mt-3 heading-lg">Market &amp; Permit Context{county ? ` — ${county}` : ""}</h2>
        <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-wider transition ${
                active === tab.id
                  ? "bg-gold text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-gold/60 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
