import { Square } from './Square';
import { calculateWinner } from './calculateWinner';

type Props = {
  xIsNext: boolean;
  squares: string[];
  onPlay: (currentSquares: string[]) => void;
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
  const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <>
      <div className="status">{status}</div>
      {[...Array(3).keys()].map((i) => {
        const row = [...Array(3).keys()].map((j) => {
          const n = 3 * i + j;
          return <Square key={n} value={squares[n]} onSquareClick={() => handleSquareClick(n)} />;
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
