import React, { ChangeEvent, useRef, useState, FormEvent } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { TodoUseContext } from './Context';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../style/TodoItem.scss'

export interface ITodoItemProps {
    _id: string,
    text: string
}

export function TodoItem(props: ITodoItemProps) {
    const [showDelete, setShow] = useState<boolean>(false);
    const [showUpdate, setShowUpdate] = useState<boolean>(false);
    const refUpdateInput = useRef<HTMLInputElement>(null)
    const [updateText, setUpdateText] = useState<string>('');

    var { moveToDone, getTodo, setNewTodo, setCompletedTodo, deleteTodo, updateTodo } = TodoUseContext();

    const handleDeleteClose = () => setShow(false);
    const handleDeleteShow = () => setShow(true);

    const handleUpdateClose = () => setShowUpdate(false);
    const handleUpdateShow = (todoText: string) => { setUpdateText(todoText); setShowUpdate(true); }

    const handleClickOnCheckbox = async (event: ChangeEvent<HTMLInputElement>, id: string) => {
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
            console.log(error)
        }
    }

    const handleClickOnDelete = async (id: string) => {
        try {

            await deleteTodo(id);

            // update state of todo task
            getTodo().then((value) => {
                setNewTodo(value)
            })

            handleDeleteClose();
        } catch (error) {
            console.log(error)
        }

    }

    const handleOnChangeOnUpdate = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdateText(event.currentTarget?.value);
    }

    const handleClickOnUpdate = async (props: ITodoItemProps) => {

        try {
            await updateTodo(props._id, updateText);
            // update state of todo task
            getTodo().then((value) => {
                setNewTodo(value)
            })
            handleUpdateClose()
        } catch (error) {
            console.log(error)

        }

    }

    return (
        <Alert className='todoContainer' variant={'primary'}>
            <Form.Check
                key={props._id}
                inline
                name="group1"
                onChange={(event) => { handleClickOnCheckbox(event, props._id) }}
            />
            <div className='todoText' >{props.text}</div>

            <div className='editAndUpdateContainer'>
                <div >
                    <i className="bi bi-pencil-square" onClick={() => { handleUpdateShow(props.text) }}></i>

                    <Modal show={showUpdate} onHide={handleUpdateClose}>
                        <Form onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); handleClickOnUpdate(props) }}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update To-do</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        required
                                        isInvalid={updateText ? false : true}
                                        ref={refUpdateInput}
                                        type="text"
                                        value={updateText}
                                        onChange={handleOnChangeOnUpdate}
                                    />
                                </Form.Group>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleUpdateClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => { handleClickOnUpdate(props) }} >
                                    Update
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </div>

                <div >
                    <i className="bi bi-trash3" onClick={handleDeleteShow}></i>

                    <Modal show={showDelete} onHide={handleDeleteClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete To-do</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Please click the <b>Delete</b> button to confirm action</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleDeleteClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => { handleClickOnDelete(props._id) }}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        </Alert >

    );
}
