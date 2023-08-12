import React, { ChangeEvent, useState } from 'react';
import Card from 'react-bootstrap/Card';
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
    const [show, setShow] = useState<boolean>(false);
    var { moveToDone, getTodo, setNewTodo, setCompletedTodo, deleteTodo } = TodoUseContext();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        handleClose();
        var deleteResponse = await deleteTodo(id);
        console.log('deleteResponse: ', deleteResponse)

        // update state of todo task
        getTodo().then((value) => {
            setNewTodo(value)
        })
    }

    return (
        <Alert style={{ display: 'flex', overflowWrap: 'anywhere' }} variant={'primary'}>
            <Form.Check
                key={props._id}
                inline
                name="group1"
                onChange={(event) => { handleClickOnCheckbox(event, props._id) }}
            />
            <div style={{ width: '90%' }}>{props.text}</div>

            <div style={{ width: "10%", display: 'flex' }}>
                <div style={{ display: 'flex', justifyContent: 'center', width: "50%", height: '100%' }}>
                    {/* <i className="bi bi-pencil-square"></i> */}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', width: "50%", height: '100%' }}>
                    <i className="bi bi-trash3" onClick={handleShow}></i>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete To-do</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Click <b>Confirm</b> to Delete</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => { handleClickOnDelete(props._id) }}>
                                Confirm
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>
        </Alert>

    );
}
