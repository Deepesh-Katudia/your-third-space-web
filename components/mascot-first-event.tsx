/**
 * The "First Event" achievement mascot, transcribed from the app's
 * constants/mascotFigures.ts on a 170x170 composition grid.
 */
export function MascotFirstEvent({ size = 152 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 170 170"
      role="img"
      aria-label="First Event mascot"
      className="animate-mascot-jump overflow-visible"
    >
      <defs>
        <radialGradient id="tsFirstEvent" cx="30%" cy="20%" r="88%">
          <stop offset="0%" stopColor="#ffd9a0" />
          <stop offset="45%" stopColor="#f2953c" />
          <stop offset="100%" stopColor="#b4520a" />
        </radialGradient>
      </defs>

      <circle
        cx="85"
        cy="90"
        r="76"
        fill="none"
        stroke="#ffd9a0"
        strokeWidth="1.6"
        strokeDasharray="3 5"
        opacity="0.5"
        className="animate-ring-spin"
        style={{
          transformBox: "view-box",
          transformOrigin: "85px 90px",
          animationDuration: "14s",
        }}
      />

      <circle cx="20" cy="30" r="4" fill="#f3b8c4" />
      <circle cx="146" cy="40" r="3.4" fill="#a9c4a0" />
      <circle cx="150" cy="120" r="3.4" fill="#8fb6d9" />

      <path
        d="M85 26 C114 24 132 50 128 80 C142 88 138 112 118 118 C120 138 96 150 82 140 C62 148 42 130 50 112 C32 108 30 82 50 76 C46 50 64 28 85 26Z"
        fill="url(#tsFirstEvent)"
      />

      <path
        d="M60 86 Q64 80 68 86"
        fill="none"
        stroke="#161213"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="100" cy="84" r="8" fill="#161213" />
      <circle cx="103" cy="80" r="2.4" fill="#fff" />
      <path
        d="M62 104 Q85 118 104 102"
        fill="none"
        stroke="#161213"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <rect
        x="100"
        y="86"
        width="34"
        height="22"
        rx="4"
        fill="#fff"
        stroke="#161213"
        strokeWidth="1.8"
        transform="rotate(-14 116 100)"
      />
      <line
        x1="117"
        y1="86"
        x2="117"
        y2="108"
        stroke="#161213"
        strokeWidth="1"
        strokeDasharray="2 2"
        transform="rotate(-14 116 100)"
      />
    </svg>
  );
}
