const metaRow =
  "mt-[7px] flex flex-wrap items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.04em]";

export function DiscoverScreen() {
  return (
    <>
      <div className="h-[34px] shrink-0" />

      <div className="flex-1 overflow-hidden px-[15px] pt-1.5">
        <div className="flex items-start justify-between gap-2.5">
          <div className="max-w-[150px] font-display text-[20px] leading-[1.02] tracking-[0.02em]">
            LET&apos;S FIND YOUR THIRD SPACE FOR TODAY
          </div>
          <div className="flex flex-col items-end gap-[7px]">
            <div className="rounded-[20px] border border-ink/30 bg-white/25 px-[9px] py-1 font-mono text-[8.5px] uppercase tracking-[0.06em]">
              All of NYC
            </div>
            <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-olive text-[9.5px] font-bold text-cream">
              AR
            </div>
          </div>
        </div>

        <div className="mt-3 flex gap-[7px]">
          <div className="flex-1 rounded-[20px] border border-ink/20 bg-white/35 px-3 py-2 font-mono text-[8.5px] uppercase tracking-[0.05em] text-taupe">
            Search events, venues…
          </div>
          <div className="flex h-8 w-8 items-center justify-center gap-0.5 rounded-[10px] border border-ink/20 bg-white/35">
            <span className="block h-[11px] w-0.5 bg-taupe" />
            <span className="block h-[7px] w-0.5 bg-taupe" />
            <span className="block h-[13px] w-0.5 bg-taupe" />
          </div>
        </div>

        {/* Featured event, styled as a tear-off ticket */}
        <div className="card relative mt-3.5 overflow-hidden">
          <div className="h-[88px] bg-[linear-gradient(135deg,#8a3a17,#4e1f0c)]" />
          <div className="absolute -left-[7px] top-[88px] h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#f5bc8c]" />
          <div className="absolute -right-[7px] top-[88px] h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#f5bc8c]" />
          <div className="mx-[15px] border-t border-dashed border-ink/20" />

          <div className="flex gap-[11px] px-[13px] py-[11px]">
            <TicketDate day="18" month="Jul" />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="font-display text-[15px] tracking-[0.02em]">
                  CERAMICS NIGHT
                </div>
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-apricot text-[11px] font-bold text-rust">
                  →
                </div>
              </div>
              <div className="mt-[3px] text-[10.5px] text-taupe">
                Clay Studio · Williamsburg
              </div>
              <div className={metaRow}>
                <span>Sat, 7:00 PM</span>
                <span className="text-ink/35">/</span>
                <span className="font-semibold text-olive">Make</span>
                <span className="text-ink/35">/</span>
                <span>Free</span>
              </div>
              <div className="mt-1.5 text-[10px] text-taupe">
                <b className="text-ink">14</b> going
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3 flex gap-[11px] px-[13px] py-[11px]">
          <TicketDate day="21" month="Jul" />
          <div className="min-w-0 flex-1">
            <div className="font-display text-[15px] tracking-[0.02em]">
              SUNSET SOUND BATH
            </div>
            <div className="mt-[3px] text-[10.5px] text-taupe">
              Rooftop · Bushwick
            </div>
            <div className={metaRow}>
              <span>Sun, 6:30 PM</span>
              <span className="text-ink/35">/</span>
              <span className="font-semibold text-olive">Slow Down</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 justify-around border-t border-ink/[0.16] bg-peach px-2 pb-4 pt-2.5 font-mono text-[8px] uppercase tracking-[0.06em]">
        <div className="font-semibold text-rust">Discover</div>
        <div className="text-taupe">My Events</div>
        <div className="text-taupe">Chats</div>
        <div className="text-taupe">Profile</div>
      </div>
    </>
  );
}

function TicketDate({ day, month }: { day: string; month: string }) {
  return (
    <div className="w-11 shrink-0 border-r border-dashed border-ink/20 pr-2.5 text-center">
      <div className="font-display text-[23px] leading-none text-rust">
        {day}
      </div>
      <div className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-taupe">
        {month}
      </div>
    </div>
  );
}
