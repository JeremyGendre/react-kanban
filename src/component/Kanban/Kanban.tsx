import './Kanban.css';
import {PropsWithChildren} from "react";

interface KanbanProps {}

export default function Kanban({children}:PropsWithChildren<KanbanProps>){
    return (
        <div className="kanban">
            {children}
        </div>
    );
}
