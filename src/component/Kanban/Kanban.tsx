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
                <KanbanCol key={`kanban-col-${index}-${column.title}`} title={column.title}>
                    {column.items.map((item, itemIndex) => (
                        <KanbanItem key={`kanban-col-${index}-item-${itemIndex}`}>
                            {item.content}
                        </KanbanItem>
                    ))}
                </KanbanCol>
            ))}
            <NewKanban onNew={(newCol) => setKanban(prev => [...prev, newCol])}/>
        </div>
    );
}
