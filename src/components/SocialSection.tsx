
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, Users, Code } from 'lucide-react';

const SocialSection = () => {
  const codingPlatforms = [
    {
      name: "GitHub",
      icon: Code,
      description: "Collaborate on code repositories and open source projects",
      type: "Code Repository",
      bgGradient: "from-gray-700 to-gray-900",
      content: ["Open Source", "Repositories", "Collaboration"]
    },
    {
      name: "Stack Overflow",
      icon: Users,
      description: "Get help with coding problems and share knowledge",
      type: "Q&A Platform",
      bgGradient: "from-orange-600 to-orange-700",
      content: ["Questions", "Answers", "Community"]
    },
    {
      name: "YouTube",
      icon: Youtube,
      description: "Watch coding tutorials and programming courses",
      type: "Video Learning",
      bgGradient: "from-red-600 to-red-700",
      content: ["Tutorials", "Live Coding", "Tech Talks"]
    },
    {
      name: "Discord",
      icon: Users,
      description: "Join coding communities and chat with developers",
      type: "Community",
      bgGradient: "from-indigo-600 to-purple-600",
      content: ["Voice Chat", "Code Review", "Pair Programming"]
    },
    {
      name: "LinkedIn",
      icon: Users,
      description: "Network with professionals and share achievements",
      type: "Professional Network",
      bgGradient: "from-blue-700 to-blue-800",
      content: ["Networking", "Job Opportunities", "Industry News"]
    },
    {
      name: "Reddit",
      icon: Users,
      description: "Discuss programming topics in developer subreddits",
      type: "Discussion Forum",
      bgGradient: "from-orange-500 to-red-600",
      content: ["Programming", "Career Advice", "Tech News"]
    }
  ];

  return (
    <section id="social" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Developer Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with developers worldwide. Share code, learn together, and build amazing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {codingPlatforms.map((platform, index) => (
            <Card key={index} className="bg-card/50 border-gradient overflow-hidden social-pulse hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${platform.bgGradient}`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gradient">{platform.type}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                <p className="text-muted-foreground mb-4">{platform.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.content.map((type, typeIndex) => (
                      <span key={typeIndex} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className={`w-full bg-gradient-to-r ${platform.bgGradient} text-white font-semibold hover:scale-105 transition-transform duration-300`}>
                  Join {platform.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coding Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center bg-card/30 p-6 rounded-lg ninja-glow">
            <div className="text-3xl font-bold text-gradient mb-2">100K+</div>
            <div className="text-muted-foreground">Active Developers</div>
          </div>
          <div className="text-center bg-card/30 p-6 rounded-lg ninja-glow">
            <div className="text-3xl font-bold text-gradient mb-2">50K+</div>
            <div className="text-muted-foreground">Code Repositories</div>
          </div>
          <div className="text-center bg-card/30 p-6 rounded-lg ninja-glow">
            <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-muted-foreground">Community Support</div>
          </div>
          <div className="text-center bg-card/30 p-6 rounded-lg ninja-glow">
            <div className="text-3xl font-bold text-gradient mb-2">200+</div>
            <div className="text-muted-foreground">Programming Languages</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
