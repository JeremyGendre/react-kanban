import './KanbanItem.css';
import {PropsWithChildren} from "react";

export default function KanbanItem({children}: PropsWithChildren<{}>){
    return (
        <div>
            {children}
        </div>
    )
}
