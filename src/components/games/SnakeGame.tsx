
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';

interface Position {
  x: number;
  y: number;
}

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 5, y: 5 };

const SnakeGame = () => {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Position>({ x: 0, y: -1 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection({ x: 0, y: -1 });
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
  };

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    setFood(newFood);
  }, []);

  const moveSnake = useCallback(() => {
    if (!isPlaying || gameOver) return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };
      
      head.x += direction.x;
      head.y += direction.y;

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        setIsPlaying(false);
        return currentSnake;
      }

      // Check self collision
      for (const segment of newSnake) {
        if (head.x === segment.x && head.y === segment.y) {
          setGameOver(true);
          setIsPlaying(false);
          return currentSnake;
        }
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        generateFood();
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, isPlaying, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPlaying]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-card/50 rounded-lg border-gradient">
      <h3 className="text-2xl font-bold text-gradient">Ninja Snake</h3>
      <div className="text-lg font-semibold">Score: {score}</div>
      
      <div 
        className="grid gap-1 p-4 bg-ninja-black rounded-lg border border-primary/30"
        style={{ 
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          width: '400px',
          height: '400px'
        }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
          const x = index % GRID_SIZE;
          const y = Math.floor(index / GRID_SIZE);
          const isSnake = snake.some(segment => segment.x === x && segment.y === y);
          const isFood = food.x === x && food.y === y;
          const isHead = snake[0]?.x === x && snake[0]?.y === y;

          return (
            <div
              key={index}
              className={`w-full h-full rounded-sm ${
                isHead ? 'bg-primary ninja-glow' :
                isSnake ? 'bg-primary/70' :
                isFood ? 'bg-accent animate-pulse' :
                'bg-muted/20'
              }`}
            />
          );
        })}
      </div>

      <div className="text-center space-y-2">
        <div className="text-sm text-muted-foreground">
          Use arrow keys to control the snake
        </div>
        
        {gameOver && (
          <div className="text-destructive font-bold">Game Over!</div>
        )}
        
        <Button 
          onClick={resetGame}
          className="flame-gradient text-white font-semibold px-6 py-2 hover:scale-105 transition-transform duration-300"
        >
          {isPlaying ? 'Restart' : 'Start Game'}
        </Button>
      </div>
    </div>
  );
};

export default SnakeGame;
