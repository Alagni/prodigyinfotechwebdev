
import React from 'react';
import { Player } from './TicTacToe';

interface GameSquareProps {
  value: Player;
  onClick: () => void;
  isWinning: boolean;
}

export const GameSquare: React.FC<GameSquareProps> = ({ 
  value, 
  onClick, 
  isWinning 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-20 h-20 bg-white rounded-lg shadow-md 
        flex items-center justify-center text-3xl font-bold
        transition-all duration-200 
        hover:shadow-lg hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-blue-500
        ${isWinning ? 'animate-winner-glow bg-green-50' : ''}
        ${value ? 'cursor-default' : 'cursor-pointer hover:bg-gray-50'}
      `}
      disabled={!!value}
    >
      {value && (
        <span 
          className={`
            animate-pop-in
            ${value === 'X' ? 'text-blue-600' : 'text-red-500'}
          `}
        >
          {value}
        </span>
      )}
    </button>
  );
};
