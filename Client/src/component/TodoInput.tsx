import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export function TodoInput() {


    return (
        <Form >
            <InputGroup size="lg" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)', borderRadius: '10px' }} >
                <Form.Control
                    placeholder="To-do"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                <Button variant="primary"><i className="bi bi-plus-lg"></i></Button>{' '}
            </InputGroup>
        </Form>
    );
}