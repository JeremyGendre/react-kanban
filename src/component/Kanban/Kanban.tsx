import './Kanban.css';
import {ColumnType} from "../../model/Kanban.model";
import KanbanCol from "../KanbanCol/KanbanCol";
import KanbanItem from "../KanbanItem/KanbanItem";

export interface KanbanProps {
    collection: ColumnType[]
}

export default function Kanban({collection}:KanbanProps){
    return (
        <div className="kanban">
            {collection.map((column, index) => (
                <KanbanCol key={`kanban-col-${index}-${column.title}`} title={column.title}>
                    {column.items.map((item, itemIndex) => (
                        <KanbanItem key={`kanban-col-${index}-item-${itemIndex}`}>
                            {item.content}
                        </KanbanItem>
                    ))}
                </KanbanCol>
            ))}
        </div>
    );
}
