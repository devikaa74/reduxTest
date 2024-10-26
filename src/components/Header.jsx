
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Navbar.Brand href="/" className="brand-title">FOOD STORE</Navbar.Brand>
            <div className="ms-auto d-flex ">

                <Nav className="ml-auto">
                    <Nav.Link href="/" className="nav-link">
                        <button className="nav-button">Home</button>
                    </Nav.Link>
                    <Nav.Link href="/contact" className="nav-link">
                        <button className="nav-button">Contact</button>
                    </Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
};

export default Header;
