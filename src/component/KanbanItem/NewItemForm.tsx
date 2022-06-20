import Input from "../Input/Input";
import Button from "../Button/Button";
import CheckIcon from "../icons/CheckIcon";
import DeleteIcon from "../icons/DeleteIcon";
import {FormEvent, useState} from "react";

export default function NewItemForm({ onNew, onClose }: {onNew: (value: string) => void, onClose: () => void}){
    const [newItemName, setNewItemName] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!newItemName) return;
        onNew(newItemName);
        setNewItemName('');
        onClose();
    };

    return (
        <form className="kanban-new-item-form" onSubmit={handleSubmit}>
            <div className="d-flex flex-col flex-wrap gap-1">
                <Input type="text" placeholder="New item..." autoFocus required value={newItemName} onChange={e => setNewItemName(e.target.value)}/>
                <div className="d-flex gap-1">
                    <Button className="ml-auto d-flex" small>
                        <span className="my-auto">Valider</span> <CheckIcon className="my-auto" style={{width:'1.2em'}}/>
                    </Button>
                    <Button iconButton uncolored small type="button"
                            onClick={onClose} className="bg-whitesmoke">
                        <DeleteIcon className="my-auto" style={{width:'1.2em'}}/>
                    </Button>
                </div>
            </div>
        </form>
    );
}
