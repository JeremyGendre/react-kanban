import Button from "../Button/Button";
import {ColumnType} from "../../model/Kanban.model";
import {FormEvent, useEffect, useRef, useState} from "react";

interface Props {
    colDeleting: number|null;
    options: ColumnType[];
    onConfirm: (newColIndex: number) => void;
};

export default function RemoveColSelect({options, colDeleting, onConfirm} : Props){
    const [selection, setSelection] = useState<string|null>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(!selection) return;
        onConfirm(parseInt(selection));
    };

    useEffect(() => {
        setSelection(selectRef.current!.item(0)?.value ?? null)
    },[]);

    return (
        <form className="modal-content" onSubmit={handleSubmit}>
            <h2 className="text-center">Column deletion</h2>
            <div className="mb-2">The column that you want to delete is not empty. In which remaining column do you want to put the items ?</div>
            <select ref={selectRef} className="selectpicker" onChange={e => setSelection(e.currentTarget.value)}>
                {options.map((col,index) => {
                    if(colDeleting === index) return null;
                    return <option key={`option-col-${index}`} value={index}>{col.title}</option>
                })}
            </select>
            <Button disabled={!selection} className="mx-auto mt-2" type="submit">Confirmer</Button>
        </form>
    );
}
