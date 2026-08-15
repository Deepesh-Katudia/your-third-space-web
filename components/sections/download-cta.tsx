import { StoreButton } from "@/components/ui/store-button";
import { siteConfig } from "@/lib/site-config";

export function DownloadCta() {
  return (
    <section id="get" className="bg-sunset relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute left-[20%] top-[-20%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,#fff1dc_0%,rgba(255,241,220,0)_70%)] [animation-duration:12s]" />
        <div className="animate-drift absolute bottom-[-30%] right-[12%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#ec8a4e_0%,rgba(236,138,78,0)_70%)] [animation-delay:1.2s] [animation-duration:15s]" />
      </div>

      <div className="shell relative z-[2] flex flex-col items-center pb-28 pt-26 text-center">
        <h2 className="max-w-[900px] font-display text-display-lg font-normal uppercase leading-[0.9] tracking-[0.01em]">
          Something is happening today. Go.
        </h2>
        <p className="mt-5 max-w-[460px] text-pretty text-[17px] leading-[1.6] text-taupe">
          Free to download. Free to join. Available now on iPhone and Android.
        </p>

        <div className="mt-[34px] flex flex-wrap justify-center gap-3">
          <StoreButton
            href={siteConfig.appStoreHref}
            kicker="Download on the"
            store="APP STORE"
            size="lg"
          />
          <StoreButton
            href={siteConfig.googlePlayHref}
            kicker="Get it on"
            store="GOOGLE PLAY"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
}
