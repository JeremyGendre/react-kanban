import './Kanban.css';
import {ColumnType} from "../../model/Kanban.model";
import KanbanCol from "../KanbanCol/KanbanCol";
import KanbanItem from "../KanbanItem/KanbanItem";
import {useEffect, useState} from "react";
import NewKanban from "./NewKanban";
import DraggableContextProvider, {useDraggable} from "../../context/DraggableContext";
import Modal from "../Modal/Modal";
import RemoveColSelect from "./RemoveColSelect";
import KanbanContextProvider, {useKanban} from "../../context/KanbanContext";

interface OnChangeInterface{
    onChange?: (collection: ColumnType[]) => void
}

export interface KanbanProps extends OnChangeInterface{
    collection: ColumnType[]
}

function KanbanContainer({onChange = () => {}}:OnChangeInterface){
    const [colDeleting, setColDeleting] = useState<number|null>(null);
    const {kanban, setKanban} = useKanban();
    const {dropObject} = useDraggable();

    useEffect(() => {
        if(!dropObject) return;
        setKanban(prev => prev.map((col, colIndex) => {
            if(colIndex === dropObject.source) return {...col, items: col.items.filter((i, iIndex) => iIndex !== dropObject.itemIndex)};
            if(colIndex === dropObject.target) return {...col, items: [...col.items, dropObject.item]};
            return col;
        }))
    }, [dropObject]);

    const handleDeleteCol = (column: ColumnType, index: number) => {
        if(column.items.length > 0){
            setColDeleting(index);
        }else{
            deleteCol(index);
        }
    };

    const deleteCol = (index:number) => {
        setKanban(prev => prev.filter((col, colIndex) => colIndex !== index))
    };

    return (
        <div className="kanban">
            {kanban.map((column, index) => (
                <KanbanCol
                    key={`kanban-col-${index}-${column.title}`}
                    id={index}
                    deletable={kanban.length > 1}
                    title={column.title}
                    onDelete={() => handleDeleteCol(column, index)}
                    onNewItem={(value:string) => {
                        setKanban(prev => prev.map((col,colIndex) => {
                            if(colIndex === index) return {...col, items: [...col.items, {content: value}]};
                            return col;
                        }))
                    }}
                >
                    {column.items.map((item, itemIndex) => (
                        <KanbanItem
                            key={`kanban-col-${index}-item-${itemIndex}`}
                            item={item}
                            index={itemIndex}
                            colId={index}
                            onDelete={() => {
                                setKanban(prev => prev.map((col,colIndex) => {
                                    if(colIndex === index) return {...col, items: col.items.filter((i,iIndex) => iIndex !== itemIndex)};
                                    return col;
                                }))
                            }}
                        >
                            {item.content}
                        </KanbanItem>
                    ))}
                </KanbanCol>
            ))}
            <Modal opened={colDeleting !== null} onClose={() => setColDeleting(null)}>
                <RemoveColSelect
                    colDeleting={colDeleting}
                    options={kanban}
                    onConfirm={(newColIndex: number) => {
                        setKanban(prev => {
                            const deletingCol = prev[colDeleting!];
                            let newCol = prev[newColIndex];
                            newCol = {...newCol, items: [...newCol.items, ...deletingCol.items]};
                            prev[newColIndex] = newCol;
                            prev.splice(colDeleting!, 1);
                            return [...prev];
                        });
                        setColDeleting(null);
                    }}
                />
            </Modal>
            <NewKanban onNew={(newCol) => setKanban(prev => [...prev, newCol])}/>
        </div>
    );
}

export default function Kanban({collection, onChange = () => {}}:KanbanProps){
    return (
        <KanbanContextProvider collection={collection}>
            <DraggableContextProvider>
                <KanbanContainer onChange={onChange}/>
            </DraggableContextProvider>
        </KanbanContextProvider>
    )
}
