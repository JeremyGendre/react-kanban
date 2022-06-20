import './KanbanItem.css';
import {PropsWithChildren} from "react";
import DeleteIcon from "../icons/DeleteIcon";
import Button from "../Button/Button";

export default function KanbanItem({children, onDelete = () => {}}: PropsWithChildren<{ onDelete?: () => void }>){
    return (
        <div className="kanban-item">
            {children}
            <div className="kanban-item-delete">
                <Button uncolored small iconButton className="my-auto" onClick={onDelete}>
                    <DeleteIcon className="my-auto" style={{width:'1.2em'}}/>
                </Button>
            </div>
        </div>
    )
}
