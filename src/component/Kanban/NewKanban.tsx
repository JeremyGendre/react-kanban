import {ColumnType} from "../../model/Kanban.model";
import {FormEvent, useState} from "react";
import PlusIcon from "../icons/PlusIcon";
import Button from "../Button/Button";

interface NewKanbanProps {
    onNew: (column: ColumnType) => void
}

export default function NewKanban({onNew}:NewKanbanProps){
    const [title, setTitle] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleNewColumn = (e:FormEvent) => {
        e.preventDefault();
        const newColumn: ColumnType = { title, items: [] };
        onNew(newColumn);
        setTitle('');
        setShowForm(false);
    };

    if(!showForm) return (
        <div className="d-flex align-items-center">
            <Button type="button" onClick={() => setShowForm(true)}>
                add column <PlusIcon className="my-auto" style={{width:'1em'}}/>
            </Button>
        </div>
    );

    return (
        <form onSubmit={handleNewColumn} className="d-flex">
            <div className="my-auto d-flex flex-col">
                <div>
                    <input value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Ajouter</button>
                    <button type="button" onClick={() => setShowForm(false)}>Annuler</button>
                </div>
            </div>
        </form>
    );
}
