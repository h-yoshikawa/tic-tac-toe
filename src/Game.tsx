import { Board } from './Board';

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol>
          <li>
            <button>goto game start</button>
          </li>
          <li>
            <button>goto game start</button>
          </li>
          <li>
            <button>goto game start</button>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Game;
