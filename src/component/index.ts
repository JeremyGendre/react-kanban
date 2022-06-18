import KanbanContainer from './Kanban/Kanban';
import KanbanCol from './KanbanCol/KanbanCol';
import KanbanItem from "./KanbanItem/KanbanItem";

export const Kanban = Object.assign(KanbanContainer,{ Col: KanbanCol, Item: KanbanItem });


