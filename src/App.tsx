import {Kanban} from "./component";
import {useState} from "react";
import {ColumnType} from "./model/Kanban.model";

const initialCollection: ColumnType[] = [
    {
        title: 'test',
        items: [
            {content : 'item 1'},
            {content : 'item 2'}
        ]
    },
    {
        title: 'test2',
        items: [
            {content : 'item 3'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 4'},
            {content : 'item 5'}
        ]
    },
    {
        title: 'test3',
        items: [
            {content : 'item 6'}
        ]
    }
];

export default function App(){
    const [collection, setCollection] = useState<ColumnType[]>(initialCollection);
    return (
        <div className="h-screen">
            <Kanban collection={collection}/>
        </div>
    );
}
