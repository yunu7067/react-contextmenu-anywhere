import { Dispatch } from "react";

type ContextMenuState = {
  isVisible: boolean;
  removeCurrentContextMenu: () => void;
};

type ContextMenuAction =
  | { type: "SET_VISIBILITY"; isVisible: boolean }
  | { type: "SET_REMOVE_CALLBACK"; removeCurrentContextMenu: () => void }
  | { type: "TOGGLE_VISIBILITY" };

type ContextMenuDispatch = Dispatch<ContextMenuAction>;

function contextMenuReducer(
  state: ContextMenuState,
  action: ContextMenuAction
): ContextMenuState {
  switch (action.type) {
    case "SET_VISIBILITY":
      return {
        ...state,
        isVisible: action.isVisible,
      };
    case "TOGGLE_VISIBILITY":
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case "SET_REMOVE_CALLBACK":
      return {
        ...state,
        removeCurrentContextMenu: action.removeCurrentContextMenu,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export { contextMenuReducer };
export type { ContextMenuState, ContextMenuAction, ContextMenuDispatch };
