import Dropdown from 'react-bootstrap/Dropdown';
import { TodoUseContext } from './Context';

export function TodoOptionsTab() {

    var { toggleTodo, setToggleTodo } = TodoUseContext();

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', width: '100%', height: '10%' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                {toggleTodo ? 'To-do' : 'Completed'}
            </div>

            <Dropdown>
                <Dropdown.Toggle >
                    Option
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => { setToggleTodo(true) }}>Show Todo</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setToggleTodo(false) }}>Show Completed</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
