import './Kanban.css';
import {ColumnType} from "../../model/Kanban.model";
import KanbanCol from "../KanbanCol/KanbanCol";
import KanbanItem from "../KanbanItem/KanbanItem";
import {useEffect, useState} from "react";
import NewKanban from "./NewKanban";

export interface KanbanProps {
    collection: ColumnType[],
    onChange?: (collection: ColumnType[]) => void
}

export default function Kanban({collection, onChange = () => {}}:KanbanProps){
    const [kanban, setKanban] = useState(collection);

    useEffect(() => {
        console.log(kanban);
        onChange(kanban);
    },[kanban]);

    return (
        <div className="kanban">
            {kanban.map((column, index) => (
                <KanbanCol
                    key={`kanban-col-${index}-${column.title}`}
                    title={column.title}
                    onDelete={() => {
                       setKanban(prev => {
                           /*prev.splice(index,1);
                           return [...prev];*/
                           return prev.filter((col, colIndex) => colIndex !== index);
                       })
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
