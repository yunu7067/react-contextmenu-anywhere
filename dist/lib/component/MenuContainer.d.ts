import React from "react";
import { MenuContainerType } from "../Types";
declare type MenuContainerProps = {
    item: MenuContainerType;
    mRef?: React.ForwardedRef<HTMLDivElement> | null;
    visibility: boolean;
    direction: {
        v: string;
        h: string;
    };
};
export default function MenuContainerIn(props: MenuContainerProps): JSX.Element;
export {};
