import type { History, HistoryActionType } from '../components/Game/types';

/**
 * `history` を更新する Reducer
 *
 * @param history 現在の `history` を保持する state
 * @param action アクション
 *
 * @returns 更新後の `history`
 */
export const historyReducer = (history: History, action: HistoryActionType): History => {
  switch (action.type) {
    case 'play':
      return [...history.slice(0, action.currentMove + 1), action.nextSquares];
    default:
      return history;
  }
};
