import './Kanban.css';
import {ColumnType} from "../../model/Kanban.model";
import KanbanCol from "../KanbanCol/KanbanCol";
import KanbanItem from "../KanbanItem/KanbanItem";
import {useEffect, useState} from "react";
import NewKanban from "./NewKanban";
import DraggableContextProvider, {useDraggable} from "../../context/DraggableContext";

export interface KanbanProps {
    collection: ColumnType[],
    onChange?: (collection: ColumnType[]) => void
}

function KanbanContainer({collection, onChange = () => {}}:KanbanProps){
    const [kanban, setKanban] = useState(collection);
    const {dropObject} = useDraggable();

    useEffect(() => {
        console.log(kanban);
        onChange(kanban);
    },[kanban]);

    useEffect(() => {
        if(!dropObject) return;
        setKanban(prev => prev.map((col, colIndex) => {
            if(colIndex === dropObject.source) return {...col, items: col.items.filter((i, iIndex) => iIndex !== dropObject.itemIndex)};
            if(colIndex === dropObject.target) return {...col, items: [...col.items, dropObject.item]};
            return col;
        }))
    }, [dropObject]);

    return (
        <div className="kanban">
            {kanban.map((column, index) => (
                <KanbanCol
                    key={`kanban-col-${index}-${column.title}`}
                    id={index}
                    title={column.title}
                    onDelete={() => {
                       setKanban(prev => prev.filter((col, colIndex) => colIndex !== index))
                    }}
                    onNewItem={(value:string) => {
                        setKanban(prev => prev.map((col,colIndex) => {
                            if(colIndex === index) return {...col, items: [...col.items, {content: value}]};
                            return col;
                        }))
                    }}
                >
                    {column.items.map((item, itemIndex) => (
                        <KanbanItem
                            key={`kanban-col-${index}-item-${itemIndex}`}
                            item={item}
                            index={itemIndex}
                            colId={index}
                            onDelete={() => {
                                setKanban(prev => prev.map((col,colIndex) => {
                                    if(colIndex === index) return {...col, items: col.items.filter((i,iIndex) => iIndex !== itemIndex)};
                                    return col;
                                }))
                            }}
                        >
                            {item.content}
                        </KanbanItem>
                    ))}
                </KanbanCol>
            ))}
            <NewKanban onNew={(newCol) => setKanban(prev => [...prev, newCol])}/>
        </div>
    );
}

export default function Kanban({collection, onChange = () => {}}:KanbanProps){
    return (
        <DraggableContextProvider>
            <KanbanContainer collection={collection} onChange={onChange}/>
        </DraggableContextProvider>
    )
}
