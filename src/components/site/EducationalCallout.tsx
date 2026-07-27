export function EducationalCallout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 rounded-xl border border-gold/40 bg-gold/5 p-6 lg:p-8">
      {title && <h3 className="font-display text-lg tracking-wide text-gold mb-3">{title}</h3>}
      <p className="text-sm lg:text-base text-foreground/90 leading-relaxed font-medium">{children}</p>
    </div>
  );
}
