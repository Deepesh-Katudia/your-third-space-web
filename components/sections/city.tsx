import { boroughs, categories } from "@/lib/site-config";

export function City() {
  return (
    <section id="nyc" className="shell pb-[88px] pt-24">
      <p className="eyebrow text-rust">New York City</p>
      <h2 className="mt-3.5 max-w-[820px] font-display text-display-md font-normal uppercase leading-[0.92] tracking-[0.01em]">
        Five boroughs. Ten kinds of things to do. One city to start.
      </h2>
      <p className="mt-5 max-w-[520px] text-pretty text-base leading-[1.6] text-taupe">
        Your Third Space is New York only for now. Set your borough and the feed
        becomes the events you can actually get to today.
      </p>

      <ul className="mt-10 flex flex-wrap gap-2.5">
        {boroughs.map((borough) => (
          <li
            key={borough.name}
            className={`rounded-full px-[22px] pb-1.5 pt-2 font-display text-3xl uppercase tracking-[0.04em] ${
              borough.selected
                ? "bg-ink text-peach"
                : "border border-ink/30 text-ink"
            }`}
          >
            {borough.name}
          </li>
        ))}
      </ul>

      <dl className="mt-9 grid grid-cols-2 gap-3 border-t border-dashed border-ink/25 pt-9 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col gap-[5px]">
            <dt className="font-display text-[22px] uppercase tracking-[0.03em]">
              {category.name}
            </dt>
            <dd className="text-[12.5px] leading-[1.4] text-taupe">
              {category.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
