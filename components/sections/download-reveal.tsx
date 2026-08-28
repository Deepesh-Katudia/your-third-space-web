"use client";

import { useEffect, useRef } from "react";
import { Magnetic } from "@/components/ui/magnetic";
import { StoreButton } from "@/components/ui/store-button";
import { animateScrollTo } from "@/lib/scroll-to";
import { categories, siteConfig } from "@/lib/site-config";

/** Curtain progress at which the panel content starts staging in. */
const CONTENT_REVEAL_AT = 0.5;

const REVEAL_LINK_SELECTOR = 'a[href="#get"]';

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function MarqueeRun() {
  return (
    <div className="flex shrink-0 items-center">
      {categories.map((category) => (
        <span key={category.name} className="flex items-center">
          <span className="px-7">{category.name}</span>
          <span className="text-gold/50">&#10022;</span>
        </span>
      ))}
    </div>
  );
}

export function DownloadReveal() {
  const stageRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Scrub: write curtain progress onto the panel for the parallax layers. The
  // panel is driven through the DOM rather than state, so a scroll frame never
  // costs a React render.
  useEffect(() => {
    const stage = stageRef.current;
    const panel = panelRef.current;
    if (!stage || !panel) return;

    if (reducedMotion()) {
      panel.style.setProperty("--reveal", "1");
      panel.dataset.revealed = "true";
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const distanceIn = viewport - stage.getBoundingClientRect().top;
      const progress = Math.min(Math.max(distanceIn / viewport, 0), 1);
      panel.style.setProperty("--reveal", progress.toFixed(3));
      panel.dataset.revealed = String(progress >= CONTENT_REVEAL_AT);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  // Every "Get the app" link outside the panel plays the curtain on the way in.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let cancelScroll: (() => void) | undefined;

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest(REVEAL_LINK_SELECTOR);
      if (!link || stage.contains(link)) return;

      event.preventDefault();
      const top = stage.getBoundingClientRect().top + window.scrollY;

      if (reducedMotion()) {
        window.scrollTo(0, top);
        return;
      }

      cancelScroll?.();
      cancelScroll = animateScrollTo(top);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      cancelScroll?.();
    };
  }, []);

  const handleBackToTop = () => {
    if (reducedMotion()) {
      window.scrollTo(0, 0);
      return;
    }
    animateScrollTo(0);
  };

  return (
    <section
      ref={stageRef}
      id="get"
      aria-labelledby="get-heading"
      className="reveal-stage"
    >
      <div
        ref={panelRef}
        data-revealed="false"
        className="reveal-panel bg-dusk flex flex-col justify-between overflow-hidden text-parchment"
      >
        {/* Ambience: drifting orbs, faint grid, a couple of stars. */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="animate-drift absolute left-[10%] top-[14%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(255,214,140,0.22)_0%,rgba(255,214,140,0)_70%)] [animation-duration:13s]" />
          <div className="animate-drift absolute bottom-[2%] right-[6%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(160,110,255,0.26)_0%,rgba(160,110,255,0)_70%)] [animation-delay:1.6s] [animation-duration:16s]" />
          <div className="night-grid absolute inset-0" />
          <div className="animate-twinkle absolute left-[46%] top-[14%] h-[5px] w-[5px] rounded-full bg-[#e8d9ff] [animation-duration:2.8s]" />
          <div className="animate-twinkle absolute left-[18%] top-[64%] h-1 w-1 rounded-full bg-[#e8d9ff] [animation-delay:1.1s] [animation-duration:2.3s]" />
          <div className="animate-twinkle absolute right-[22%] top-[30%] h-1 w-1 rounded-full bg-[#e8d9ff] [animation-delay:0.6s] [animation-duration:3.1s]" />
        </div>

        {/* Oversized wordmark, parallaxed against the curtain. */}
        <div
          aria-hidden
          className="wordmark-ghost pointer-events-none absolute inset-x-0 bottom-[-3vh] z-0 select-none whitespace-nowrap text-center font-display text-[20vw] leading-[0.8] tracking-[0.02em]"
          style={{
            opacity: "var(--reveal)",
            transform:
              "translateY(calc((1 - var(--reveal)) * 12vh)) scale(calc(0.9 + var(--reveal) * 0.1))",
          }}
        >
          {siteConfig.wordmark}
        </div>

        {/* Slanted ticker of the ten things to do. */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-[10%] z-10 -rotate-2 scale-110 overflow-hidden border-y border-gold/20 bg-[#150b36]/55 py-2.5 backdrop-blur-md sm:top-[13%] sm:py-3"
        >
          <div className="marquee-track flex w-max font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-sand md:text-[11px]">
            <MarqueeRun />
            <MarqueeRun />
          </div>
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-6 pt-16 text-center sm:pt-24">
          <p className="eyebrow stage-in text-gold">Get the app</p>

          <h2
            id="get-heading"
            className="stage-in mt-3 max-w-[900px] text-balance font-display text-display-lg font-normal uppercase leading-[0.9] tracking-[0.01em] text-parchment sm:mt-3.5 [--stage-delay:90ms]"
          >
            Something is happening today. Go.
          </h2>

          <p className="stage-in mt-4 max-w-[460px] text-pretty text-[15px] leading-[1.6] text-sand sm:mt-5 sm:text-[17px] [--stage-delay:180ms]">
            Free to download. Free to join. Available now on iPhone and Android.
          </p>

          <div className="stage-in mt-7 flex flex-wrap justify-center gap-3 sm:mt-9 [--stage-delay:270ms]">
            <Magnetic>
              <StoreButton
                href={siteConfig.appStoreHref}
                kicker="Download on the"
                store="APP STORE"
                size="lg"
                tone="gold"
              />
            </Magnetic>
            <Magnetic>
              <StoreButton
                href={siteConfig.googlePlayHref}
                kicker="Get it on"
                store="GOOGLE PLAY"
                size="lg"
                tone="gold"
              />
            </Magnetic>
          </div>
        </div>

        <div className="relative z-20 flex items-center justify-between gap-4 px-6 pb-6 sm:px-10 sm:pb-8">
          <p className="hidden font-mono text-[9.5px] uppercase tracking-[0.14em] text-sand/70 sm:block">
            {siteConfig.tagline} &middot; New York, NY
          </p>
          <span className="sm:hidden" />


          <Magnetic>
            <button
              type="button"
              onClick={handleBackToTop}
              aria-label="Back to top"
              className="pill-glass group flex h-11 w-11 items-center justify-center text-sand hover:border-gold/70 hover:text-parchment"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1"
              >
                <path d="M5 10l7-7 7 7M12 3v18" />
              </svg>
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
