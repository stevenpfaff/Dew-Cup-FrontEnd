import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';
import "./Create.css"



const CreateTourney = () => {
    const [TourneyName, setTourneyName] = useState('')
    const [Winner, setWinner] = useState('')
    const [RunnerUp, setRunnerUp] = useState('')
    const [Players, setPlayers] = useState('')
    const [MVP, setMVP] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const tourney = { TourneyName, Winner, RunnerUp, Players, MVP }
        fetch(process.env.REACT_APP_API + 'tourney', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tourney)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Tourney</h2>
            <Form.Group className="mb-3" controlId="TourneyName">
                <Form.Control type="text" placeholder="Tourney Name" onChange={(e) => setTourneyName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Winner">
                <Form.Control type="text" placeholder="Winner" onChange={(e) => setWinner(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="RunnerUp">
                <Form.Control type="text" placeholder="Runner Up" onChange={(e) => setRunnerUp(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Players">
                <Form.Control type="text" placeholder="Players" onChange={(e) => setPlayers(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="MVP">
                <Form.Control type="text" placeholder="MVP" onChange={(e) => setMVP(e.target.value)} />
            </Form.Group>
            <Button type="submit" variant="contained" class="btn btn-success">Create Tourney</Button>
            <Grid style={{ marginLeft: "850px" }}></Grid>
        </form>
    );
}


export default CreateTourney;