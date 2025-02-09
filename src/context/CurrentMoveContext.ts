import { createContext } from 'react';
import type { CurrentMove } from '../components/Game/types';

/** `currentMove` を保持する Context */
export const CurrentMoveContext = createContext<CurrentMove | null>(null);
