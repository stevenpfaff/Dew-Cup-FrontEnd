import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import PBS from "../../Images/PBS.png"



function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <img src={PBS} alt="..." height="75" width="75"></img>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Tournament Results</Nav.Link>
                        <Nav.Link href="/Games">Game Results</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="/Teams">Team Stats</Nav.Link>
                        <Nav.Link href="/hockeystats">Hockey Stats</Nav.Link>
                        <Nav.Link href="/mbstats">Minibat Stats</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}
export default NavBar;