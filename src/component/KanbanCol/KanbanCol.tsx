import './KanbanCol.css';
import {PropsWithChildren, useState} from "react";
import DeleteIcon from "../icons/DeleteIcon";
import Button from "../Button/Button";
import PlusIcon from "../icons/PlusIcon";
import NewItemForm from "../KanbanItem/NewItemForm";

interface KanbanColProps {
    title: string;
    onDelete: () => void;
    onNewItem: (value: string) => void;
}

export default function KanbanCol({children, title, onDelete, onNewItem}: PropsWithChildren<KanbanColProps>){
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="kanban-col">
            <div className="kanban-col-title">
                <div className="my-auto">{title}</div>
                <Button uncolored small iconButton onClick={onDelete}><DeleteIcon className="my-auto" style={{width:'1.2em'}}/></Button>
            </div>
            <div className="kanban-col-item-container">
                {children}
            </div>
            {
                showForm ? (
                    <NewItemForm onNew={onNewItem} onClose={() => setShowForm(false)}/>
                ) : (
                    <div className="kanban-new-item-form" onClick={() => setShowForm(true)}>
                        new item <PlusIcon className="my-auto" style={{width:'1em'}}/>
                    </div>
                )
            }
        </div>
    );
}
