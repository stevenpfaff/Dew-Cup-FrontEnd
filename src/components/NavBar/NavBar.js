import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import PBS from '../../Images/PBS.png';
import { Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <img src={PBS} alt="..." height="75" width="75"></img>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Tournaments">Tournament Results</Nav.Link>
                        <NavDropdown title="YouTube Videos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=Qij91wxzoTA&t=70s">Dew Cup II</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=_DZEWvEPLPU">Dew Cup IV</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=lEWD_ukcJzo">Dew Cup V</NavDropdown.Item>
                        </NavDropdown>                          
                    </Nav>
                    <Nav>
                        <Nav.Link href="/Teams">Team Stats</Nav.Link>
                        <Nav.Link href="/Hockey">Hockey Stats</Nav.Link>
                        <NavDropdown title="Minibat Stats" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/Batting">Batting Stats</NavDropdown.Item>
                            <NavDropdown.Item href="/Pitching">Pitching Stats</NavDropdown.Item>
                            <NavDropdown.Item href="/Batting/2024">2024 Batting Stats</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1--Z4rwRCaDi32B6K8KxQHrcy5mvSjfYOzOZjyPbgK20/edit?gid=2146129277#gid=2146129277">2023 Season Stats</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1--Z4rwRCaDi32B6K8KxQHrcy5mvSjfYOzOZjyPbgK20/edit?gid=802527048#gid=802527048">2022 Season Stats</NavDropdown.Item>
                        </NavDropdown> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
