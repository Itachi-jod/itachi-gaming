
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, Facebook, Instagram, Twitter, Linkedin, Users } from 'lucide-react';

const SocialSection = () => {
  const socialPlatforms = [
    {
      name: "YouTube",
      icon: Youtube,
      description: "Watch epic gaming content, tutorials, and live streams",
      followers: "2.5M",
      bgGradient: "from-red-600 to-red-700",
      content: ["Gaming Tutorials", "Live Streams", "Epic Moments"]
    },
    {
      name: "Facebook",
      icon: Facebook,
      description: "Join our community discussions and events",
      followers: "1.8M",
      bgGradient: "from-blue-600 to-blue-700",
      content: ["Community Posts", "Event Updates", "Gaming News"]
    },
    {
      name: "Instagram",
      icon: Instagram,
      description: "Behind the scenes content and gaming highlights",
      followers: "3.2M",
      bgGradient: "from-purple-600 to-pink-600",
      content: ["Screenshots", "Stories", "Reels"]
    },
    {
      name: "Twitter",
      icon: Twitter,
      description: "Real-time updates and community engagement",
      followers: "1.5M",
      bgGradient: "from-sky-500 to-blue-600",
      content: ["Quick Updates", "Tournaments", "Community"]
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      description: "Professional gaming industry insights",
      followers: "500K",
      bgGradient: "from-blue-700 to-blue-800",
      content: ["Industry News", "Career Tips", "Networking"]
    },
    {
      name: "Discord",
      icon: Users,
      description: "Real-time chat with fellow gamers",
      followers: "800K",
      bgGradient: "from-indigo-600 to-purple-600",
      content: ["Voice Chat", "Gaming Groups", "Events"]
    }
  ];

  return (
    <section id="social" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Social Hub</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with millions of gamers worldwide. Follow us across all platforms for the latest updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPlatforms.map((platform, index) => (
            <Card key={index} className="bg-card/50 border-gradient overflow-hidden social-pulse hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${platform.bgGradient}`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient">{platform.followers}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                <p className="text-muted-foreground mb-4">{platform.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-2">Content Type:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.content.map((type, typeIndex) => (
                      <span key={typeIndex} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className={`w-full bg-gradient-to-r ${platform.bgGradient} text-white font-semibold hover:scale-105 transition-transform duration-300`}>
                  Follow on {platform.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center bg-card/30 p-6 rounded-lg ninja-glow">
            <div className="text-3xl font-bold text-gradient mb-2">10M+</div>
            <div className="text-muted-foreground">Total Followers</div>
          </div>
          <div className="text-center bg-card/30 p-6 rounded-lg ninja-glow">
            <div className="text-3xl font-bold text-gradient mb-2">500K+</div>
            <div className="text-muted-foreground">Monthly Engagement</div>
          </div>
          <div className="text-center bg-card/30 p-6 rounded-lg ninja-glow">
            <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-muted-foreground">Live Support</div>
          </div>
          <div className="text-center bg-card/30 p-6 rounded-lg ninja-glow">
            <div className="text-3xl font-bold text-gradient mb-2">150+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
