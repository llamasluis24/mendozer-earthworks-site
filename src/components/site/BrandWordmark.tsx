import logo from "@/assets/logo.png";

type BrandWordmarkProps = {
  iconClassName?: string;
  textClassName?: string;
  iconWrapperClassName?: string;
};

export function BrandWordmark({
  iconClassName = "h-14 w-14",
  textClassName = "",
  iconWrapperClassName = "",
}: BrandWordmarkProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={iconWrapperClassName}>
        <img
          src={logo}
          alt="Mendozer X Earthworks Inc. logo"
          width={56}
          height={56}
          className={`${iconClassName} object-contain drop-shadow-md shrink-0`}
        />
      </div>
      <div className={`flex items-stretch gap-2 leading-none ${textClassName}`}>
        <span
          className="font-display font-bold text-gold-bright text-[15px] tracking-[0.05em] self-center"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          aria-hidden
        >
          X
        </span>
        <div className="flex flex-col items-center justify-center gap-0.5">
          <div className="font-display text-sm tracking-[0.18em] text-gold whitespace-nowrap">
            MENDOZER
          </div>
          <div className="font-display text-xs tracking-[0.18em] text-foreground/80 whitespace-nowrap">
            EARTHWORKS INC.
          </div>
        </div>
      </div>
    </div>
  );
}
