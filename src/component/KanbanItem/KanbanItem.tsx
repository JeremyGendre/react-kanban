import './KanbanItem.css';
import {PropsWithChildren} from "react";
import DeleteIcon from "../icons/DeleteIcon";
import Button from "../Button/Button";
import {ItemType} from "../../model/Kanban.model";
import {useDraggable} from "../../context/DraggableContext";

interface KanbanItemProps {
    item: ItemType;
    index: number;
    colId: number;
    onDelete?: () => void;
}

export default function KanbanItem({children, index, item, colId, onDelete = () => {}}: PropsWithChildren<KanbanItemProps>){
    const {dragStart} = useDraggable();
    return (
        <div className="kanban-item" draggable={true} onDragStart={() => dragStart(item, index, colId)}>
            {children}
            <div className="kanban-item-delete">
                <Button uncolored small iconButton className="my-auto" onClick={onDelete}>
                    <DeleteIcon className="my-auto" style={{width:'1.2em'}}/>
                </Button>
            </div>
        </div>
    )
}
