
import React from 'react';
import { Player } from './TicTacToe';

interface GameStatusProps {
  currentPlayer: 'X' | 'O';
  winner: Player;
  isDraw: boolean;
}

export const GameStatus: React.FC<GameStatusProps> = ({ 
  currentPlayer, 
  winner, 
  isDraw 
}) => {
  const getStatusMessage = () => {
    if (winner) {
      return (
        <span className="animate-bounce-in text-green-600 font-semibold">
          🎉 Player {winner} wins!
        </span>
      );
    }
    
    if (isDraw) {
      return (
        <span className="text-yellow-600 font-semibold">
          🤝 It's a draw!
        </span>
      );
    }
    
    return (
      <span className="text-gray-700">
        Player{' '}
        <span className={`font-bold ${currentPlayer === 'X' ? 'text-blue-600' : 'text-red-500'}`}>
          {currentPlayer}
        </span>
        's turn
      </span>
    );
  };

  return (
    <div className="text-center mb-6 h-8 flex items-center justify-center">
      <div className="text-lg">
        {getStatusMessage()}
      </div>
    </div>
  );
};
