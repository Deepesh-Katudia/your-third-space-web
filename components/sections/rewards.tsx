import { MascotFirstEvent } from "@/components/mascot-first-event";
import { siteConfig, tiers } from "@/lib/site-config";

export function Rewards() {
  return (
    <section id="rewards" className="bg-dusk relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,110,190,0.28)_0%,rgba(255,110,190,0)_70%)]" />
        <div className="absolute bottom-[4%] right-[8%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(110,210,255,0.2)_0%,rgba(110,210,255,0)_70%)]" />
        <div className="animate-twinkle absolute left-[52%] top-[6%] h-[5px] w-[5px] rounded-full bg-[#e8d9ff] [animation-duration:2.8s]" />
        <div className="animate-twinkle absolute left-[22%] top-[72%] h-1 w-1 rounded-full bg-[#e8d9ff] [animation-delay:1.1s] [animation-duration:2.3s]" />
      </div>

      <div className="shell relative z-[2] flex flex-wrap items-center gap-16 pb-26 pt-24">
        <div className="min-w-0 flex-[1_1_420px]">
          <p className="eyebrow text-gold">Points &amp; badges</p>
          <h2 className="mt-3.5 font-display text-display-md font-normal uppercase leading-[0.92] tracking-[0.01em] text-parchment">
            Showing up is the whole point.
          </h2>
          <p className="mt-5 max-w-[440px] text-pretty text-base leading-[1.6] text-sand">
            Every event you attend earns {siteConfig.pointsPerEvent} points and
            moves you up a tier. The people who keep turning up are the ones who
            make a place feel like somewhere.
          </p>

          <dl className="mt-[34px] max-w-[460px]">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="flex items-center justify-between gap-4 border-b border-gold/25 py-4"
              >
                <dt
                  className={`font-display text-[28px] uppercase tracking-[0.04em] ${
                    tier.highlight ? "text-gold" : "text-parchment"
                  }`}
                >
                  {tier.name}
                </dt>
                <dd className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-sand">
                  {tier.requirement}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto flex-none">
          <div className="h-[590px] w-[288px] max-w-full rounded-[44px] bg-[#111] p-[11px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
            <div className="bg-dusk relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[34px] px-[22px] py-7">
              <div className="animate-glow-pulse absolute left-1/2 top-[12%] h-[230px] w-[230px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,236,190,0.7)_0%,rgba(255,210,140,0.3)_35%,rgba(160,110,255,0.18)_62%,rgba(160,110,255,0)_75%)]" />
              <div className="animate-ring-spin absolute left-1/2 top-[16%] -ml-[88px] h-[176px] w-[176px] rounded-full border border-[rgba(255,220,160,0.55)]" />
              <div className="animate-ring-spin absolute left-1/2 top-[14%] -ml-[102px] h-[204px] w-[204px] rounded-full border border-dashed border-[rgba(210,180,255,0.5)] [animation-direction:reverse] [animation-duration:24s]" />

              <div className="relative z-[2] mt-[34px] flex flex-col items-center gap-0.5 text-center">
                <MascotFirstEvent />

                <p className="mt-[26px] font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-gold">
                  It begins
                </p>
                <p className="mt-2 font-display text-[34px] uppercase leading-none tracking-[0.04em] text-parchment">
                  First event
                </p>
                <p className="mt-2 max-w-[190px] text-[11.5px] leading-[1.5] text-sand">
                  You showed up.
                  <br />
                  That was the hard part.
                </p>
                <p className="mt-5 rounded-full bg-[linear-gradient(180deg,#ffe9b8,#f0b45c)] px-5 py-2 font-display text-[22px] tracking-[0.05em] text-[#1a0906]">
                  +{siteConfig.pointsPerEvent} PTS
                </p>
                <p className="mt-[22px] rounded-full border border-[rgba(255,214,140,0.5)] bg-[rgba(255,214,140,0.08)] px-[26px] py-2.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#ffe9c2]">
                  Nice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
