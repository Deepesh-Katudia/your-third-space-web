"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { navLinks, siteConfig } from "@/lib/site-config";

const linkClass =
  "font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-taupe transition-colors hover:text-ink";

const ctaClass =
  "rounded-full bg-ink px-[18px] py-2.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-peach transition-colors hover:bg-rust";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">
      <div className="shell flex items-center justify-between gap-6 py-[22px]">
        <a
          href="#top"
          className="text-ink"
          aria-label={`${siteConfig.name} home`}
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-[30px] md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <a href="#get" className={ctaClass}>
            Get the app
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-ink/30 md:hidden"
        >
          <span
            className={`block h-px w-4 bg-ink transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-4 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-4 bg-ink transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-30 flex flex-col gap-4 border-y border-ink/[0.14] bg-peach px-6 py-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get"
            onClick={() => setOpen(false)}
            className={`${ctaClass} self-start`}
          >
            Get the app
          </a>
        </nav>
      ) : null}
    </header>
  );
}
