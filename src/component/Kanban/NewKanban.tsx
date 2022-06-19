import {ColumnType} from "../../model/Kanban.model";
import {FormEvent, useState} from "react";
import PlusIcon from "../icons/PlusIcon";
import Button from "../Button/Button";
import Input from "../Input/Input";

interface NewKanbanProps {
    onNew: (column: ColumnType) => void
}

export default function NewKanban({onNew}:NewKanbanProps){
    const [title, setTitle] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleNewColumn = (e:FormEvent) => {
        e.preventDefault();
        if(!title) return;
        const newColumn: ColumnType = { title, items: [] };
        onNew(newColumn);
        setTitle('');
        setShowForm(false);
    };

    if(!showForm) return (
        <div>
            <Button type="button" onClick={() => setShowForm(true)}>
                add column <PlusIcon className="my-auto" style={{width:'1em'}}/>
            </Button>
        </div>
    );

    return (
        <form onSubmit={handleNewColumn} className="d-flex flex-col gap-1">
            <div>
                <Input autoFocus required value={title} placeholder="Column name" onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="d-flex gap-1">
                <Button small type="submit">Ajouter</Button>
                <Button small type="button" onClick={() => setShowForm(false)}>Annuler</Button>
            </div>
        </form>
    );
}
