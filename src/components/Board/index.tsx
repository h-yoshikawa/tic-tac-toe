import { JSX } from 'react';
import calculateWinner from '../../utils/calculateWinner';
import Square from '../Square';
import { useHistory } from '../../hooks/useHistory';
import { useHistoryDispatch } from '../../hooks/useHistoryDispatch';
import { useCurrentMove } from '../../hooks/useCurrentMove';
import { useCurrentMoveDispatch } from '../../hooks/useCurrentMoveDispatch';

/** `Board` コンポーネント */
export default function Board(): JSX.Element {
  const history = useHistory();
  const historyDispatch = useHistoryDispatch();
  const currentMove = useCurrentMove();
  const currentMoveDispatch = useCurrentMoveDispatch();

  const xIsNext = currentMove % 2 === 0;
  const squares = history[currentMove];

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    historyDispatch({ type: 'play', nextSquares, currentMove });
    currentMoveDispatch({ type: 'play', nextMove: currentMove + 1 });
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
