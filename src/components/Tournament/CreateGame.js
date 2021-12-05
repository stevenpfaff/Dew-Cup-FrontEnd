import React, { Component } from 'react'
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';

class CreateGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            home_team: "",
            home_score: "",
            home_players: "",
            away_team: "",
            away_score: "",
            away_players: ""
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }

    handleHomeTeamChange = (event) => {
        this.setState({
            home_team: event.target.value,
        });
    }

    handleAwayTeamChange = (event) => {
        this.setState({
            away_team: event.target.value,
        });
    }

    handleHomeScoreChange = (event) => {
        this.setState({
            home_score: event.target.value,
        });
    }

    handleAwayScoreChange = (event) => {
        this.setState({
            away_score: event.target.value,
        });
    }

    handleHomePlayersChange = (event) => {
        this.setState({
            home_players: event.target.value,
        });
    }

    handleAwayPlayersChange = (event) => {
        this.setState({
            away_players: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newGame = {
            name: this.state.name,
            home_team: this.state.home_team,
            away_team: this.state.away_team,
            home_score: parseInt(this.state.home_team),
            away_score: parseInt(this.state.away_team),
            home_players: this.state.home_players,
            away_players: this.state.away_players,
        }
        this.props.createGame(newGame)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add Game</h2>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="text" placeholder="Game Tourney" onChange={this.handleNameChange} value={this.state.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="text" placeholder="Home Team" onChange={this.handleHomeTeamChange} value={this.state.home_team} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="number" placeholder="Home Team Score" onChange={this.handleHomeScoreChange} value={this.state.home_score} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="text" placeholder="Home Team Players" onChange={this.handleHomePlayersChange} value={this.state.home_players} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="text" placeholder="Away Team" onChange={this.handleAwayTeamChange} value={this.state.away_team} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="number" placeholder="Away Team Score" onChange={this.handleAwayScoreChange} value={this.state.away_score} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="text" placeholder="Away Team Players" onChange={this.handleAwayPlayersChange} value={this.state.away_players} />
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-success">Create Game</Button>
                <Grid style={{ marginLeft: "850px" }}></Grid>
            </form>
        );
    }
}
export default CreateGame;