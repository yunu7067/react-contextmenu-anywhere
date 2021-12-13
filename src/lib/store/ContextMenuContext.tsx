import { Dispatch } from 'react';

type ContextMenuState = {
  isVisible: boolean;
  isDarkmode: boolean;
  removeCurrentContextMenu: () => void;
};

type ContextMenuAction =
  | { type: 'SET_VISIBILITY'; isVisible: boolean }
  | { type: 'SET_CLOSE_CALLBACK'; removeCurrentContextMenu: () => void }
  | { type: 'TOGGLE_DARKMODE' };

type ContextMenuDispatch = Dispatch<ContextMenuAction>;

function contextMenuReducer(state: ContextMenuState, action: ContextMenuAction): ContextMenuState {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return {
        ...state,
        isVisible: action.isVisible,
      };
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        isDarkmode: !state.isDarkmode,
      };
    case 'SET_CLOSE_CALLBACK':
      return {
        ...state,
        removeCurrentContextMenu: action.removeCurrentContextMenu,
      };
    default:
      throw new Error('Unhandled action');
  }
}

export { contextMenuReducer };
export type { ContextMenuState, ContextMenuAction, ContextMenuDispatch };
