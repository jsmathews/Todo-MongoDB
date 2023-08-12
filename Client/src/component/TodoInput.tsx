import React, { ChangeEvent, FormEvent, useRef } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { TodoUseContext } from './Context';

export function TodoInput() {

    var { saveTodo, setNewTodo } = TodoUseContext()
    var todoOnChange = useRef<string>()
    var refInputElement = useRef<HTMLInputElement>(null)
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        todoOnChange.current = event.currentTarget.value;
    }

    const clickOnAddbutton = async () => {
        try {
            if (todoOnChange.current) {
                var newTodoWithId = await saveTodo(todoOnChange.current);
                setNewTodo(prevItems => [...prevItems, newTodoWithId]);

                if (refInputElement.current) {
                    todoOnChange.current = ''
                    refInputElement.current.value = ''
                }
            }
        } catch (error) {

        }
    }

    return (
        <Form onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); clickOnAddbutton() }}>
            <InputGroup size="lg" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)', borderRadius: '10px' }} >
                <Form.Control
                    ref={refInputElement}
                    placeholder="To-do"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleOnChange}
                />
                <Button variant="primary" onClick={clickOnAddbutton}><i className="bi bi-plus-lg"></i></Button>{' '}
            </InputGroup>
        </Form>
    );
}