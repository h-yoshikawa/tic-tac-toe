import { JSX } from 'react';
import Board from '../Board';
import { useHistory } from '../../hooks/useHistory';
import { useCurrentMoveDispatch } from '../../hooks/useCurrentMoveDispatch';

/** `Game` コンポーネント */
export default function Game(): JSX.Element {
  const history = useHistory();
  const currentMoveDispatch = useCurrentMoveDispatch();

  function jumpTo(nextMove: number) {
    currentMoveDispatch({ type: 'jump', nextMove });
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
