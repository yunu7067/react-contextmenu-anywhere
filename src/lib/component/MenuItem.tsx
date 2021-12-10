import React, { useEffect, useRef, useState } from 'react';
import { MenuItemType } from '../Types';
import useWindowDimensions from '../util/useWindowDimensions';
import MenuContainer from './MenuContainer';

type MenuItemProps = {
  item: MenuItemType;
};

export default function MenuItem(props: MenuItemProps) {
  const [submenuVisibility, setSubmenuVisibility] = useState<boolean>(false);
  const [submenuDirection, setSubMenuDirection] = useState({
    h: 'right',
    v: 'bottom',
  });
  const submenuRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);
  const viewport = useWindowDimensions();

  useEffect(() => {
    if (submenuRef.current !== undefined && itemRef.current !== undefined) {
      const mcRight = itemRef.current?.getBoundingClientRect().right || 0;
      const mcTop = itemRef.current?.getBoundingClientRect().top || 0;
      const submenuWidht =
        submenuRef.current?.getBoundingClientRect().width || 0;
      const submenuHeight =
        submenuRef.current?.getBoundingClientRect().height || 0;

      const calcSubmenuHDirection =
        viewport.width - mcRight - submenuWidht < 8 ? 'left' : 'right';

      const calcSubmenuVDirection =
        viewport.height - mcTop - submenuHeight < 0 ? 'top' : 'bottom';

      // console.debug(viewport);
      // console.debug({ mcRight, submenuWidht });
      // console.debug({ mcTop, submenuHeight });
      setSubMenuDirection({
        h: calcSubmenuHDirection,
        v: calcSubmenuVDirection,
      });
    }
  }, [submenuVisibility]);

  return (
    <li className="context-menu-item" role="none" ref={itemRef}>
      <div
        className="context-menu-item-button"
        role="menuitem"
        aria-disabled={props.item.disabled}
        onClick={props.item.handleClick}
        onMouseEnter={() =>
          setSubmenuVisibility(
            Array.isArray(props.item.submenu) && props.item.disabled !== true
          )
        }
        onMouseLeave={() => setSubmenuVisibility(false)}
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
          <MenuContainer
            mRef={submenuRef}
            item={props.item.submenu}
            visibility={submenuVisibility}
            direction={submenuDirection}
          />
        )}
      </div>
    </li>
  );
}
