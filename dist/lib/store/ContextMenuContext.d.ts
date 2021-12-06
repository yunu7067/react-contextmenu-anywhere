import { Dispatch } from "react";
declare type ContextMenuState = {
    isVisible: boolean;
    removeCurrentContextMenu: () => void;
};
declare type ContextMenuAction = {
    type: "SET_VISIBILITY";
    isVisible: boolean;
} | {
    type: "SET_REMOVE_CALLBACK";
    removeCurrentContextMenu: () => void;
} | {
    type: "TOGGLE_VISIBILITY";
};
declare type ContextMenuDispatch = Dispatch<ContextMenuAction>;
declare function contextMenuReducer(state: ContextMenuState, action: ContextMenuAction): ContextMenuState;
export { contextMenuReducer };
export type { ContextMenuState, ContextMenuAction, ContextMenuDispatch };
