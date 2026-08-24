"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** How far the element chases the cursor, as a fraction of the offset. */
const PULL = 0.3;
/** Cap so a wide pill never slides off its own footprint. */
const MAX_OFFSET_PX = 16;

const clamp = (value: number) =>
  Math.max(-MAX_OFFSET_PX, Math.min(MAX_OFFSET_PX, value));

type MagneticProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Wraps a control so it leans towards the cursor on hover. Skipped entirely on
 * touch pointers and when the visitor prefers reduced motion.
 */
export function Magnetic({ children, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const wantsLessMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!isFinePointer || wantsLessMotion) return;

    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = clamp((event.clientX - (rect.left + rect.width / 2)) * PULL);
      const y = clamp((event.clientY - (rect.top + rect.height / 2)) * PULL);
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleLeave = () => {
      element.style.transform = "";
    };

    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", handleLeave);
    element.addEventListener("pointercancel", handleLeave);

    return () => {
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", handleLeave);
      element.removeEventListener("pointercancel", handleLeave);
    };
  }, []);

  return (
    <span
      ref={ref}
      className={`inline-block transition-transform duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        className ?? ""
      }`}
    >
      {children}
    </span>
  );
}
