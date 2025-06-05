
import React, { useState, useCallback } from 'react';
import { GameBoard } from './GameBoard';
import { GameStatus } from './GameStatus';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

export type Player = 'X' | 'O' | null;
export type Board = Player[];

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<Player>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);

  const checkWinner = useCallback((board: Board): { winner: Player; line: number[] } => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line };
      }
    }
    return { winner: null, line: [] };
  }, []);

  const handleSquareClick = useCallback((index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result.winner) {
      setWinner(result.winner);
      setWinningLine(result.line);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }, [board, currentPlayer, winner, checkWinner]);

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setWinningLine([]);
  }, []);

  const isDraw = !winner && board.every(square => square !== null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tic Tac Toe
        </h1>
        
        <GameStatus 
          currentPlayer={currentPlayer} 
          winner={winner} 
          isDraw={isDraw} 
        />
        
        <GameBoard
          board={board}
          onSquareClick={handleSquareClick}
          winningLine={winningLine}
        />
        
        <div className="mt-8 flex justify-center">
          <Button
            onClick={resetGame}
            variant="outline"
            size="lg"
            className="flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <RotateCcw size={20} />
            Reset Game
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
