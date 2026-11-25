import { DesktopHeader } from "@/components/site/DesktopHeader";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Interlude } from "@/components/site/Interlude";
import { Join } from "@/components/site/Join";
import { MobileHeader } from "@/components/site/MobileHeader";
import { Pain } from "@/components/site/Pain";
import { Pricing } from "@/components/site/Pricing";
import { StickyJoin } from "@/components/site/StickyJoin";
import { Timeline } from "@/components/site/Timeline";
import { Trust } from "@/components/site/Trust";
import { WhyTiera } from "@/components/site/WhyTiera";

/**
 * Home page, built from the "Tiera Brand Identity" design canvas
 * (Website: home page + Website: mobile artboards).
 * Desktop hero (3D phone) shows from 860px; below that, the mobile hero.
 */
export default function Home() {
  return (
    <div className="t-site" style={{ width: "100%", color: "#F4F2EC", background: "#050A0B", overflowX: "clip" }}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#F4F2EC] focus:px-4 focus:py-2 focus:text-[#050A0B]"
      >
        Skip to content
      </a>
      <div className="hidden min-[860px]:block">
        <DesktopHeader />
      </div>
      <div className="min-[860px]:hidden">
        <MobileHeader />
      </div>
      <main id="main">
        <Pain />
        <Interlude />
        <HowItWorks />
        <WhyTiera />
        <Timeline />
        <Trust />
        <Pricing />
        <FAQ />
        <Join />
      </main>
      <Footer />
      <div className="md:hidden">
        <StickyJoin />
      </div>
    </div>
  );
}
