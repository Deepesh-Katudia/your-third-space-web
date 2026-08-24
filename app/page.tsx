import { City } from "@/components/sections/city";
import { DownloadReveal } from "@/components/sections/download-reveal";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HostBand } from "@/components/sections/host-band";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Rewards } from "@/components/sections/rewards";
import { Stats } from "@/components/sections/stats";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <Rewards />
        <City />
        {siteConfig.showHostBand ? <HostBand /> : null}
        <DownloadReveal />
      </main>
      <SiteFooter />
    </>
  );
}
