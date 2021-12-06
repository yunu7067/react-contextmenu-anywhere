import React from "react";
import { ContextMenuState, ContextMenuDispatch } from "./store/ContextMenuContext";
declare type ContextMenuProviderProps = {
    children: React.ReactNode;
};
declare function ContextMenuProvider({ children }: ContextMenuProviderProps): JSX.Element;
declare function useContextMenuState(): ContextMenuState;
declare function useContextMenuDispatch(): ContextMenuDispatch;
declare function useContextMenu(): [ContextMenuState, ContextMenuDispatch];
export default ContextMenuProvider;
export { useContextMenu, useContextMenuState, useContextMenuDispatch };
