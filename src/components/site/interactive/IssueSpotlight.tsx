import { useState } from "react";
import type { ServiceBenefit } from "@/data/services/types";
import { AlertTriangle } from "lucide-react";

export function IssueSpotlight({ issues, serviceName }: { issues: ServiceBenefit[]; serviceName: string }) {
  const [active, setActive] = useState(0);
  const issue = issues[active];

  return (
    <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="container-x">
        <p className="eyebrow">Interactive</p>
        <h2 className="mt-3 heading-lg">{serviceName} Problems We See on Local Job Sites</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Select an issue to see how it shows up in the field and what we flag during pre-bid.</p>

        <div className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <div className="grid sm:grid-cols-2 gap-3">
            {issues.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-xl border p-5 text-left transition-all duration-300 ${
                  i === active
                    ? "border-gold bg-gold/10 scale-[1.02] shadow-lg shadow-gold/5"
                    : "border-border bg-card hover:border-gold/40"
                }`}
              >
                <AlertTriangle className={`h-5 w-5 mb-2 ${i === active ? "text-gold" : "text-muted-foreground"}`} />
                <h3 className="font-display text-sm tracking-wide leading-snug">{item.title}</h3>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-gold/30 bg-card p-8 min-h-[240px] flex flex-col justify-center">
            <p className="text-xs text-gold uppercase tracking-wider font-semibold">Issue detail</p>
            <h3 className="mt-3 font-display text-xl text-foreground">{issue.title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{issue.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
