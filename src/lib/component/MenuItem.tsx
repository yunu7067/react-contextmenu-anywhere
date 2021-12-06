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
        <span className="context-menu-item-name">{props.item.name}</span>
        <span className="context-menu-item-info">
          {props.item.submenu && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
                fill="currentColor"
              />
            </svg>
          )}
        </span>

        {props.item.submenu && (
          <div className="context-menu" data-direction={"right"}>
            {drawContextMenu(props.item.submenu)}
          </div>
        )}
      </div>
    </li>
  );
}
