import './Square.css';

type Props = {
  className: string;
  value: string | null;
  onSquareClick: () => void;
};

export const Square = ({ className, value, onSquareClick }: Props) => {
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
};
