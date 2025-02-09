import { useContext } from 'react';
import { CurrentMoveContext } from '../context/CurrentMoveContext';
import type { CurrentMove } from '../components/Game/types';

/** CurrentMoveContext を提供する Custom Hook */
export const useCurrentMove = (): CurrentMove => {
  const currentMove = useContext(CurrentMoveContext);
  if (currentMove === null) {
    throw new Error('CurrentMoveProvider でラップしてください');
  }

  return currentMove;
};
