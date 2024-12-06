type Props = {
  value: number;
  onSquareClick: () => void;
};

export const Square = ({ value, onSquareClick }: Props) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
