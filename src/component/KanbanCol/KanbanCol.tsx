import './KanbanCol.css';
import {PropsWithChildren} from "react";
import DeleteIcon from "../icons/DeleteIcon";
import Button from "../Button/Button";
import PlusIcon from "../icons/PlusIcon";


interface KanbanColProps {
    title: string;
    onDelete: () => void
}

export default function KanbanCol({children, title, onDelete}: PropsWithChildren<KanbanColProps>){
    return (
        <div className="kanban-col">
            <div className="kanban-col-title">
                <div className="my-auto">{title}</div>
                <Button uncolored small iconButton onClick={onDelete}><DeleteIcon className="my-auto" style={{width:'1.2em'}}/></Button>
            </div>
            <div className="kanban-col-item-container">
                {children}
            </div>
            <div className="kanban-new-item-form">new item <PlusIcon className="my-auto" style={{width:'1em'}}/></div>
        </div>
    );
}
