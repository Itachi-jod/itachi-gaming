
import { Button } from '@/components/ui/button';
import { Code, Users, Trophy } from 'lucide-react';

const HeroSection = () => {
  const handleStartCoding = () => {
    const codingSection = document.getElementById('coding');
    if (codingSection) {
      codingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCommunity = () => {
    const socialSection = document.getElementById('social');
    if (socialSection) {
      socialSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl float-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-2xl float-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">Code</span>
            <br />
            <span className="text-foreground">Nexus</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master the art of programming. Connect with developers worldwide and build the future with code.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2 bg-card/50 px-6 py-3 rounded-lg ninja-glow">
              <Code className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold">500+ Tutorials</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 px-6 py-3 rounded-lg ninja-glow">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold">100K+ Developers</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 px-6 py-3 rounded-lg ninja-glow">
              <Trophy className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold">Daily Challenges</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleStartCoding} className="flame-gradient text-white font-bold px-8 py-4 text-lg rounded-lg ninja-glow hover:scale-105 transition-transform duration-300">
              Start Coding
            </Button>
            <Button onClick={handleExploreCommunity} variant="outline" className="border-gradient text-foreground font-bold px-8 py-4 text-lg rounded-lg hover:bg-card/50 transition-all duration-300">
              Join Community
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
