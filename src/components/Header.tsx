
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Gamepad } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Gamepad className="w-8 h-8 text-primary sharingan-spin" />
              <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full blur-md"></div>
            </div>
            <h1 className="text-2xl font-bold text-gradient">Itachi Gaming Nexus</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#games" className="text-foreground hover:text-primary transition-colors duration-300">Games</a>
            <a href="#social" className="text-foreground hover:text-primary transition-colors duration-300">Social</a>
            <a href="#tournaments" className="text-foreground hover:text-primary transition-colors duration-300">Tournaments</a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors duration-300">Community</a>
            <Button className="flame-gradient text-white font-semibold px-6 py-2 rounded-lg ninja-glow hover:scale-105 transition-transform duration-300">
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
              <a href="#games" className="text-foreground hover:text-primary transition-colors duration-300">Games</a>
              <a href="#social" className="text-foreground hover:text-primary transition-colors duration-300">Social</a>
              <a href="#tournaments" className="text-foreground hover:text-primary transition-colors duration-300">Tournaments</a>
              <a href="#community" className="text-foreground hover:text-primary transition-colors duration-300">Community</a>
              <Button className="flame-gradient text-white font-semibold w-full">
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
