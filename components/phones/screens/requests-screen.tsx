const requests = [
  {
    initials: "MJ",
    name: "Maya J.",
    met: "Ceramics Night · Williamsburg",
    message: "Hey! You were on the wheel next to me — are you going Thursday?",
  },
  {
    initials: "DP",
    name: "Devon P.",
    met: "Sunset Sound Bath · Bushwick",
    message: "That was the calmest hour of my week. Same again next month?",
  },
] as const;

export function RequestsScreen() {
  return (
    <>
      <div className="h-[34px] shrink-0" />

      <div className="flex-1 overflow-hidden px-[15px] pt-1.5">
        <div className="font-display text-[20px] leading-[1.02] tracking-[0.02em]">
          MESSAGES
        </div>

        <div className="mt-3 flex gap-[7px]">
          <div className="rounded-[20px] border border-ink/20 bg-white/30 px-[13px] py-[5px] font-mono text-[8.5px] uppercase tracking-[0.06em] text-taupe">
            Chats
          </div>
          <div className="flex items-center gap-1.5 rounded-[20px] bg-ink px-[13px] py-[5px] font-mono text-[8.5px] uppercase tracking-[0.06em] text-peach">
            Requests
            <span className="flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-apricot px-1 text-[8px] font-bold text-ink">
              2
            </span>
          </div>
        </div>

        <p className="mt-3 rounded-[10px] border border-dashed border-ink/25 bg-peach/60 px-[11px] py-[9px] text-[9.5px] leading-[1.45] text-taupe">
          A first message waits here until you accept it. Decline and it
          disappears — they&apos;re never told.
        </p>

        {requests.map((request) => (
          <div key={request.initials} className="card mt-3 px-[13px] py-[11px]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-olive text-[10px] font-bold text-cream">
                {request.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-[14px] tracking-[0.02em]">
                  {request.name.toUpperCase()}
                </div>
                <div className="mt-px truncate font-mono text-[8px] uppercase tracking-[0.06em] text-taupe">
                  Met at {request.met}
                </div>
              </div>
            </div>

            <p className="mt-2.5 text-[10.5px] leading-[1.4] text-ink">
              {request.message}
            </p>

            <div className="mt-2.5 flex gap-1.5">
              <div className="flex-1 rounded-full bg-ink py-[7px] text-center font-mono text-[8.5px] font-semibold uppercase tracking-[0.1em] text-peach">
                Accept
              </div>
              <div className="flex-1 rounded-full border border-ink/30 py-[7px] text-center font-mono text-[8.5px] font-semibold uppercase tracking-[0.1em] text-taupe">
                Decline
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex shrink-0 justify-around border-t border-ink/[0.16] bg-peach px-2 pb-4 pt-2.5 font-mono text-[8px] uppercase tracking-[0.06em]">
        <div className="text-taupe">Discover</div>
        <div className="text-taupe">My Events</div>
        <div className="font-semibold text-rust">Chats</div>
        <div className="text-taupe">Profile</div>
      </div>
    </>
  );
}
