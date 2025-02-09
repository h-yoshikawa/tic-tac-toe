import { JSX, ReactNode } from 'react';
import { HistoryContext } from '../context/HistoryContext';
import type { History } from '../components/Game/types';

type Props = {
  children: ReactNode;
};

/** HistoryContext を提供する Provider */
export const HistoryProvider = ({ children }: Props): JSX.Element => {
  /** `history` のデフォルト値 */
  const defaultHistory: History = [Array(9).fill(null)];

  return <HistoryContext.Provider value={defaultHistory}>{children}</HistoryContext.Provider>;
};
