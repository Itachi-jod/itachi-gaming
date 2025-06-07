
import { Button } from '@/components/ui/button';
import { Gamepad, Youtube, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ninja-black border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad className="w-8 h-8 text-primary sharingan-spin" />
              <h3 className="text-2xl font-bold text-gradient">Itachi Gaming Nexus</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The ultimate gaming destination crafted by Lord Itachi. Where legends are born and communities thrive.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="border-primary/50 hover:bg-primary/20">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary/50 hover:bg-primary/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary/50 hover:bg-primary/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary/50 hover:bg-primary/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary/50 hover:bg-primary/20">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#games" className="text-muted-foreground hover:text-primary transition-colors">Games</a></li>
              <li><a href="#social" className="text-muted-foreground hover:text-primary transition-colors">Social Media</a></li>
              <li><a href="#tournaments" className="text-muted-foreground hover:text-primary transition-colors">Tournaments</a></li>
              <li><a href="#community" className="text-muted-foreground hover:text-primary transition-colors">Community</a></li>
              <li><a href="#support" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Itachi Gaming Nexus. All rights reserved. Crafted with passion by Lord Itachi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
