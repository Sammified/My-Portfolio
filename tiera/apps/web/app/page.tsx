import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Nav } from "@/components/Nav";
import { Pain } from "@/components/Pain";
import { Pricing } from "@/components/Pricing";
import { SignupForm } from "@/components/SignupForm";
import { StickyCTA } from "@/components/StickyCTA";
import { Timeline } from "@/components/Timeline";
import { Trust } from "@/components/Trust";
import { WhyTiera } from "@/components/WhyTiera";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-linen focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Pain />
        <HowItWorks />
        <WhyTiera />
        <Timeline />
        <Trust />
        <Pricing />
        <FAQ />
        <SignupForm />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
