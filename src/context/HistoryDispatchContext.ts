import { createContext, Dispatch } from 'react';
import type { HistoryActionType } from '../components/Game/types';

/** `history` を更新する dispatch 関数を保持する Context */
export const HistoryDispatchContext = createContext<Dispatch<HistoryActionType> | null>(null);
