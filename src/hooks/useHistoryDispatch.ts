import { Dispatch, useContext } from 'react';
import { HistoryDispatchContext } from '../context/HistoryDispatchContext';
import type { HistoryActionType } from '../components/Game/types';

/** HistoryDispatchContext を提供する Custom Hook */
export const useHistoryDispatch = (): Dispatch<HistoryActionType> => {
  const historyDispatch = useContext(HistoryDispatchContext);
  if (historyDispatch === null) {
    throw new Error('HistoryDispatchProvider でラップしてください');
  }

  return historyDispatch;
};
