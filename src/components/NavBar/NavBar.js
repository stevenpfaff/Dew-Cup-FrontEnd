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
                        <NavDropdown title="Team Stats" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/teams">Team Stats</NavDropdown.Item>
                            <NavDropdown.Item href="/tournaments">Tournament Results</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Minibat Stats" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/batting">All-Time Stats</NavDropdown.Item>
                            <NavDropdown.Item href="/yearly/2026">2026 Stats</NavDropdown.Item>
                            <NavDropdown.Item href="/yearly/2025">2025 Stats</NavDropdown.Item>
                            <NavDropdown.Item href="/yearly/2024">2024 Stats</NavDropdown.Item>
                            <NavDropdown.Item href="/yearly/2023">2023 Stats</NavDropdown.Item>
                            <NavDropdown.Item href="/yearly/2022">2022 Stats</NavDropdown.Item>
                            <NavDropdown.Item href="/yearly/2021">2021 Stats</NavDropdown.Item>
                            <NavDropdown.Item href="/venues">Venue Data</NavDropdown.Item>
                            <NavDropdown.Item href="/records">Season Records</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/hockey">Hockey Stats</Nav.Link>
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