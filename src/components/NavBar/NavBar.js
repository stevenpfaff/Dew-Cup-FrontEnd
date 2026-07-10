import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import PBS from '../../Images/PBS.png';
import { Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#013a68' }} variant="dark">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="justify-content-center"
                >
                    <img src={PBS} alt="PBS Logo" height="75" width="75" />
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Tournaments">Tournament Results</Nav.Link>
                        <NavDropdown title="Minibat Stats" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/batting">All-Time Batting</NavDropdown.Item>
                            <NavDropdown.Item href="/pitching">All-Time Pitching</NavDropdown.Item>
                            <NavDropdown.Item href="/batting/2026">2026 Batting</NavDropdown.Item>
                            <NavDropdown.Item href="/batting/2025">2025 Batting</NavDropdown.Item>
                            <NavDropdown.Item href="/batting/2024">2024 Batting</NavDropdown.Item>
                            <NavDropdown.Item href="/batting/2023">2023 Batting</NavDropdown.Item>
                            <NavDropdown.Item href="/batting/2022">2022 Batting</NavDropdown.Item>
                            <NavDropdown.Item href="/batting/2021">2021 Batting</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="YouTube Videos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=Qij91wxzoTA&t=70s">
                                Dew Cup II
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=_DZEWvEPLPU">
                                Dew Cup IV
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=lEWD_ukcJzo">
                                Dew Cup V
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;