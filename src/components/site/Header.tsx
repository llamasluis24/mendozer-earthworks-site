import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { MAIN_NAV } from "@/data/navigation";
import { COMPANY } from "@/data/company";

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-border shadow-2xl"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Mendozer x Earthworks Inc. logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain drop-shadow-md group-hover:scale-[1.02] transition"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-sm tracking-[0.18em] text-gold">MENDOZER</div>
            <div className="font-display text-xs tracking-[0.18em] text-foreground/80">EARTHWORKS INC.</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {MAIN_NAV.map((n) => (
            <NavLink
              key={n.label}
              item={n}
              className="text-[13px] font-medium uppercase tracking-wider text-foreground/85 hover:text-gold transition relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={COMPANY.phoneHref}
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold-bright transition shadow-lg shadow-gold/20"
          >
            <Phone className="h-4 w-4" /> {COMPANY.phone}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-charcoal">
          <div className="container-x py-4 flex flex-col gap-1">
            {MAIN_NAV.map((n) => (
              <NavLink
                key={n.label}
                item={n}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm uppercase tracking-wider text-foreground/85 hover:text-gold border-b border-border/40"
              />
            ))}
            <a
              href={COMPANY.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call {COMPANY.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
