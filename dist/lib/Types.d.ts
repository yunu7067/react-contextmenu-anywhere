/// <reference types="react" />
declare type MenuItemType = {
    icon?: JSX.Element | string;
    name: string;
    key?: string;
    disabled?: boolean;
    handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    submenu?: MenuContainerType;
};
declare type MenuGroupType = Array<MenuItemType>;
declare type MenuContainerType = Array<MenuGroupType>;
export type { MenuItemType, MenuGroupType, MenuContainerType };
