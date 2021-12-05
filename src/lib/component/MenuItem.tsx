import React from "react";
import { drawContextMenu } from "../ContextMenu";
import { MenuItemType } from "../Types";

type MenuItemProps = {
  item: MenuItemType;
};

export default function MenuItem(props: MenuItemProps) {
  return (
    <li className="context-menu-item" role="none">
      <div
        className="context-menu-item-button"
        role="menuitem"
        aria-disabled={props.item.disabled}
        onClick={props.item.handleClick}
      >
        <span className="context-menu-item-icon">{props.item.icon}</span>
        {props.item.name}
        {props.item.submenu && (
          <div className="context-menu" data-direction={"right"}>
            {drawContextMenu(props.item.submenu)}
          </div>
        )}
      </div>
    </li>
  );
}
