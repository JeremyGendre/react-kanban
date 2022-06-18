import {Kanban} from "./component";

export default function App(){
    return (
        <div>
            <Kanban>
                <Kanban.Col title="test"/>
                <Kanban.Col title="test2">
                    <Kanban.Item>item1</Kanban.Item>
                    <Kanban.Item>item2</Kanban.Item>
                </Kanban.Col>
                <Kanban.Col title="test3"/>
            </Kanban>
        </div>
    );
}
