import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  /** Pixel size of the mark. */
  size?: number;
  /** Font size of the wordmark. */
  wordmarkSize?: number;
};

export function Logo({ size = 36, wordmarkSize = 23 }: LogoProps) {
  return (
    <span className="flex items-center gap-[11px]">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="22"
          cy="24"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeOpacity="0.55"
        />
        <circle
          cx="42"
          cy="24"
          r="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeOpacity="0.55"
        />
        <circle cx="32" cy="41" r="15" fill="currentColor" />
      </svg>
      <span
        className="font-display leading-none tracking-[0.03em]"
        style={{ fontSize: wordmarkSize }}
      >
        {siteConfig.wordmark}
      </span>
    </span>
  );
}
