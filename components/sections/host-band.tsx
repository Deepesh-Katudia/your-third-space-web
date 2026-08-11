import { hostFeatures } from "@/lib/site-config";

export function HostBand() {
  return (
    <section id="host" className="border-y border-ink/[0.14] bg-peach">
      <div className="shell flex flex-wrap items-center gap-14 pb-[88px] pt-20">
        <div className="min-w-0 flex-[1_1_420px]">
          <p className="eyebrow text-rust">For venues &amp; organisers</p>
          <h2 className="mt-3.5 font-display text-display-sm font-normal uppercase leading-[0.94] tracking-[0.01em]">
            Fill the room. Run the room.
          </h2>
          <p className="mt-4.5 max-w-[460px] text-pretty text-base leading-[1.6] text-taupe">
            Hosters get their own side of the app: post an event, watch the
            guest list build, message everyone who registered, and broadcast an
            announcement that lands on the event page and in the chat at once.
          </p>
          <a
            href="#get"
            className="mt-7 inline-block rounded-full bg-ink px-7 py-[15px] font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-peach transition-colors hover:bg-rust"
          >
            Become a host
          </a>
        </div>

        <ul className="grid min-w-0 flex-[1_1_380px] grid-cols-1 gap-3.5 sm:grid-cols-2">
          {hostFeatures.map((feature) => (
            <li
              key={feature.title}
              className="rounded-[14px] border border-ink/[0.14] bg-cream p-5"
            >
              <h3 className="font-display text-[21px] uppercase tracking-[0.03em]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-taupe">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
