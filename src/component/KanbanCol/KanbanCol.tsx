import './KanbanCol.css';
import {PropsWithChildren} from "react";
import DeleteIcon from "../icons/DeleteIcon";
import Button from "../Button/Button";


interface KanbanColProps {
    title: string
}

export default function KanbanCol({children, title}: PropsWithChildren<KanbanColProps>){
    return (
        <div className="kanban-col">
            <div className="kanban-col-title">
                <div className="my-auto">{title}</div>
                <Button uncolored small iconButton><DeleteIcon className="my-auto" style={{width:'1.2em'}}/></Button>
            </div>
            <div className="kanban-col-item-container">
                {children}
            </div>
            <div className="kanban-new-item-form">new item</div>
        </div>
    );
}
