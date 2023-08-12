import React, { ChangeEvent, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { TodoUseContext } from './Context';
import '../style/TodoItem.scss'

export interface IDoneItemProps {
    _id: string,
    text: string
}

export function DoneItem(props: IDoneItemProps) {
    var { setNewTodo, setCompletedTodo, moveToTodo, getDone } = TodoUseContext();
    const [isChecked, setIsChecked] = useState<boolean>(true);

    const handleClickOnCheckbox = async (event: ChangeEvent<HTMLInputElement>, id: string) => {

        try {
            if (isChecked) {
                setIsChecked(false);

                // update state of todo task
                var todo = await moveToTodo(id);
                setNewTodo(prevItems => [...prevItems, todo])

                // update state of done task
                getDone().then((value) => {
                    setCompletedTodo(value)
                })
            }
        } catch (error) {

        }


    }

    return (

        <Alert style={{ display: 'flex', overflowWrap: 'anywhere' }} variant={'warning '}>
            <Form.Check
                key={props._id}
                inline
                name="group1"
                checked={isChecked}
                onChange={(event) => { handleClickOnCheckbox(event, props._id) }}
            />
            <div style={{ width: '90%' }}><del>{props.text}</del></div>

        </Alert>

    );
}
