/** `history` の型 */
export type History = (string | null)[][];

/** `currentMove` の型 */
export type CurrentMove = number;

/** `history` を更新する dispatch 関数の引数の型 */
export type HistoryActionType = {
  /** タイプ */
  type: 'play';
  /** 次の盤面の状態 */
  nextSquares: (string | null)[];
  /** 現在の手番 */
  currentMove: CurrentMove;
};

/** `currentMove` を更新する dispatch 関数の引数の型 */
export type CurrentMoveActionType =
  | {
      /** タイプ */
      type: 'play';
      /** 次の手番 */
      nextMove: number;
    }
  | {
      /** タイプ */
      type: 'jump';
      /** 次の手番 */
      nextMove: number;
    };
