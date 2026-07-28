import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ThreeWaysSection from "@/components/ThreeWaysSection";
import ChallengePauseSection from "@/components/ChallengePauseSection";
import FeaturedCollectionSection from "@/components/FeaturedCollectionSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-editorial-white selection:bg-soft-signal-green selection:text-deep-green">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ThreeWaysSection />
        <ChallengePauseSection />
        <FeaturedCollectionSection />
        <AppShowcaseSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
