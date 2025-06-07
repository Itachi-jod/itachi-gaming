import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad } from 'lucide-react';

const GamesSection = () => {
  const gameCategories = [
    {
      title: "Action RPG",
      description: "Epic adventures await in immersive worlds",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      games: ["Ninja Chronicles", "Shadow Realm", "Blood Moon Rising"]
    },
    {
      title: "Battle Royale",
      description: "Last ninja standing wins the ultimate prize",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      games: ["Itachi's Arena", "Clan Wars", "Forbidden Jutsu"]
    },
    {
      title: "Strategy",
      description: "Master the art of tactical warfare",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      games: ["Village Builder", "Ninja Empire", "War of Clans"]
    },
    {
      title: "Racing",
      description: "Speed through mystical landscapes",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      games: ["Shadow Racer", "Lightning Speed", "Midnight Rush"]
    },
    {
      title: "Puzzle",
      description: "Challenge your mind with ancient riddles",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      games: ["Mind Maze", "Crystal Quest", "Ancient Symbols"]
    },
    {
      title: "Sports",
      description: "Compete in supernatural tournaments",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
      games: ["Ninja Soccer", "Thunder Ball", "Sky Tournament"]
    }
  ];

  const scrollToPlayableGames = () => {
    const playableSection = document.getElementById('playable-games');
    if (playableSection) {
      playableSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Game Library</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover an endless collection of games across every genre. From intense battles to peaceful puzzles.
          </p>
        </div>

        {/* Playable Games CTA */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-lg border-gradient mb-8">
            <h3 className="text-3xl font-bold text-gradient mb-4">🎮 Play Right Now!</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Don't just browse - play actual games! We have ninja-themed games ready for you.
            </p>
            <Button 
              onClick={scrollToPlayableGames}
              className="flame-gradient text-white font-bold px-8 py-4 text-lg ninja-glow hover:scale-105 transition-transform duration-300"
            >
              Play Games Now
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 border-gradient game-card-hover overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ninja-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Gamepad className="w-6 h-6 text-primary glow-pulse" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gradient">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Featured Games:</h4>
                  <ul className="space-y-1">
                    {category.games.map((game, gameIndex) => (
                      <li key={gameIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {game}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full flame-gradient text-white font-semibold hover:scale-105 transition-transform duration-300">
                  Explore Games
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="flame-gradient text-white font-bold px-8 py-4 text-lg ninja-glow hover:scale-105 transition-transform duration-300">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
