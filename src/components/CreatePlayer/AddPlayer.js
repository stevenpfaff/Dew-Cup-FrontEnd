import { useState } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';

const Create = () => {
    const [PlayerName, setPlayerName] = useState('')
    const [HockeyGP, setHockeyGP] = useState()
    const [Goals, setGoals] = useState()
    const [Assists, setAssists] = useState()
    const [Points, setPoints] = useState()
    const [MBGP, setMBGP] = useState()
    const [Hits, setHits] = useState()
    const [Homeruns, setHomeruns] = useState()
    const [RBI, setRBI] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        const player = { PlayerName, HockeyGP, Goals, Assists, Points, MBGP, Hits, Homeruns, RBI }
        fetch(process.env.REACT_APP_API + 'player', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(player)
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2> Register A Player </h2>
            <Form.Group className="mb-3" controlId="PlayerName">
                <Form.Control type="text" placeholder="Player Name" onChange={(event) => setPlayerName(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="HockeyGP">
                <Form.Control type="number" placeholder="Hockey Games Played" onChange={(event) => setHockeyGP(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Goals">
                <Form.Control type="number" placeholder="Goals" onChange={(event) => setGoals(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Assists">
                <Form.Control type="number" placeholder="Assists" onChange={(event) => setAssists(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Points">
                <Form.Control type="number" placeholder="Points" onChange={(event) => setPoints(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="MBGP">
                <Form.Control type="number" placeholder="Minibat Games Played" onChange={(event) => setMBGP(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Hits">
                <Form.Control type="number" placeholder="Hits" onChange={(event) => setHits(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Homeruns">
                <Form.Control type="number" placeholder="Homeruns" onChange={(event) => setHomeruns(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="RBI">
                <Form.Control type="number" placeholder="RBIs" onChange={(event) => setRBI(event.target.value)} />
            </Form.Group>
            <Button type="submit" variant="contained" class="btn btn-success">Create Player</Button>
            <Grid style={{ marginLeft: "850px" }}></Grid>
        </form>
    );
}
export default Create;