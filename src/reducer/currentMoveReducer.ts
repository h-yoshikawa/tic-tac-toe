import type { CurrentMove, CurrentMoveActionType } from '../components/Game/types';

/**
 * `currentMove` を更新する Reducer
 *
 * @param currentMove 現在の `currentMove` を保持する state
 * @param action アクション
 *
 * @returns 更新後の `currentMove`
 */
export const currentMoveReducer = (currentMove: CurrentMove, action: CurrentMoveActionType): CurrentMove => {
  switch (action.type) {
    case 'play':
      return action.nextMove;
    case 'jump':
      return action.nextMove;
    default:
      return currentMove;
  }
};
