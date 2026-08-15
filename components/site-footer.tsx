import { Logo } from "@/components/ui/logo";
import { footerColumns } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-peach">
      <div className="shell flex flex-wrap justify-between gap-10 pb-11 pt-14">
        <div className="max-w-[280px]">
          <Logo size={32} wordmarkSize={21} />
          <p className="mt-3.5 font-mono text-[10px] uppercase leading-[1.7] tracking-[0.12em] text-peach/60">
            Your third space awaits you.
            <br />
            Made for New York.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-16 gap-y-10">
          {footerColumns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-[11px]">
              <h2 className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.1em] text-peach/45">
                {column.heading}
              </h2>
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-peach transition-colors hover:text-apricot"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-peach/[0.18]">
        <div className="shell py-[18px] font-mono text-[9.5px] uppercase tracking-[0.12em] text-peach/50">
          © {new Date().getFullYear()} Your Third Space · New York, NY
        </div>
      </div>
    </footer>
  );
}
