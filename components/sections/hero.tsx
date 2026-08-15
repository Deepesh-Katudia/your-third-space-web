import { ChatPhone } from "@/components/phones/chat-phone";
import { DiscoverPhone } from "@/components/phones/discover-phone";
import { StoreButton } from "@/components/ui/store-button";
import { siteConfig } from "@/lib/site-config";

const orbs = [
  {
    className: "top-[-6%] left-[2%] h-[420px] w-[420px]",
    background:
      "radial-gradient(circle,#ffd9a0 0%,rgba(255,217,160,0) 70%)",
    duration: "11s",
    delay: "0s",
  },
  {
    className: "top-[44%] left-[58%] h-[340px] w-[340px]",
    background:
      "radial-gradient(circle,#ffb27a 0%,rgba(255,178,122,0) 70%)",
    duration: "13s",
    delay: "1.4s",
  },
  {
    className: "top-[8%] left-[66%] h-[280px] w-[280px]",
    background:
      "radial-gradient(circle,#fff1dc 0%,rgba(255,241,220,0) 70%)",
    duration: "10s",
    delay: "2.2s",
  },
  {
    className: "top-[62%] left-[6%] h-[380px] w-[380px]",
    background:
      "radial-gradient(circle,#ec8a4e 0%,rgba(236,138,78,0) 70%)",
    duration: "14s",
    delay: "0.8s",
  },
];

const sparks = [
  { className: "top-[16%] left-[36%] h-[5px] w-[5px]", duration: "2.6s", delay: "0s" },
  { className: "top-[58%] left-[24%] h-1 w-1", duration: "2.2s", delay: "0.9s" },
  { className: "top-[34%] left-[88%] h-[5px] w-[5px]", duration: "3s", delay: "1.5s" },
  { className: "top-[78%] left-[70%] h-1 w-1", duration: "2.4s", delay: "0.4s" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="bg-sunrise relative overflow-hidden border-y border-ink/[0.14]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {orbs.map((orb) => (
          <div
            key={orb.className}
            className={`absolute rounded-full animate-drift ${orb.className}`}
            style={{
              background: orb.background,
              animationDuration: orb.duration,
              animationDelay: orb.delay,
            }}
          />
        ))}
        {sparks.map((spark) => (
          <div
            key={spark.className}
            className={`absolute rounded-full bg-[#fff3de] animate-twinkle ${spark.className}`}
            style={{
              animationDuration: spark.duration,
              animationDelay: spark.delay,
            }}
          />
        ))}
      </div>

      <div className="shell relative z-[2] flex flex-wrap items-center gap-14 pb-20 pt-16 md:pb-[88px] md:pt-[76px]">
        <div className="min-w-0 max-w-[600px] flex-[1_1_460px]">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink/30 bg-white/[0.28] px-[13px] py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
            <span className="block h-1.5 w-1.5 rounded-full bg-rust" />
            Live in all five boroughs
          </p>

          <h1 className="mt-[26px] text-balance font-display text-display-xl font-normal uppercase leading-[0.88] tracking-[0.01em]">
            Your third space
            <br />
            awaits you.
          </h1>

          <p className="mt-[22px] max-w-[480px] text-pretty text-[17px] leading-[1.55] text-taupe">
            Not home. Not work. The room you actually want to be in today.
            Find real events near you, join in one tap, and land in the group
            chat with everyone else going.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <StoreButton
              href={siteConfig.appStoreHref}
              kicker="Download on the"
              store="APP STORE"
            />
            <StoreButton
              href={siteConfig.googlePlayHref}
              kicker="Get it on"
              store="GOOGLE PLAY"
            />
            <a
              href="#host"
              className="flex items-center rounded-full border border-ink/35 px-[22px] py-[13px] font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-white/35"
            >
              I run a venue →
            </a>
          </div>
        </div>

        <div className="flex w-full items-end justify-center lg:w-auto lg:flex-[0_1_auto]">
          <ChatPhone className="hidden translate-x-7 -rotate-[5deg] lg:block" />
          <DiscoverPhone />
        </div>
      </div>
    </section>
  );
}
