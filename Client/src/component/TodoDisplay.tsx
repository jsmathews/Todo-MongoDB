import { TodoOptionsTab } from "./TodoOptionsTab";

export function TodoDisplay() {

    return (
        <div style={{ width: '100%', height: '90%', boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)', borderRadius: '10px' }}>
            <TodoOptionsTab></TodoOptionsTab>
            <div style={{ width: '100%', height: '100%' }}>

            </div>
        </div>

    );
}
