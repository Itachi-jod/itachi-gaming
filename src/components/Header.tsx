
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleJoinNow = () => {
    alert('Welcome to Code Nexus! Registration feature coming soon!');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Code className="w-8 h-8 text-primary sharingan-spin" />
              <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full blur-md"></div>
            </div>
            <h1 className="text-2xl font-bold text-gradient">Code Nexus</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('coding')} className="text-foreground hover:text-primary transition-colors duration-300">Learn</button>
            <button onClick={() => scrollToSection('social')} className="text-foreground hover:text-primary transition-colors duration-300">Community</button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors duration-300">Projects</button>
            <button onClick={() => scrollToSection('challenges')} className="text-foreground hover:text-primary transition-colors duration-300">Challenges</button>
            <Button onClick={handleJoinNow} className="flame-gradient text-white font-semibold px-6 py-2 rounded-lg ninja-glow hover:scale-105 transition-transform duration-300">
              Join Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              <button onClick={() => scrollToSection('coding')} className="text-foreground hover:text-primary transition-colors duration-300 text-left">Learn</button>
              <button onClick={() => scrollToSection('social')} className="text-foreground hover:text-primary transition-colors duration-300 text-left">Community</button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors duration-300 text-left">Projects</button>
              <button onClick={() => scrollToSection('challenges')} className="text-foreground hover:text-primary transition-colors duration-300 text-left">Challenges</button>
              <Button onClick={handleJoinNow} className="flame-gradient text-white font-semibold w-full">
                Join Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
