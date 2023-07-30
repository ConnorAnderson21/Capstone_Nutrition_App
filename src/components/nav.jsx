import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';



import { useEffect } from "react";



export function MyNav(props) {
    return (
        <div>
            
            <Navbar id="navbar" expand="lg" className="bg-body-tertiary">
                <Container id="navbar">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={props.icons[Math.floor(Math.random() * props.icons.length)]}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Macro Manager
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/MacroCalc">Calculate Macros</Nav.Link>
                            <Nav.Link href="/FoodFinder">Food Finder</Nav.Link>

                            <Nav.Link href="/MyMacros">My Macros</Nav.Link>

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
            </Navbar>
        </div>
    );
}

