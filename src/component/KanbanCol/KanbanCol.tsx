import './KanbanCol.css';
import {FormEvent, PropsWithChildren, useState} from "react";
import DeleteIcon from "../icons/DeleteIcon";
import Button from "../Button/Button";
import PlusIcon from "../icons/PlusIcon";
import NewItemForm from "../KanbanItem/NewItemForm";
import {useDraggable} from "../../context/DraggableContext";
import CheckIcon from "../icons/CheckIcon";
import Input from "../Input/Input";
import {useKanban} from "../../context/KanbanContext";

interface KanbanColProps {
    title: string;
    deletable?: boolean;
    id: number;
    onDelete: () => void;
    onNewItem: (value: string) => void;
}

export default function KanbanCol({children,deletable, id, title, onDelete, onNewItem}: PropsWithChildren<KanbanColProps>){
    const [showForm, setShowForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const {drop} = useDraggable();
    const {setKanban} = useKanban();

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(!newTitle) return;
        setKanban(prev => {
            prev[id] = {...prev[id], title: newTitle};
            return [...prev];
        });
        setShowEditForm(false);
    };

    return (
        <div className="kanban-col">
            <div className="kanban-col-title">
                <div className="my-auto flex-1">
                    {showEditForm ? (
                        <form onSubmit={handleSubmit}>
                            <div className="w-full d-flex">
                                <Input required autoFocus className="flex-1" value={newTitle} onChange={e => setNewTitle(e.currentTarget.value)}/>
                            </div>
                            <div className="d-flex">
                                <Button type="submit" title="Enregistrer" uncolored small iconButton>
                                    <CheckIcon className="my-auto" style={{width:'1.2em'}}/>
                                </Button>
                                <Button type="button" title="Enregistrer" uncolored small iconButton onClick={() => {setNewTitle(''); setShowEditForm(false);}}>
                                    <DeleteIcon className="my-auto" style={{width:'1.2em'}}/>
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <div className="d-flex">
                            <div className="flex-1 my-auto cursor-pointer" onClick={() => setShowEditForm(true)}>{title}</div>
                            {deletable && (
                                <Button title="Delete this column" uncolored small iconButton onClick={onDelete}>
                                    <DeleteIcon className="my-auto" style={{width:'1.2em'}}/>
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div
                className="kanban-col-item-container"
                onDrop={e => {
                    e.preventDefault();
                    e.currentTarget.classList.remove('dashed-col');
                    drop(id);
                }}
                onDragEnter={e => e.currentTarget.classList.add('dashed-col')}
                onDragLeave={e => e.currentTarget.classList.remove('dashed-col')}
                onDragOver={e => e.preventDefault()}
            >
                {children}
            </div>
            {
                showForm ? (
                    <NewItemForm onNew={onNewItem} onClose={() => setShowForm(false)}/>
                ) : (
                    <div className="kanban-new-item-form" onClick={() => setShowForm(true)}>
                        new item <PlusIcon className="my-auto" style={{width:'1em'}}/>
                    </div>
                )
            }
        </div>
    );
}

