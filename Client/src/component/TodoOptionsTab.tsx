// import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { TodoUseContext } from './Context';

export function TodoOptionsTab() {

    var { toggleTodo, setToggleTodo } = TodoUseContext();

    var handleClickOnToggle = () => {
        setToggleTodo(!toggleTodo)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'end', padding: '8px', width: '100%', height: '10%' }}>


            <Button variant="primary" onClick={handleClickOnToggle}>
                {toggleTodo ? 'Show Completed' : 'Show Todo'}
            </Button>{' '}
            {/* <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Dropdown"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}


            {/* <Dropdown>
                <Dropdown.Toggle >
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item >Another action</Dropdown.Item>
                    <Dropdown.Item >Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}


            {/* <Nav className='justify-content-end'>
                <Nav.Item>
                    <Nav.Link >
                        <i className="bi bi-three-dots" style={{ fontSize: '15px' }}></i>
                    </Nav.Link>
                </Nav.Item>
            </Nav> */}
        </div>
    );
}
