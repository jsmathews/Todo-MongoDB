import { TodoOptionsTab } from "./TodoOptionsTab";
import { TodoItem } from "./TodoItem";
import { DoneItem } from "./DoneItem";
import { TodoUseContext } from "./Context";
import "../style/TodoDisplay.scss"

export function TodoDisplay() {
    var { newTodo, toggleTodo, completedTodo } = TodoUseContext()

    var todo = newTodo.map((value) => {
        return (<TodoItem key={value._id} _id={value._id} text={value.text}></TodoItem>)
    })

    var done = completedTodo.map((value) => {
        return (<DoneItem key={value._id} _id={value._id} text={value.text}></DoneItem>)
    })



    return (
        <div className="todoDisplayContainer" >
            <TodoOptionsTab></TodoOptionsTab>
            {
                toggleTodo ? (
                    <div className="todoItemContainer">
                        {todo}
                    </div>
                ) : (
                    <div className="todoItemContainer">
                        {done}
                    </div>
                )
            }
        </div>

    );
}
