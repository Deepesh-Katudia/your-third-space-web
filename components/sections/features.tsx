import { features } from "@/lib/site-config";

export function Features() {
  return (
    <section
      id="features"
      className="border-y border-ink/[0.14] bg-apricot"
    >
      <div className="shell pb-24 pt-[88px]">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div>
            <p className="eyebrow text-rust">What&apos;s inside</p>
            <h2 className="mt-3.5 max-w-[620px] font-display text-display-sm font-normal uppercase leading-[0.94] tracking-[0.01em]">
              Everything that happens around the event.
            </h2>
          </div>
          <p className="max-w-[340px] text-pretty text-[15px] leading-[1.55] text-taupe">
            The listing is the easy part. The app is built for the messaging,
            the follow-ups and the people you meet once you&apos;re there.
          </p>
        </div>

        <ul className="mt-13 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.title} className="card p-6">
              <h3 className="font-display text-[25px] uppercase tracking-[0.03em]">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-pretty text-sm leading-[1.55] text-taupe">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
