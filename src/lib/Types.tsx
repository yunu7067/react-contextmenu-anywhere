type MenuItemType = {
  icon?: JSX.Element | string;
  name: string;
  key?: string;
  disabled?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  submenu?: MenuContainerType;
};
type MenuGroupType = Array<MenuItemType>;
type MenuContainerType = Array<MenuGroupType>;

export type { MenuItemType, MenuGroupType, MenuContainerType };
