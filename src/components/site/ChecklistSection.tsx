import { CheckCircle2 } from "lucide-react";

export function ChecklistSection({
  eyebrow = "Scope",
  title,
  items,
  variant = "default",
}: {
  eyebrow?: string;
  title: string;
  items: string[];
  variant?: "default" | "alt";
}) {
  return (
    <section className={`py-20 lg:py-28 ${variant === "alt" ? "bg-secondary/40 border-y border-border" : ""}`}>
      <div className="container-x max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 heading-lg">{title}</h2>
        <ul className="mt-8 space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
              <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
