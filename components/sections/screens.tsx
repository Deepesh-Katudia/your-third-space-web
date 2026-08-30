"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneFrame } from "@/components/phones/phone-frame";
import { ChatScreen } from "@/components/phones/screens/chat-screen";
import { ConnectionsScreen } from "@/components/phones/screens/connections-screen";
import { DiscoverScreen } from "@/components/phones/screens/discover-screen";
import { RequestsScreen } from "@/components/phones/screens/requests-screen";
import { RewardScreen } from "@/components/phones/screens/reward-screen";
import { appScreens } from "@/lib/site-config";

/**
 * How far a card recedes once the next one has fully covered it. Depth is read
 * from scale, tilt and brightness rather than opacity: the handsets are opaque,
 * and fading them lets the cards underneath bleed through the screen.
 */
const SCALE_DROP = 0.13;
const TILT_DEG = 3;
const LIFT_PERCENT = 4;
const DIM_DROP = 0.12;

const screenRenderers = {
  // Discover and reward each paint their own screen background.
  discover: { Screen: DiscoverScreen, background: "" },
  chat: { Screen: ChatScreen, background: "bg-apricot" },
  requests: { Screen: RequestsScreen, background: "bg-sunrise" },
  connections: { Screen: ConnectionsScreen, background: "bg-sunrise" },
  reward: { Screen: RewardScreen, background: "bg-[#161213]" },
} as const;

export function Screens() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stack = stackRef.current;
    if (!section || !stack) return;

    gsap.registerPlugin(ScrollTrigger);

    const wantsLessMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]");
      const steps = gsap.utils.toArray<HTMLElement>("[data-stack-step]");
      const lastIndex = cards.length - 1;
      if (lastIndex < 1) return;

      const apply = (progress: number) => {
        // Progress spans one card transition per viewport of scroll.
        const position = progress * lastIndex;

        if (!wantsLessMotion) {
          cards.forEach((card, index) => {
            const covered = Math.min(Math.max(position - index, 0), 1);
            // Alternate the tilt so the covered cards fan out like a deck.
            const direction = index % 2 === 0 ? -1 : 1;
            gsap.set(card, {
              scale: 1 - covered * SCALE_DROP,
              yPercent: -covered * LIFT_PERCENT,
              rotate: covered * TILT_DEG * direction,
              filter: `brightness(${1 - covered * DIM_DROP})`,
            });
          });
        }

        const active = Math.min(Math.round(position), lastIndex);
        steps.forEach((step, index) => {
          step.dataset.active = String(index === active);
        });
      };

      ScrollTrigger.create({
        trigger: stack,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => apply(self.progress),
        // Fires on creation and on resize, so the first step starts lit.
        onRefresh: (self) => apply(self.progress),
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="screens"
      aria-labelledby="screens-heading"
      className="relative border-y border-ink/[0.14] bg-peach"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute left-[6%] top-[12%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#fff1dc_0%,rgba(255,241,220,0)_70%)] [animation-duration:14s]" />
        <div className="animate-drift absolute bottom-[10%] right-[4%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,#f3b27a_0%,rgba(243,178,122,0)_70%)] [animation-delay:1.8s] [animation-duration:17s]" />
      </div>

      <div className="shell relative z-[2]">
        <div className="grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,auto)]">
          {/* Pinned copy */}
          <div>
            <div className="pt-[88px] lg:sticky lg:top-0 lg:flex lg:h-[100svh] lg:flex-col lg:justify-center lg:pt-0">
              <p className="eyebrow text-rust">Inside the app</p>
              <h2
                id="screens-heading"
                className="mt-3.5 max-w-[520px] font-display text-display-sm font-normal uppercase leading-[0.94] tracking-[0.01em]"
              >
                Five screens between a listing and a group you know.
              </h2>
              <p className="mt-5 max-w-[440px] text-pretty text-base leading-[1.6] text-taupe">
                Scroll through the app the way you&apos;d actually use it, from
                the first search to the people you keep.
              </p>

              <ol className="mt-9 max-w-[440px] border-t border-dashed border-ink/25">
                {appScreens.map((screen) => (
                  <li
                    key={screen.key}
                    data-stack-step
                    data-active="false"
                    className="group flex gap-4 border-b border-dashed border-ink/25 py-4 transition-opacity duration-500 data-[active=false]:opacity-40"
                  >
                    <span className="font-display text-[26px] leading-none text-rust transition-colors duration-500 group-data-[active=false]:text-ink/45">
                      {screen.step}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[21px] uppercase leading-none tracking-[0.03em]">
                        {screen.title}
                      </span>
                      <span className="mt-2 block text-pretty text-[13.5px] leading-[1.5] text-taupe">
                        {screen.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Stacking screens */}
          <div ref={stackRef} className="pb-16 lg:pb-0">
            {appScreens.map((screen) => {
              const { Screen, background } = screenRenderers[screen.key];

              return (
                <figure
                  key={screen.key}
                  className="sticky top-0 flex h-[100svh] items-center justify-center"
                >
                  <div className="origin-center scale-[0.68] sm:scale-[0.82] lg:scale-100">
                    <div data-stack-card>
                      <PhoneFrame size="md" screenClassName={background}>
                        <Screen />
                      </PhoneFrame>
                    </div>
                  </div>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
