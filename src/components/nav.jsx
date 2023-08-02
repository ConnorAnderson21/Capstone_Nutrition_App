import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth, useUser, useSigninCheck} from "reactfire";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import Button from 'react-bootstrap/Button';


import { useEffect } from "react";



export function MyNav(props) {
    const auth=useAuth();
    const { data:user } = useUser();
    const { signinStatus } = useSigninCheck();

    const login = async () => {
        let provider = new GoogleAuthProvider();
        let u = await signInWithPopup(auth, provider);
        console.log(u);
        return u
    }
    const logout = async () => {
        await signOut(auth);
        
    }

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

                            
                            
                            <Button id="loginButton" variant="success" onClick={login}>Log In</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

