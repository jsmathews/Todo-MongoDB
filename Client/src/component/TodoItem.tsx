import React, { ChangeEvent } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { TodoUseContext } from './Context';
import '../style/TodoItem.scss'

export interface ITodoItemProps {
    _id: string,
    text: string
}

export function TodoItem(props: ITodoItemProps) {
    var { moveToDone, getTodo, setNewTodo, setCompletedTodo } = TodoUseContext()

    const handleClickOnCheckbox = async (event: ChangeEvent<HTMLInputElement>, id: string) => {
        // console.log(event.currentTarget.checked)
        // console.log(id)
        try {
            if (event.currentTarget.checked) {
                // update state of done task
                var doneTodo = await moveToDone(id);
                setCompletedTodo(prevItems => [...prevItems, doneTodo])

                // update state of todo task
                getTodo().then((value) => {
                    setNewTodo(value)
                })
            }
        } catch (error) {

        }


    }

    return (
        // <div key={props._id} style={{ display: 'flex', flexDirection: 'row' }}>
        //     <input type="checkbox" name="" id="" />
        //     <div>{props.text}</div>
        // </div>

        // <Card body>{props.text}</Card>

        // <div className='todoItemContainer'>
        //     <div className='checkboxContainer'>
        //         <input type="checkbox" name="" id="" />
        //     </div>

        //     <div className='todoTextContainer' >
        //         {props.text}
        //     </div>

        //     <div className='editAndUpdateContainer'>
        //         <div><i className="bi bi-pencil-square"></i></div>
        //         <div><i className="bi bi-trash3"></i></div>
        //     </div>
        // </div>

        <Alert style={{ display: 'flex', overflowWrap: 'anywhere' }} variant={'info'}>
            <Form.Check
                key={props._id}
                inline
                name="group1"
                onChange={(event) => { handleClickOnCheckbox(event, props._id) }}
            />
            <div style={{ width: '90%' }}>{props.text}</div>

            <div style={{ width: "10%", display: 'flex' }}>
                <div style={{ display: 'flex', justifyContent: 'center', width: "50%", height: '100%' }}>
                    <i className="bi bi-pencil-square"></i>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', width: "50%", height: '100%' }}>
                    <i className="bi bi-trash3"></i>
                </div>

            </div>
        </Alert>

    );
}
