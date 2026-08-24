const bubbleBase = "max-w-[80%] px-[11px] py-2 text-[10.5px] leading-[1.35]";

export function ChatScreen() {
  return (
    <>
      <div className="bg-[linear-gradient(180deg,#f3b27a,#f7c296)] px-3.5 pb-2.5 pt-6">
        <div className="font-display text-[17px] tracking-[0.03em]">
          CERAMICS NIGHT
        </div>
        <div className="mt-[3px] font-mono text-[8px] uppercase tracking-[0.1em] text-taupe">
          Group chat · 14 going
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-[9px] bg-cream/[0.88] p-3">
        <div
          className={`${bubbleBase} self-start rounded-[14px_14px_14px_4px] border border-ink/[0.12] bg-peach text-ink`}
        >
          Anyone want to grab food before? I&apos;m walking from Bedford
        </div>

        <div
          className={`${bubbleBase} self-end rounded-[14px_14px_4px_14px] bg-ink text-peach`}
        >
          Yes, meeting by the front at 6:40
        </div>

        <div className="rounded-[10px] border border-dashed border-ink/30 bg-peach/70 px-[11px] py-[9px]">
          <div className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-rust">
            Announcement · Host
          </div>
          <div className="mt-1 text-[10.5px] leading-[1.35] text-ink">
            Doors are open early tonight. Come whenever.
          </div>
        </div>

        <div
          className={`${bubbleBase} self-start rounded-[14px_14px_14px_4px] border border-ink/[0.12] bg-peach text-ink`}
        >
          Perfect, see you all there
        </div>
      </div>
    </>
  );
}
