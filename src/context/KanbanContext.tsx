import {createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState} from "react";
import {ColumnType} from "../model/Kanban.model";


interface KanbanContextProps {
    kanban: ColumnType[]
    setKanban: Dispatch<SetStateAction<ColumnType[]>>
}

interface Props {
    collection: ColumnType[],
    onChange?: (collection: ColumnType[]) => void
}

const KanbanContext = createContext<KanbanContextProps>(undefined!);

export const useKanban = () => useContext(KanbanContext);

export default function KanbanContextProvider({children, collection, onChange}: PropsWithChildren<Props>) {
    const [kanban, setKanban] = useState<ColumnType[]>(collection);

    useEffect(() => {
        console.log(kanban);
        onChange?.(kanban);
    },[kanban, onChange]);

    return (
        <KanbanContext.Provider value={{kanban, setKanban}}>
            {children}
        </KanbanContext.Provider>
    );
}
