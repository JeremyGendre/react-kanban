import {createContext, PropsWithChildren, useContext, useState} from "react";
import {ItemType} from "../model/Kanban.model";

interface DropObject {
    item: ItemType;
    itemIndex: number;
    source: number;
    target: number;
}

interface DraggableContextType {
    dragStart: (item: ItemType, itemIndex: number, sourceColId: number) => void;
    drop: (targetColId: number) => void;
    dropObject: DropObject | null
}

const DraggableContext = createContext<DraggableContextType>(undefined!);

export const useDraggable = () => useContext(DraggableContext);

export default function DraggableContextProvider({children}: PropsWithChildren<{}>){
    const [item, setItem] = useState<ItemType|null>(null);
    const [itemIndex, setItemIndex] = useState<number|null>(null);
    const [source, setSource] = useState<number|null>(null);
    const [dropObject, setDropObject] = useState<DropObject|null>(null);

    const dragStart = (draggedItem: ItemType, draggedItemIndex: number, sourceColId: number) => {
        setItem(draggedItem);
        setItemIndex(draggedItemIndex);
        setSource(sourceColId);
    };

    const drop = (targetColId: number) => {
        if(item === null || source === null || itemIndex === null) return;
        if(targetColId === source) return;
        setDropObject({item, itemIndex, source, target: targetColId});
    };

    return (
        <DraggableContext.Provider value={{dragStart, drop, dropObject}}>
            {children}
        </DraggableContext.Provider>
    );
}
