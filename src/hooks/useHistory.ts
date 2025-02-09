import { useContext } from 'react';
import { HistoryContext } from '../context/HistoryContext';
import type { History } from '../components/Game/types';

/** HistoryContext を提供する Custom Hook */
export const useHistory = (): History => {
  const history = useContext(HistoryContext);
  if (history === null) {
    throw new Error('HistoryProvider でラップしてください');
  }

  return history;
};
