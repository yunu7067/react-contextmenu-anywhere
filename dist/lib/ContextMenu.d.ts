import React from "react";
import "./ContextMenu.css";
import type { MenuContainerType } from "./Types";
declare type ContextMenuProps = {
    children?: React.ReactNode;
    menu: MenuContainerType;
};
declare function drawContextMenu(menu: MenuContainerType): React.ReactNode;
declare function ContextMenu({ children, menu }: ContextMenuProps): JSX.Element;
export { ContextMenu, drawContextMenu };
