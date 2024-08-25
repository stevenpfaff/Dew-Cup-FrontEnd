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
                            <NavDropdown.Item href="/Batting">All-Time Batting</NavDropdown.Item>
                            <NavDropdown.Item href="/Pitching">All-Time Pitching</NavDropdown.Item>
                            <NavDropdown.Item href="/Batting/2024">2024 Batting</NavDropdown.Item>
                            <NavDropdown.Item href="/Pitching/2024">2024 Pitching</NavDropdown.Item>
                            <NavDropdown.Item href="/Batting/2023">2023 Batting</NavDropdown.Item>
                            <NavDropdown.Item href="/Pitching/2023">2023 Pitching</NavDropdown.Item>
                            <NavDropdown.Item href="/Batting/2022">2022 Batting</NavDropdown.Item>
                            <NavDropdown.Item href="/Pitching/2022">2022 Pitching</NavDropdown.Item>
                            <NavDropdown.Item href="/Batting/2021">2021 Batting</NavDropdown.Item>
                            <NavDropdown.Item href="/Pitching/2021">2021 Pitching</NavDropdown.Item>
                        </NavDropdown> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
