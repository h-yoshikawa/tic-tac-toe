import { JSX, ReactNode, useReducer } from 'react';
import { HistoryContext } from '../context/HistoryContext';
import type { History } from '../components/Game/types';
import { historyReducer } from '../reducer/historyReducer';
import { HistoryDispatchContext } from '../context/HistoryDispatchContext';

type Props = {
  children: ReactNode;
};

/** HistoryContext を提供する Provider */
export const HistoryProvider = ({ children }: Props): JSX.Element => {
  /** `history` のデフォルト値 */
  const defaultHistory: History = [Array(9).fill(null)];

  const [history, historyDispatch] = useReducer(historyReducer, defaultHistory);

  return (
    <HistoryContext.Provider value={history}>
      <HistoryDispatchContext.Provider value={historyDispatch}>{children}</HistoryDispatchContext.Provider>
    </HistoryContext.Provider>
  );
};
