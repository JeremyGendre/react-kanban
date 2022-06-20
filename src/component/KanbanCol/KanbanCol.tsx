import './KanbanCol.css';
import {PropsWithChildren, useState} from "react";
import DeleteIcon from "../icons/DeleteIcon";
import Button from "../Button/Button";
import PlusIcon from "../icons/PlusIcon";
import NewItemForm from "../KanbanItem/NewItemForm";
import {useDraggable} from "../../context/DraggableContext";

interface KanbanColProps {
    title: string;
    id: number;
    onDelete: () => void;
    onNewItem: (value: string) => void;
}

export default function KanbanCol({children, id, title, onDelete, onNewItem}: PropsWithChildren<KanbanColProps>){
    const [showForm, setShowForm] = useState(false);
    const {drop} = useDraggable();

    return (
        <div className="kanban-col">
            <div className="kanban-col-title">
                <div className="my-auto">{title}</div>
                <Button title="Delete this column" uncolored small iconButton onClick={onDelete}><DeleteIcon className="my-auto" style={{width:'1.2em'}}/></Button>
            </div>
            <div
                className="kanban-col-item-container"
                onDrop={e => {
                    e.preventDefault();
                    drop(id);
                }}
                onDragOver={e => e.preventDefault()}
            >
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
