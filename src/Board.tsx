import { Square } from './Square';
import { calculateWinner } from './calculateWinner';

type Props = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (currentSquares: (string | null)[]) => void;
};

export const Board = ({ xIsNext, squares, onPlay }: Props) => {
  const handleSquareClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';

    onPlay(newSquares);
  };

  const winner = calculateWinner(squares);
  const status = winner?.winner
    ? `Winner: ${winner.winner}`
    : squares.includes(null)
    ? `Next Player: ${xIsNext ? 'X' : 'O'}`
    : '引き分け';

  return (
    <>
      <div className="status">{status}</div>
      {[...Array(3).keys()].map((i) => {
        const row = [...Array(3).keys()].map((j) => {
          const n = 3 * i + j;
          return (
            <Square
              key={n}
              className={`square ${winner?.winningLine.includes(n) ? 'win' : null}`}
              value={squares[n]}
              onSquareClick={() => handleSquareClick(n)}
            />
          );
        });

        return (
          <div key={i} className="board-row">
            {row}
          </div>
        );
      })}
    </>
  );
};
