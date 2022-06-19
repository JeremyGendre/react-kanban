import {ReactNode} from "react";

export interface ColumnType {
    title: string;
    items: ItemType[];
}

export interface ItemType{
    content: ReactNode;
}
