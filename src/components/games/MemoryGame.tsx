
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface Card {
  id: number;
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const symbols = ['🔥', '⚡', '🗡️', '🥷', '🌙', '⭐', '💎', '🎯'];

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const createCards = () => {
    const gameCards: Card[] = [];
    symbols.forEach((symbol, index) => {
      // Add two cards for each symbol
      gameCards.push(
        { id: index * 2, symbol, isFlipped: false, isMatched: false },
        { id: index * 2 + 1, symbol, isFlipped: false, isMatched: false }
      );
    });
    // Shuffle the cards
    return gameCards.sort(() => Math.random() - 0.5);
  };

  const initGame = () => {
    setCards(createCards());
    setFlippedCards([]);
    setMoves(0);
    setGameWon(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

      if (firstCard && secondCard && firstCard.symbol === secondCard.symbol) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isMatched: true }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      setGameWon(true);
    }
  }, [cards]);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    
    const card = cards.find(c => c.id === id);
    if (!card || card.isFlipped || card.isMatched) return;

    setCards(prev => prev.map(c => 
      c.id === id ? { ...c, isFlipped: true } : c
    ));
    setFlippedCards(prev => [...prev, id]);
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-card/50 rounded-lg border-gradient">
      <h3 className="text-2xl font-bold text-gradient">Ninja Memory</h3>
      
      <div className="flex gap-6 text-lg">
        <div>Moves: <span className="text-gradient font-bold">{moves}</span></div>
        {gameWon && (
          <div className="text-gradient font-bold">🎉 You Won!</div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-3">
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`w-16 h-16 rounded-lg text-2xl font-bold transition-all duration-300 hover:scale-105 ${
              card.isFlipped || card.isMatched
                ? 'bg-gradient-to-r from-primary to-accent text-white ninja-glow'
                : 'bg-card border-2 border-primary/30 hover:bg-card/70'
            }`}
          >
            {card.isFlipped || card.isMatched ? card.symbol : '?'}
          </button>
        ))}
      </div>

      <Button 
        onClick={initGame}
        className="flame-gradient text-white font-semibold px-6 py-2 hover:scale-105 transition-transform duration-300"
      >
        New Game
      </Button>
    </div>
  );
};

export default MemoryGame;
