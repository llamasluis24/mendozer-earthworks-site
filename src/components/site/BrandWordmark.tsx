import logo from "@/assets/logo.png";

type BrandWordmarkProps = {
  iconClassName?: string;
  textClassName?: string;
};

export function BrandWordmark({
  iconClassName = "h-14 w-14",
  textClassName = "",
}: BrandWordmarkProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="Mendozer X Earthworks Inc. logo"
        width={56}
        height={56}
        className={`${iconClassName} object-contain drop-shadow-md shrink-0`}
      />
      <div className={`flex flex-col items-center leading-none gap-0.5 ${textClassName}`}>
        <div className="font-display text-sm tracking-[0.18em] text-gold whitespace-nowrap">
          MENDOZER
        </div>
        <div
          className="font-display text-lg font-bold text-gold-bright tracking-[0.35em] leading-none py-0.5 [text-shadow:0_0_10px_var(--gold-bright),0_0_22px_rgba(212,168,67,0.55),0_0_36px_rgba(212,168,67,0.25)]"
          aria-label="X for Excavation"
        >
          X
        </div>
        <div className="font-display text-xs tracking-[0.18em] text-foreground/80 whitespace-nowrap">
          EARTHWORKS INC.
        </div>
      </div>
    </div>
  );
}
