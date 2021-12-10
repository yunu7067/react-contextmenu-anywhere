import React from 'react';
import { MenuGroupType } from '../Types';
import MenuItem from './MenuItem';

type MenuGroupProps = {
  item: MenuGroupType;
};

export default function MenuGroup(props: MenuGroupProps) {
  return (
    <ul className="context-menu-group">
      {props.item.map((menuItem, index) => (
        <MenuItem key={`MenuItem-${index}`} item={menuItem} />
      ))}
    </ul>
  );
}
