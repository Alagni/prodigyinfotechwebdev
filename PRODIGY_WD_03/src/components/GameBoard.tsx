
import React from 'react';
import { GameSquare } from './GameSquare';
import { Board } from './TicTacToe';

interface GameBoardProps {
  board: Board;
  onSquareClick: (index: number) => void;
  winningLine: number[];
}

export const GameBoard: React.FC<GameBoardProps> = ({ 
  board, 
  onSquareClick, 
  winningLine 
}) => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-gray-200 p-3 rounded-xl">
      {board.map((value, index) => (
        <GameSquare
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          isWinning={winningLine.includes(index)}
        />
      ))}
    </div>
  );
};
