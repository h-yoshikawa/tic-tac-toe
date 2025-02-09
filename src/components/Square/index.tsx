import { JSX } from 'react';

type Props = {
  /** マス目に表示する値 */
  value: string | null;
  /** マス目をクリックした時に実行されるハンドラ */
  onSquareClick: () => void;
};

/** `Square` コンポーネント */
export default function Square({ value, onSquareClick }: Props): JSX.Element {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
