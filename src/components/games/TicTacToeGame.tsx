
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Player = 'X' | 'O' | null;

const TicTacToeGame = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);

  const calculateWinner = (squares: Player[]): Player | 'Draw' | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    if (squares.every(square => square !== null)) {
      return 'Draw';
    }

    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setWinner(calculateWinner(newBoard));
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const renderSquare = (index: number) => (
    <button
      key={index}
      className="w-20 h-20 bg-card border-2 border-primary/30 rounded-lg text-3xl font-bold text-gradient hover:bg-card/70 transition-all duration-300 hover:scale-105"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-card/50 rounded-lg border-gradient">
      <h3 className="text-2xl font-bold text-gradient">Ninja Tic Tac Toe</h3>
      
      <div className="text-lg font-semibold">
        {winner ? (
          winner === 'Draw' ? (
            <span className="text-muted-foreground">It's a Draw!</span>
          ) : (
            <span className="text-gradient">Player {winner} Wins!</span>
          )
        ) : (
          <span>Next Player: <span className="text-gradient">{isXNext ? 'X' : 'O'}</span></span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, index) => renderSquare(index))}
      </div>

      <Button 
        onClick={resetGame}
        className="flame-gradient text-white font-semibold px-6 py-2 hover:scale-105 transition-transform duration-300"
      >
        New Game
      </Button>
    </div>
  );
};

export default TicTacToeGame;
