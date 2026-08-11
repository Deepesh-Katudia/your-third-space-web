import { stats } from "@/lib/site-config";

/**
 * Dashed rules sit between cells: two columns on small screens (so the first
 * row also needs a bottom rule) and four across from md up.
 */
const cellClass = [
  "border-dashed border-ink/25 py-[30px] pr-6",
  "[&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b [&:nth-child(even)]:pl-6",
  "md:px-6 md:[&:nth-child(-n+2)]:border-b-0",
  "md:[&:not(:last-child)]:border-r md:[&:nth-child(even)]:border-r",
  "md:first:pl-0 md:last:border-r-0 md:last:pr-0",
].join(" ");

export function Stats() {
  return (
    <section className="shell">
      <dl className="grid grid-cols-2 border-b border-dashed border-ink/25 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className={cellClass}>
            <dd className="font-display text-[44px] leading-none text-rust">
              {stat.value}
            </dd>
            <dt className="mt-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-taupe">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
