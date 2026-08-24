type StoreButtonProps = {
  href: string;
  /** Small line above the store name, e.g. "Download on the". */
  kicker: string;
  /** Store name rendered in the display face. */
  store: string;
  size?: "md" | "lg";
  /** "ink" reads on the warm daytime sections, "gold" on the dusk gradient. */
  tone?: "ink" | "gold";
};

const toneClasses = {
  ink: "bg-ink text-peach hover:bg-rust",
  gold: "bg-[linear-gradient(180deg,#ffe9b8,#f0b45c)] text-[#1a0906] shadow-[0_20px_44px_-22px_rgba(255,217,138,0.9)] hover:bg-[linear-gradient(180deg,#fff3d2,#f5c069)]",
} as const;

export function StoreButton({
  href,
  kicker,
  store,
  size = "md",
  tone = "ink",
}: StoreButtonProps) {
  const isLarge = size === "lg";

  return (
    <a
      href={href}
      className={`flex flex-col gap-0.5 rounded-full text-left transition-colors ${
        toneClasses[tone]
      } ${isLarge ? "px-[26px] py-3.5" : "px-[22px] py-[13px]"}`}
    >
      <span className="font-mono text-[8.5px] uppercase tracking-[0.16em] opacity-70">
        {kicker}
      </span>
      <span
        className={`font-display leading-none tracking-[0.05em] ${
          isLarge ? "text-[21px]" : "text-[19px]"
        }`}
      >
        {store}
      </span>
    </a>
  );
}
