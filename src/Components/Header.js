import React, {Component} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import '../App.css';

class Header extends Component {
    render() {
        return (
            <Navbar className="topNav navbar-dark" expand="lg">
                <Container >
                    <Navbar.Brand href="/" className="text-white"><h1>Cordley Elementary PTA</h1></Navbar.Brand>
                    {/* <Container className="justify-content-end text-end"  >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">

                    <Nav >
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-white">Link</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Container> */}
                </Container>
            </Navbar>

        );
    }
}

export default Header;