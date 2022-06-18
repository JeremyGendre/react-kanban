import './Kanban.css';
import KanbanCol from "../KanbanCol/KanbanCol";
import {Collection} from "../../model/KanbanModels";

interface KanbanProps {
    collections: Collection[];
}

export default function Kanban({collections}:KanbanProps){
    return (
        <div className="kanban">
            {collections.map((collection, index) => (
                <KanbanCol key={`kanban-col-${index}`}/>
            ))}
        </div>
    );
}
