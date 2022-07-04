import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';



const CreateTeam = () => {
    const [TeamName, setTeamName] = useState('')
    const [Wins, setWins] = useState()
    const [Losses, setLosses] = useState()
    const [Goals, setGoals] = useState()
    const [GoalsAg, setGoalsAg] = useState()
    const [Runs, setRuns] = useState()
    const [RunsAg, setRunsAg] = useState()
    const [Championships, setChampionships] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const team = { TeamName, Wins, Losses, Goals, GoalsAg, Runs, RunsAg, Championships }
        fetch(process.env.REACT_APP_API + 'team', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(team)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2> Register A Team </h2>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Team Name" onChange={(e) => setTeamName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupDescription">
                <Form.Control type="number" placeholder="Wins" onChange={(e) => setWins(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPrice">
                <Form.Control type="number" placeholder="Losses" onChange={(e) => setLosses(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupRating">
                <Form.Control type="number" placeholder="Goals" onChange={(e) => setGoals(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupRating">
                <Form.Control type="number" placeholder="Goals Against" onChange={(e) => setGoalsAg(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupRating">
                <Form.Control type="number" placeholder="Runs" onChange={(e) => setRuns(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupRating">
                <Form.Control type="number" placeholder="Runs Against" onChange={(e) => setRunsAg(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupRating">
                <Form.Control type="text" placeholder="Championships" onChange={(e) => setChampionships(e.target.value)} />
            </Form.Group>
            <Button type="submit" variant="contained" class="btn btn-success">Create Team</Button>
            <Grid style={{ marginLeft: "850px" }}></Grid>
        </form>
    );
}


export default CreateTeam;