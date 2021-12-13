import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import DewCup from "../../Images/DewCup.png"



function NavBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Container>
                <img src={DewCup} alt="..." height="75" width="75"></img>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Tourneys">Tournaments</Nav.Link>
                        <Nav.Link href="/Games">Games</Nav.Link>
                        <Nav.Link href="/Teams">Teams</Nav.Link>
                        <Nav.Link href="/Players">Players</Nav.Link>
                    </Nav>
                    <Nav>
                        {props.user && <Nav.Link href="/CreatePlayer">Create Player</Nav.Link>}
                        {props.user && <Nav.Link href="/CreateTeam">Create Team</Nav.Link>}
                        {props.user && <Nav.Link href="/CreateTourney">Create Tournament</Nav.Link>}
                        {props.user && <Nav.Link href="/CreateGame">Create Game</Nav.Link>}
                        {!props.user && <Nav.Link onClick={props.userSignIn} href="/login">Login</Nav.Link>}
                        {!props.user && <Nav.Link onClick={props.createNewUser} href="/register">Register</Nav.Link>}
                        {props.user && <Nav.Link onClick={props.logOutUser} href="/login">Logout</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;