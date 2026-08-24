const people = [
  { initials: "MJ", name: "Maya J.", met: "Ceramics Night", mutual: true },
  { initials: "TR", name: "Tomas R.", met: "Open Mic · Ridgewood", mutual: true },
  { initials: "SB", name: "Sana B.", met: "Supper Club · Astoria", mutual: false },
] as const;

export function ConnectionsScreen() {
  return (
    <>
      <div className="h-[34px] shrink-0" />

      <div className="flex-1 overflow-hidden px-[15px] pt-1.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-olive text-[13px] font-bold text-cream">
            AR
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-display text-[19px] leading-none tracking-[0.02em]">
              ANNA R.
            </div>
            <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-rust">
              Insider · 1,540 pts
            </div>
          </div>
        </div>

        <div className="mt-3.5 flex gap-2">
          <Stat value="24" label="Following" />
          <Stat value="31" label="Followers" />
          <Stat value="9" label="Events" />
        </div>

        <div className="mt-4 flex items-baseline justify-between">
          <div className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.14em] text-taupe">
            People you met
          </div>
          <div className="font-mono text-[8px] uppercase tracking-[0.08em] text-rust">
            See all
          </div>
        </div>

        {people.map((person) => (
          <div
            key={person.initials}
            className="card mt-2.5 flex items-center gap-2.5 px-[13px] py-[10px]"
          >
            <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-rust text-[10px] font-bold text-peach">
              {person.initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-[14px] tracking-[0.02em]">
                {person.name.toUpperCase()}
              </div>
              <div className="mt-px truncate font-mono text-[8px] uppercase tracking-[0.06em] text-taupe">
                Met at {person.met}
              </div>
            </div>
            <div
              className={`shrink-0 rounded-full px-[11px] py-[5px] font-mono text-[8px] font-semibold uppercase tracking-[0.08em] ${
                person.mutual
                  ? "bg-ink text-peach"
                  : "border border-ink/30 text-taupe"
              }`}
            >
              {person.mutual ? "Connected" : "Follow"}
            </div>
          </div>
        ))}
      </div>

      <div className="flex shrink-0 justify-around border-t border-ink/[0.16] bg-peach px-2 pb-4 pt-2.5 font-mono text-[8px] uppercase tracking-[0.06em]">
        <div className="text-taupe">Discover</div>
        <div className="text-taupe">My Events</div>
        <div className="text-taupe">Chats</div>
        <div className="font-semibold text-rust">Profile</div>
      </div>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card flex-1 px-2 py-[9px] text-center">
      <div className="font-display text-[20px] leading-none text-rust">
        {value}
      </div>
      <div className="mt-1 font-mono text-[7.5px] uppercase tracking-[0.1em] text-taupe">
        {label}
      </div>
    </div>
  );
}
