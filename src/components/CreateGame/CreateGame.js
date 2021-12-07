import React, { Component } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';




class CreateGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            away_team: "",
            away_players: "",
            away_score: "",
            home_team: "",
            home_players: "",
            home_score: "",
            game: "",
            type: "",
            file: ""
        };
    }

    handleTypeChange = (event) => {
        console.log("handleNameChange", event)
        this.setState({
            type: event.target.value,
        });
    }
    handleGameChange = (event) => {
        this.setState({
            game: event.target.value,
        });
    }
    handleAwayTeamChange = (event) => {
        this.setState({
            away_team: event.target.value,
        });
    }
    handleAwayPlayerChange = (event) => {
        this.setState({
            away_players: event.target.value,
        });
    }

    handleAwayScoreChange = (event) => {
        this.setState({
            away_score: event.target.value,
        });
    }

    handleHomeTeamChange = (event) => {
        this.setState({
            home_team: event.target.value,
        });
    }

    handleHomePlayerChange = (event) => {
        this.setState({
            home_players: event.target.value,
        });
    }

    handleHomeScoreChange = (event) => {
        this.setState({
            home_score: event.target.value,
        });
    }

    fileSelected = event => {
        let me = this
        var input = event.target
        var reader = new FileReader();
        reader.onload = function () {
            var dataURL = reader.result;
            me.setState({
                file: dataURL
            });
        };
        reader.readAsDataURL(input.files[0]);
    };

    handleSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
        const newGame = {
            game: this.state.game,
            type: this.state.type,
            away_team: this.state.away_team,
            away_players: this.state.away_players,
            away_score: parseInt(this.state.away_score),
            home_team: this.state.home_team,
            home_players: this.state.home_players,
            home_score: parseInt(this.state.home_score),
            file: this.state.file
        }
        console.log('Create Submit', this.props, newGame)
        this.props.createNewGame(newGame);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Enter Game Results</h2>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="text" placeholder="Tournament" onChange={this.handleGameChange} value={this.state.game} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="text" placeholder="Type" onChange={this.handleTypeChange} value={this.state.type} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="text" placeholder="Away Team" onChange={this.handleAwayTeamChange} value={this.state.away_team} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="text" placeholder="Away Players" onChange={this.handleAwayPlayerChange} value={this.state.away_players} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Away Score" onChange={this.handleAwayScoreChange} value={this.state.away_score} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="text" placeholder="Home Team" onChange={this.handleHomeTeamChange} value={this.state.home_team} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="text" placeholder="Home Players" onChange={this.handleHomePlayerChange} value={this.state.home_players} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Home Score" onChange={this.handleHomeScoreChange} value={this.state.home_score} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="file" accept='image/*' onChange={this.fileSelected} />
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-success">Add Game</Button>
                <Grid style={{ marginLeft: "850px" }}></Grid>
            </form>
        );
    }
}

export default CreateGame;