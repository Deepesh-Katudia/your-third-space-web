import type { ReactNode } from "react";

/**
 * "sm" is the hero's secondary handset, "md" the primary one and the size every
 * screen in the stacking showcase uses.
 */
type PhoneSize = "sm" | "md";

const sizes = {
  sm: {
    frame:
      "h-[520px] w-[250px] rounded-[38px] p-[9px] shadow-[0_30px_60px_-22px_rgba(43,32,21,0.45)]",
    screen: "rounded-[30px]",
    hasNotch: false,
  },
  md: {
    frame:
      "h-[606px] w-[298px] rounded-[44px] p-[11px] shadow-[0_40px_70px_-20px_rgba(43,32,21,0.5)]",
    screen: "rounded-[34px]",
    hasNotch: true,
  },
} as const;

type PhoneFrameProps = {
  children: ReactNode;
  size?: PhoneSize;
  /** Classes for the frame itself, e.g. rotation or stacking context. */
  className?: string;
  /** Classes for the clipped screen, normally its background. */
  screenClassName?: string;
};

export function PhoneFrame({
  children,
  size = "md",
  className = "",
  screenClassName = "",
}: PhoneFrameProps) {
  const { frame, screen, hasNotch } = sizes[size];

  return (
    <div
      className={`relative max-w-full shrink-0 bg-[#111] ${frame} ${className}`}
      aria-hidden="true"
    >
      {hasNotch ? (
        <div className="absolute left-1/2 top-[11px] z-[5] h-[19px] w-24 -translate-x-1/2 rounded-b-[15px] bg-[#111]" />
      ) : null}

      <div
        className={`flex h-full w-full flex-col overflow-hidden ${screen} ${screenClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
