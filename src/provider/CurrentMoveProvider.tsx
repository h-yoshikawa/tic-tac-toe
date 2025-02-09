import { JSX, ReactNode, useReducer } from 'react';
import { CurrentMoveContext } from '../context/CurrentMoveContext';
import type { CurrentMove } from '../components/Game/types';
import { currentMoveReducer } from '../reducer/currentMoveReducer';
import { CurrentMoveDispatchContext } from '../context/CurrentMoveDispatchContext';

type Props = {
  children: ReactNode;
};

/** CurrentMoveContext を提供する Provider */
export const CurrentMoveProvider = ({ children }: Props): JSX.Element => {
  /** `currentMove` のデフォルト値 */
  const defaultCurrentMove: CurrentMove = 0;

  const [currentMove, currentMoveDispatch] = useReducer(currentMoveReducer, defaultCurrentMove);

  return (
    <CurrentMoveContext.Provider value={currentMove}>
      <CurrentMoveDispatchContext.Provider value={currentMoveDispatch}>{children}</CurrentMoveDispatchContext.Provider>
    </CurrentMoveContext.Provider>
  );
};
