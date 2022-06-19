import './KanbanCol.css';
import {PropsWithChildren} from "react";


interface KanbanColProps {
    title: string
}

export default function KanbanCol({children, title}: PropsWithChildren<KanbanColProps>){
    return (
        <div className="kanban-col">
            <div className="kanban-title">{title}</div>
            <div>
                {children}
            </div>
        </div>
    );
}
