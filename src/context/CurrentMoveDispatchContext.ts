import { createContext, Dispatch } from 'react';
import type { CurrentMoveActionType } from '../components/Game/types';

/** `currentMove` を更新する dispatch 関数を保持する Context */
export const CurrentMoveDispatchContext = createContext<Dispatch<CurrentMoveActionType> | null>(null);
