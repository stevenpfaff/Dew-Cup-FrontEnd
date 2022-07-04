import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';



const AddGame = () => {
    const [HomeTeam, setHomeTeam] = useState('')
    const [HomeScore, setHomeScore] = useState()
    const [AwayTeam, setAwayTeam] = useState('')
    const [AwayScore, setAwayScore] = useState()
    const [Category, setCategory] = useState('')
    const [Series, setSeries] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const game = { HomeTeam, HomeScore, AwayTeam, AwayScore, Category, Series }
        fetch(process.env.REACT_APP_API + 'game', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(game)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Game</h2>
            <Form.Group className="mb-3" controlId="HomeTeam">
                <Form.Control type="text" placeholder="Home Team" onChange={(e) => setHomeTeam(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="HomeScore">
                <Form.Control type="number" placeholder="Home Score" onChange={(e) => setHomeScore(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AwayTeam">
                <Form.Control type="text" placeholder="AwayTeam" onChange={(e) => setAwayTeam(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="AwayScore">
                <Form.Control type="number" placeholder="Away Score" onChange={(e) => setAwayScore(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Category">
                <Form.Control type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Series">
                <Form.Control type="text" placeholder="Series" onChange={(e) => setSeries(e.target.value)} />
            </Form.Group>
            <Button type="submit" variant="contained" class="btn btn-success">Add Game</Button>
            <Grid style={{ marginLeft: "850px" }}></Grid>
        </form>
    );
}


export default AddGame;