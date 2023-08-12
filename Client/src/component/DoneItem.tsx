import React, { ChangeEvent } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { TodoUseContext } from './Context';
import '../style/TodoItem.scss'

export interface IDoneItemProps {
    _id: string,
    text: string
}

export function DoneItem(props: IDoneItemProps) {
    var { moveToDone, getTodo, setNewTodo, setCompletedTodo } = TodoUseContext()

    const handleClickOnCheckbox = async (event: ChangeEvent<HTMLInputElement>, id: string) => {
        // // console.log(event.currentTarget.checked)
        // // console.log(id)
        // try {
        //     if (event.currentTarget.checked) {
        //         // update state of done task
        //         var doneTodo = await moveToDone(id);
        //         setCompletedTodo(prevItems => [...prevItems, doneTodo])

        //         // update state of todo task
        //         getTodo().then((value) => {
        //             setNewTodo(value)
        //         })
        //     }
        // } catch (error) {

        // }


    }

    return (

        <Alert style={{ display: 'flex', overflowWrap: 'anywhere' }} variant={'info'}>
            <Form.Check
                key={props._id}
                inline
                name="group1"
                checked={true}
                onChange={(event) => { handleClickOnCheckbox(event, props._id) }}
            />
            <div style={{ width: '90%' }}>{props.text}</div>

        </Alert>

    );
}
