import React from "react";
import { MenuContainerType } from "../Types";
import { drawContextMenu } from "../ContextMenu";

type MenuContainerProps = {
  item: MenuContainerType;
  mRef?: React.ForwardedRef<HTMLDivElement> | null;
  visibility: boolean;
  direction: { v: string; h: string };
};

export default function MenuContainerIn(props: MenuContainerProps) {
  return (
    <div
      ref={props.mRef}
      className="context-menu"
      data-v-direction={props.direction.v}
      data-h-direction={props.direction.h}
    >
      {drawContextMenu(props.item)}
    </div>
  );
}
