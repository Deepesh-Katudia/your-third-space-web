type StoreButtonProps = {
  href: string;
  /** Small line above the store name, e.g. "Download on the". */
  kicker: string;
  /** Store name rendered in the display face. */
  store: string;
  size?: "md" | "lg";
};

export function StoreButton({
  href,
  kicker,
  store,
  size = "md",
}: StoreButtonProps) {
  const isLarge = size === "lg";

  return (
    <a
      href={href}
      className={`flex flex-col gap-0.5 rounded-full bg-ink text-left text-peach transition-colors hover:bg-rust ${
        isLarge ? "px-[26px] py-3.5" : "px-[22px] py-[13px]"
      }`}
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
