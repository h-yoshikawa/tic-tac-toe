import { Dispatch, useContext } from 'react';
import { CurrentMoveDispatchContext } from '../context/CurrentMoveDispatchContext';
import type { CurrentMoveActionType } from '../components/Game/types';

/** CurrentMoveDispatchContext を提供する Custom Hook */
export const useCurrentMoveDispatch = (): Dispatch<CurrentMoveActionType> => {
  const currentMoveDispatch = useContext(CurrentMoveDispatchContext);
  if (currentMoveDispatch === null) {
    throw new Error('CurrentMoveDispatchProvider でラップしてください');
  }

  return currentMoveDispatch;
};
