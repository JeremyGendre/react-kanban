import './KanbanCol.css';
import {PropsWithChildren} from "react";


interface KanbanColProps {
    title: string
}

export default function KanbanCol({children, title}: PropsWithChildren<KanbanColProps>){
    return (
        <div className="kanban-col">
            <div className="kanban-col-title">{title}</div>
            <div className="kanban-col-item-container">
                {children}
            </div>
        </div>
    );
}
