import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import ChallengePauseSection from "@/components/ChallengePauseSection";
import WatchLearnSpotlight from "@/components/WatchLearnSpotlight";
import FeaturedCollectionSection from "@/components/FeaturedCollectionSection";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import CommunitySection from "@/components/CommunitySection";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-editorial-white selection:bg-soft-signal-green selection:text-deep-green">
      <ScrollProgress />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <EcosystemSection />
        <ChallengePauseSection />
        <WatchLearnSpotlight />
        <FeaturedCollectionSection />
        <AppShowcaseSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
