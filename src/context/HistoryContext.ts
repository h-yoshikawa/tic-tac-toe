import { createContext } from 'react';
import type { History } from '../components/Game/types';

/** `history` を保持する Context */
export const HistoryContext = createContext<History | null>(null);
