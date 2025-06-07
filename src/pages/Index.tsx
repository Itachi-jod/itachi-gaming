
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GamesSection from '@/components/GamesSection';
import PlayableGames from '@/components/PlayableGames';
import SocialSection from '@/components/SocialSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <GamesSection />
      <div id="playable-games">
        <PlayableGames />
      </div>
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
