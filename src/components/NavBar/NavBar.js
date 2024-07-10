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
                        <NavDropdown title="Tournament Results" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1--Z4rwRCaDi32B6K8KxQHrcy5mvSjfYOzOZjyPbgK20/edit?gid=0#gid=0">Buddy Wood Memorial I</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1--Z4rwRCaDi32B6K8KxQHrcy5mvSjfYOzOZjyPbgK20/edit?gid=1137722889#gid=1137722889">Buddy Wood Memorial II</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1--Z4rwRCaDi32B6K8KxQHrcy5mvSjfYOzOZjyPbgK20/edit?gid=66455220#gid=66455220">Buddy Wood Memorial III</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1-S9klqwfLvodu_MMg5HCc9CZSUmf3a7aA6NT9dRb7ro/edit?gid=1652233830#gid=1652233830">Code Red Classic I</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1--Z4rwRCaDi32B6K8KxQHrcy5mvSjfYOzOZjyPbgK20/edit?gid=1133740162#gid=1133740162">Coors Clash I</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1--Z4rwRCaDi32B6K8KxQHrcy5mvSjfYOzOZjyPbgK20/edit?gid=520397780#gid=520397780">Coors Clash II</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1--Z4rwRCaDi32B6K8KxQHrcy5mvSjfYOzOZjyPbgK20/edit?gid=646347205#gid=646347205">Coors Clash III</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1-S9klqwfLvodu_MMg5HCc9CZSUmf3a7aA6NT9dRb7ro/edit?gid=2068213351#gid=2068213351">Dew Cup I</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1-S9klqwfLvodu_MMg5HCc9CZSUmf3a7aA6NT9dRb7ro/edit?gid=1925577430#gid=1925577430">Dew Cup II</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1-S9klqwfLvodu_MMg5HCc9CZSUmf3a7aA6NT9dRb7ro/edit?gid=554011796#gid=554011796">Dew Cup III</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1-S9klqwfLvodu_MMg5HCc9CZSUmf3a7aA6NT9dRb7ro/edit?gid=1203846632#gid=1203846632">Dew Cup IV</NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1-S9klqwfLvodu_MMg5HCc9CZSUmf3a7aA6NT9dRb7ro/edit?gid=469599973#gid=469599973">Dew Cup V</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="YouTube Videos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=Qij91wxzoTA&t=70s">Dew Cup III</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=_DZEWvEPLPU">Dew Cup IV</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.youtube.com/watch?v=lEWD_ukcJzo">Dew Cup V</NavDropdown.Item>
                        </NavDropdown>                          
                    </Nav>
                    <Nav>
                        <Nav.Link href="/Teams">Team Stats</Nav.Link>
                        <Nav.Link href="/hockeystats">All-Time Hockey Stats</Nav.Link>
                        <Nav.Link href="/minibatstats">All-Time Minibat Stats</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
