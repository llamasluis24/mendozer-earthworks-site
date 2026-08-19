import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandWordmark } from "./BrandWordmark";
import { MAIN_NAV } from "@/data/navigation";

function NavLink({
  item,
  className,
  onClick,
  activeProps,
  activeOptions,
}: {
  item: (typeof MAIN_NAV)[number];
  className: string;
  onClick?: () => void;
  activeProps?: { className: string };
  activeOptions?: { exact: boolean };
}) {
  if ("params" in item) {
    return (
      <Link
        to={item.to}
        params={item.params}
        className={className}
        onClick={onClick}
        activeProps={activeProps}
        activeOptions={activeOptions}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Link
      to={item.to}
      className={className}
      onClick={onClick}
      activeProps={activeProps}
      activeOptions={activeOptions}
    >
      {item.label}
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const solidBar = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? "min-h-dvh bg-charcoal border-b border-border"
          : solidBar
            ? "bg-charcoal border-b border-border shadow-2xl"
            : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-3 py-2 lg:py-3">
        <Link to="/" className="group relative z-10 shrink-0 hover:opacity-95 transition" onClick={() => setOpen(false)}>
          <BrandWordmark
            iconClassName="h-16 w-16 max-w-16 sm:h-20 sm:w-20 sm:max-w-20 lg:h-24 lg:w-24 lg:max-w-24 xl:h-28 xl:w-28 xl:max-w-28 group-hover:scale-[1.02] transition-transform"
            textClassName="hidden sm:flex"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-3 xl:gap-6" aria-label="Main navigation">
          {MAIN_NAV.map((n) => (
            <NavLink
              key={n.label}
              item={n}
              className="whitespace-nowrap text-[12px] xl:text-[13px] font-medium uppercase tracking-wider text-foreground/85 hover:text-gold transition relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            />
          ))}
        </nav>

        <div className="relative z-20 flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center whitespace-nowrap rounded-md bg-gold px-3 py-2 text-xs xl:px-4 xl:py-2.5 xl:text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold-bright transition shadow-lg shadow-gold/20"
          >
            Request Estimate
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-charcoal">
          <div className="container-x py-4 flex flex-col gap-1 pb-24">
            {MAIN_NAV.map((n) => (
              <NavLink
                key={n.label}
                item={n}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm uppercase tracking-wider text-foreground/85 hover:text-gold border-b border-border/40"
              />
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-gold px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
            >
              Request Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
