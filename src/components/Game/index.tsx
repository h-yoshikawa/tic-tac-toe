import { useState } from 'react';

import './Game.css';
import { Board } from '../Board';

const Game = () => {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares: (string | null)[] = history[currentMove];

  const handlePlay = (nextSquares: (string | null)[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move): JSX.Element => {
    const rowAndCol = { row: 0, col: 0 };
    if (move > 0) {
      const diffIndex = squares.findIndex((value, index) => value !== history[move - 1][index]);
      rowAndCol.row = Math.floor(diffIndex / 3);
      rowAndCol.col = diffIndex % 3;
    }

    const description = move === 0 ? 'goto game start' : `go to move #${move} (${rowAndCol.row}, ${rowAndCol.col})`;

    return move === currentMove ? (
      <li key={move}>
        <button>{`You are at move #${move}`}</button>
      </li>
    ) : (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={() => setIsAscending(!isAscending)}>{isAscending ? '降順にする' : '昇順にする'}</button>
        <ol>{isAscending ? moves : moves.reverse()}</ol>
      </div>
    </div>
  );
};

export default Game;
