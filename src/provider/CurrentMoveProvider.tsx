import { JSX, ReactNode } from 'react';
import { CurrentMoveContext } from '../context/CurrentMoveContext';
import type { CurrentMove } from '../components/Game/types';

type Props = {
  children: ReactNode;
};

/** CurrentMoveContext を提供する Provider */
export const CurrentMoveProvider = ({ children }: Props): JSX.Element => {
  /** `currentMove` のデフォルト値 */
  const defaultCurrentMove: CurrentMove = 0;

  return <CurrentMoveContext.Provider value={defaultCurrentMove}>{children}</CurrentMoveContext.Provider>;
};
