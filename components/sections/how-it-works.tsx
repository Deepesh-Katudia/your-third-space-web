import { steps } from "@/lib/site-config";

export function HowItWorks() {
  return (
    <section id="how" className="shell pb-24 pt-[88px]">
      <p className="eyebrow text-rust">How it works</p>
      <h2 className="mt-3.5 max-w-[760px] font-display text-display-sm font-normal uppercase leading-[0.94] tracking-[0.01em]">
        Three taps between you and a room full of people.
      </h2>

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <li
            key={step.number}
            className="card flex flex-col gap-3.5 px-6 pb-7 pt-[26px]"
          >
            <div className="flex items-baseline gap-3 border-b border-dashed border-ink/25 pb-3.5">
              <span className="font-display text-[38px] leading-none text-rust">
                {step.number}
              </span>
              <h3 className="font-display text-2xl uppercase tracking-[0.03em]">
                {step.title}
              </h3>
            </div>
            <p className="text-pretty text-[14.5px] leading-[1.55] text-taupe">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
