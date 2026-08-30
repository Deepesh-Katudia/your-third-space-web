/**
 * Discover Home, transcribed from design/ambient-background-splash-and-home.html
 * (the "Discover Home" phone). The ambient gradient, drifting glows and
 * twinkles are part of the screen here rather than the frame, so the header,
 * search bar and event card sit on top of live motion.
 *
 * Hexes are the design file's own sampled values, kept literal rather than
 * mapped onto the site tokens so the screen matches the comp exactly.
 */

/** Soft radial lights drifting behind the content. */
const glows = [
  {
    className: "left-0 top-[2%] h-40 w-40",
    background: "radial-gradient(circle,#ffd9a0 0%,rgba(255,217,160,0) 70%)",
    delay: "0s",
  },
  {
    className: "left-[64%] top-1/2 h-30 w-30",
    background: "radial-gradient(circle,#ffb27a 0%,rgba(255,178,122,0) 70%)",
    delay: "0.9s",
  },
  {
    className: "left-[60%] top-[18%] h-25 w-25",
    background: "radial-gradient(circle,#fff1dc 0%,rgba(255,241,220,0) 70%)",
    delay: "1.6s",
  },
  {
    className: "left-[4%] top-[66%] h-35 w-35",
    background: "radial-gradient(circle,#ec8a4e 0%,rgba(236,138,78,0) 70%)",
    delay: "1.2s",
  },
  {
    className: "left-[48%] top-[82%] h-[85px] w-[85px]",
    background: "radial-gradient(circle,#ffe3bc 0%,rgba(255,227,188,0) 70%)",
    delay: "0.5s",
  },
];

const twinkles = [
  { className: "left-[80%] top-[14%]", delay: "0.4s" },
  { className: "left-[10%] top-[45%]", delay: "1.4s" },
  { className: "left-[85%] top-[58%]", delay: "0.9s" },
];

const tabs = ["Discover", "My events", "Chats", "Profile"];

export function DiscoverScreen() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,#f2b079_0%,#fae1be_100%)]">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {glows.map((glow) => (
          <div
            key={glow.className}
            className={`animate-drift-soft absolute rounded-full opacity-65 ${glow.className}`}
            style={{ background: glow.background, animationDelay: glow.delay }}
          />
        ))}
        {twinkles.map((twinkle) => (
          <div
            key={twinkle.className}
            className={`animate-twinkle absolute h-[5px] w-[5px] rounded-full bg-[#fff3de] [animation-duration:2s] ${twinkle.className}`}
            style={{ animationDelay: twinkle.delay }}
          />
        ))}
      </div>

      <div className="relative z-[2] flex h-full flex-col">
        <div className="flex-1 px-4 pt-[18px]">
          <div className="flex items-start justify-between gap-2">
            <h1 className="font-display text-[22px] font-normal leading-[1.05] tracking-[0.01em] text-[#2b2015]">
              YOUR THIRD SPACE
              <br />
              AWAITS YOU.
            </h1>
            <div className="flex flex-col items-end gap-2">
              <div className="rounded-[20px] border border-[rgba(43,32,21,0.3)] bg-white/25 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.05em] text-[#2b2015]">
                All of NYC
              </div>
              <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#3f6e52] text-[10px] font-bold text-white">
                UT
              </div>
            </div>
          </div>

          <div className="mt-3 flex gap-2">
            <div className="flex-1 rounded-[20px] border border-[rgba(43,32,21,0.2)] bg-white/35 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.03em] text-[#2b2015] opacity-80">
              Search events, venues...
            </div>
            <div className="h-[34px] w-[34px] shrink-0 rounded-[10px] border border-[rgba(43,32,21,0.2)] bg-white/35" />
          </div>

          <div className="mt-4 overflow-hidden rounded-[14px] border border-[rgba(43,32,21,0.14)] bg-[rgba(250,225,190,0.9)] backdrop-blur-[2px]">
            <div className="flex h-[70px] items-center justify-center bg-[linear-gradient(135deg,#8a3a17,#5c2410)] font-mono text-[8px] uppercase tracking-[0.1em] text-white/50">
              No photo yet
            </div>
            <div className="flex gap-[11px] px-3.5 py-3">
              <div className="w-[42px] shrink-0 border-r border-dashed border-[rgba(43,32,21,0.2)] pr-2.5 text-center">
                <div className="font-display text-[20px] leading-none text-[#8a3a17]">
                  12
                </div>
                <div className="font-mono text-[8px] uppercase tracking-[0.1em] text-[#6e5b44]">
                  Jul
                </div>
              </div>
              <div className="min-w-0">
                <div className="font-display text-[15px] tracking-[0.01em] text-[#2b2015]">
                  NIGHTOUT
                </div>
                <div className="mt-0.5 text-[10px] text-[#6e5b44]">
                  Clay Studio · Williamsburg
                </div>
                <div className="mt-1.5 font-mono text-[8.5px] text-[#2b2015]">
                  WED, JUL 12 · 7:00 PM / MUSIC
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around border-t border-[rgba(43,32,21,0.15)] bg-[rgba(250,225,190,0.55)] px-2 pb-4 pt-2.5 backdrop-blur-[3px]">
          {tabs.map((tab, index) => (
            <div
              key={tab}
              className={`text-center font-mono text-[8px] uppercase tracking-[0.03em] ${
                index === 0 ? "font-semibold text-[#8a3a17]" : "text-[#6e5b44]"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
