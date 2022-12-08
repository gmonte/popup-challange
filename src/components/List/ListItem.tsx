import { PropsWithChildren } from "react";
import { CSSProperties } from "styled-components";
import { Item } from "./styles";

export type ListItemProps = PropsWithChildren<{
  style?: CSSProperties
}>

export function ListItem({
  children,
  style
}: ListItemProps) {
  return (
    <Item style={style}>
      {children}
    </Item>
  );
}

ListItem.displayName = 'List.Item'
