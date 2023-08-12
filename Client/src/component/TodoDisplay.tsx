import { TodoOptionsTab } from "./TodoOptionsTab";
import { TodoItem } from "./TodoItem";
import { DoneItem } from "./DoneItem";
import { TodoUseContext } from "./Context";

export function TodoDisplay() {
    var { newTodo, toggleTodo, completedTodo } = TodoUseContext()

    var todo = newTodo.map((value) => {
        return (<TodoItem key={value._id} _id={value._id} text={value.text}></TodoItem>)
    })

    var done = completedTodo.map((value) => {
        console.log(value)
        return (<DoneItem key={value._id} _id={value._id} text={value.text}></DoneItem>)
    })



    return (
        <div style={{ width: '100%', height: '90%', boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)', borderRadius: '10px' }}>
            <TodoOptionsTab></TodoOptionsTab>
            {
                toggleTodo ? (
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '90%', overflowY: 'scroll' }}>
                        {todo}
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '90%', overflowY: 'scroll' }}>
                        {/* <p>Hello</p> */}
                        {done}
                    </div>
                )
            }
        </div>

    );
}
