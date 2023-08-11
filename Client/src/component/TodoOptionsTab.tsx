// import * as React from 'react';
import Nav from 'react-bootstrap/Nav';

export function TodoOptionsTab() {
    return (
        <div style={{ width: '100%' }}>
            <Nav
                className='justify-content-end'
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link >
                        <i className="bi bi-three-dots" style={{ fontSize: '15px' }}></i>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
