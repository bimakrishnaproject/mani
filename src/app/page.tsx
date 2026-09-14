import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import ChallengeSection from "@/components/ChallengeSection";
import FeaturedCollectionSection from "@/components/FeaturedCollectionSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import WatchLearnSpotlight from "@/components/WatchLearnSpotlight";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunitySection from "@/components/CommunitySection";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-editorial-white selection:bg-[#0E2E1E] selection:text-white">
      <ScrollProgress />
      <Header />
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: How Mani Helps */}
        <EcosystemSection />

        {/* Section 3: The Challenge (Restored) */}
        <ChallengeSection />

        {/* Section 4: Featured Collection & Future Collections */}
        <FeaturedCollectionSection />

        {/* Section 5: Mani App */}
        <AppShowcaseSection />

        {/* Section 6: Watch & Learn */}
        <WatchLearnSpotlight />

        {/* Section 7: What Makes Us Different */}
        <DifferentiatorsSection />

        {/* Section 8: Real Feedback */}
        <TestimonialsSection />

        {/* Section 9: There's More To mani */}
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
