
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SnakeGame from './games/SnakeGame';
import TicTacToeGame from './games/TicTacToeGame';
import MemoryGame from './games/MemoryGame';
import { Gamepad } from 'lucide-react';

type GameType = 'snake' | 'tictactoe' | 'memory' | null;

const PlayableGames = () => {
  const [activeGame, setActiveGame] = useState<GameType>(null);

  const games = [
    {
      id: 'snake' as const,
      title: 'Ninja Snake',
      description: 'Control the snake and eat food to grow longer. Avoid hitting walls or yourself!',
      difficulty: 'Medium',
      players: '1 Player'
    },
    {
      id: 'tictactoe' as const,
      title: 'Ninja Tic Tac Toe',
      description: 'Classic strategy game. Get three in a row to win!',
      difficulty: 'Easy',
      players: '2 Players'
    },
    {
      id: 'memory' as const,
      title: 'Ninja Memory',
      description: 'Test your memory by matching pairs of cards. Can you find them all?',
      difficulty: 'Medium',
      players: '1 Player'
    }
  ];

  const renderGame = () => {
    switch (activeGame) {
      case 'snake':
        return <SnakeGame />;
      case 'tictactoe':
        return <TicTacToeGame />;
      case 'memory':
        return <MemoryGame />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Playable Games</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Challenge yourself with these ninja-themed games. Test your skills and have fun!
          </p>
        </div>

        {activeGame ? (
          <div className="max-w-2xl mx-auto">
            <div className="mb-6 text-center">
              <Button 
                onClick={() => setActiveGame(null)}
                variant="outline"
                className="border-gradient text-foreground font-semibold hover:bg-card/50"
              >
                ← Back to Games
              </Button>
            </div>
            {renderGame()}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game) => (
              <Card key={game.id} className="bg-card/50 border-gradient game-card-hover overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Gamepad className="w-8 h-8 text-primary glow-pulse" />
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{game.difficulty}</div>
                      <div className="text-xs text-primary">{game.players}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gradient">{game.title}</h3>
                  <p className="text-muted-foreground mb-6">{game.description}</p>

                  <Button 
                    onClick={() => setActiveGame(game.id)}
                    className="w-full flame-gradient text-white font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlayableGames;
