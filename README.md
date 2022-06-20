# React kanban

## Usage

```typescript jsx
import {Kanban} from "./component";
import {useState} from "react";
import {ColumnType} from "./model/Kanban.model";

const initialCollection: ColumnType[] = [
    {
        title: 'backlog',
        items: [
            {content : 'item 1'},
            {content : 'item 2'}
        ]
    },
    {
        title: 'to do',
        items: [
            {content : 'item 3'},
            {content : 'item 4'},
            {content : 'item 5'}
        ]
    },
    {
        title: 'in progress',
        items: [
            {content : 'item 6'}
        ]
    },
    {
        title: 'done',
        items: []
    }
];

export default function App(){
    const [collection, setCollection] = useState<ColumnType[]>(initialCollection);
    return (
        <div>
            <Kanban collection={collection}/>
        </div>
    );
}
```
