import React, { useEffect, useState } from "react";
import MenuGroup from "./component/MenuGroup";
import "./ContextMenu.css";
import { useContextMenu } from "./Provider";
import type { MenuContainerType } from "./Types";

type ContextMenuProps = {
  children?: React.ReactNode;
  menu: MenuContainerType;
};

function drawContextMenu(menu: MenuContainerType): React.ReactNode {
  return menu.map((menuGroup, index) => (
    <MenuGroup key={`MenuGroup-${index}`} item={menuGroup} />
  ));
}

function ContextMenu({ children, menu }: ContextMenuProps) {
  const [contextMenu, dispatchContextMenu] = useContextMenu();
  const [visible, setVisible] = useState(false);
  const [position, setPsition] = useState({ x: 0, y: 0 });

  function contextMenuHandler(event: React.MouseEvent<HTMLDivElement>) {
    // console.debug(event);
    event.preventDefault();
    event.stopPropagation();
    hideContextMenu();
    showContextMenu();
    setPsition({ x: event.pageX, y: event.pageY });

    return false;
  }

  const showContextMenu = () => {
    dispatchContextMenu({ type: "SET_VISIBILITY", isVisible: true });
    dispatchContextMenu({
      type: "SET_REMOVE_CALLBACK",
      removeCurrentContextMenu: disableThisCM,
    });
    setVisible(true);
  };

  const disableThisCM = () => setVisible(false);

  const hideContextMenu = () => {
    console.log("hideContextMenu");
    contextMenu.removeCurrentContextMenu();
    dispatchContextMenu({ type: "SET_VISIBILITY", isVisible: false });
    setVisible(false);
  };

  return (
    <div onContextMenu={contextMenuHandler}>
      {children}
      <div
        className="context-menu"
        data-visibility={contextMenu.isVisible && visible}
        onClick={hideContextMenu}
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        {drawContextMenu(menu)}
      </div>
    </div>
  );
}

export { ContextMenu, drawContextMenu };
