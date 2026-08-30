/**
 * The badge-unlock moment, transcribed from design/reward_screen.html
 * (the "The Welcomer" phone). The purple void, gold rays and rising particles
 * are the constant frame of the moment; only the mascot and copy change per
 * reward, so they are kept in one place here.
 *
 * Hexes are the design file's own values, kept literal rather than mapped onto
 * the site tokens so the screen matches the comp exactly.
 */

/** The modal's layered nebula, too specific to earn a utility. */
const modalBackground = [
  "radial-gradient(55% 38% at 26% 14%,rgba(255,110,190,0.28),rgba(255,110,190,0) 62%)",
  "radial-gradient(48% 36% at 78% 10%,rgba(110,210,255,0.2),rgba(110,210,255,0) 65%)",
  "radial-gradient(60% 42% at 68% 55%,rgba(180,110,255,0.22),rgba(180,110,255,0) 68%)",
  "radial-gradient(130% 100% at 50% 6%,#5c2fa8 0%,#3a1c80 24%,#221056 46%,#140b38 66%,#08051a 100%)",
].join(",");

const stars = [
  { top: "16px", left: "22px" },
  { top: "34px", left: "206px" },
  { top: "70px", left: "12px" },
  { top: "52px", left: "228px" },
];

/** Embers drifting up past the mascot. */
const embers = [
  { left: "15%", size: 3, duration: "3.3s", delay: "0s" },
  { left: "27%", size: 2, duration: "4.2s", delay: "0.5s" },
  { left: "41%", size: 4, duration: "3.7s", delay: "1s" },
  { left: "59%", size: 2, duration: "4.4s", delay: "1.4s" },
  { left: "73%", size: 3, duration: "3.5s", delay: "0.3s" },
  { left: "87%", size: 2, duration: "4s", delay: "1.9s" },
];

const rayAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

export function RewardScreen() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#161213]">
      {/* The list the modal interrupted, dimmed almost out of sight. */}
      <div aria-hidden className="px-4 py-[22px] opacity-25">
        <div className="mb-3 h-[58px] rounded-[13px] bg-[#3a2f28]" />
        <div className="mb-3 h-[58px] rounded-[13px] bg-[#3a2f28]" />
        <div className="mb-3 h-[58px] rounded-[13px] bg-[#3a2f28]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(10,6,4,0.72)]">
        <div
          className="relative w-[250px] rounded-[26px] px-5 pb-6 pt-8 text-center shadow-[0_0_0_1px_rgba(200,170,255,0.2),0_30px_80px_rgba(0,0,0,0.7)]"
          style={{ background: modalBackground }}
        >
          {stars.map((star) => (
            <div
              key={`${star.top}-${star.left}`}
              className="absolute h-0.5 w-0.5 rounded-full bg-[#e8d9ff] opacity-80"
              style={{ top: star.top, left: star.left }}
            />
          ))}

          {embers.map((ember) => (
            <div
              key={ember.left}
              className="animate-rise-up absolute bottom-[-10px] z-[3] rounded-full bg-[#ffefd0]"
              style={{
                left: ember.left,
                width: ember.size,
                height: ember.size,
                animationDuration: ember.duration,
                animationDelay: ember.delay,
              }}
            />
          ))}

          <div className="animate-burst-pulse absolute -top-9 left-1/2 z-[1] -ml-40 h-80 w-80 origin-center">
            <div className="animate-glow-breathe absolute left-1/2 top-[34px] -ml-[98px] -mt-[98px] h-[196px] w-[196px] rounded-full bg-[radial-gradient(circle,rgba(255,236,190,0.7)_0%,rgba(255,210,140,0.3)_35%,rgba(160,110,255,0.18)_60%,rgba(160,110,255,0)_78%)] blur-[1px]" />
            {rayAngles.map((angle) => (
              <div
                key={angle}
                className="absolute left-1/2 top-1/2 h-[180px] w-[3px] origin-top bg-[linear-gradient(180deg,rgba(255,232,180,0.85),rgba(255,232,180,0))]"
                style={{
                  transform: `translate(-50%,-100%) rotate(${angle}deg)`,
                }}
              />
            ))}
          </div>

          <div className="animate-ring-spin absolute left-1/2 top-7 z-[2] -ml-[70px] -mt-[70px] h-[140px] w-[140px] rounded-full border border-[rgba(255,220,160,0.55)]" />
          <div className="animate-ring-spin absolute left-1/2 top-7 z-[2] -ml-[88px] -mt-[88px] h-[176px] w-[176px] rounded-full border border-dashed border-[rgba(210,180,255,0.5)] [animation-direction:reverse] [animation-duration:24s]" />

          <div className="relative z-[4] flex flex-col items-center">
            <MascotWelcomer />

            <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#ffd98a] opacity-90">
              A milestone, reached
            </p>
            <div className="my-0.5 flex items-center justify-center gap-2.5">
              <span className="h-px w-6 bg-[linear-gradient(90deg,rgba(255,214,140,0),rgba(255,214,140,0.8))]" />
              <span className="h-1 w-1 rounded-full bg-[#ffd98a]" />
              <span className="h-px w-6 bg-[linear-gradient(90deg,rgba(255,214,140,0.8),rgba(255,214,140,0))]" />
            </div>
            <p className="my-1 font-display text-[27px] tracking-[0.02em] text-[#fff3e0] [text-shadow:0_2px_12px_rgba(255,180,90,0.35)]">
              THE WELCOMER
            </p>
            <p className="mb-[18px] font-mono text-[10px] leading-[1.5] text-[#e8c9a0] opacity-85">
              Hosted your first event.
              <br />
              Someone had to go first.
            </p>
            <p className="mb-[18px] rounded-[20px] bg-[linear-gradient(180deg,#ffe9b8,#f0b45c)] px-4 py-1.5 font-display text-sm tracking-[0.06em] text-[#1a0906]">
              +100 PTS
            </p>
            <p className="w-full rounded-[14px] border border-[rgba(255,214,140,0.5)] bg-[rgba(255,214,140,0.08)] p-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#ffe9c2]">
              Continue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The Welcomer mascot, on the roster's shared 170x170 composition grid. */
function MascotWelcomer() {
  return (
    <svg width="76" height="76" viewBox="0 0 170 170" aria-hidden>
      <defs>
        <radialGradient id="tsWelcomer" cx="34%" cy="20%" r="85%">
          <stop offset="0%" stopColor="#ffe9a8" />
          <stop offset="45%" stopColor="#f0a829" />
          <stop offset="100%" stopColor="#b4700f" />
        </radialGradient>
      </defs>
      <path
        d="M85 26 C112 26 128 50 128 82 C128 122 112 148 85 148 C58 148 42 122 42 82 C42 50 58 26 85 26Z"
        fill="url(#tsWelcomer)"
      />
      <path
        d="M56 90 Q66 78 76 90"
        stroke="#161213"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="106" cy="88" r="10" fill="#161213" />
      <circle cx="110" cy="83" r="3" fill="#fff" />
      <circle cx="60" cy="100" r="6" fill="#e8804a" opacity="0.4" />
      <circle cx="112" cy="100" r="6" fill="#e8804a" opacity="0.4" />
      <path
        d="M62 112 Q85 128 108 110"
        stroke="#161213"
        strokeWidth="4.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
