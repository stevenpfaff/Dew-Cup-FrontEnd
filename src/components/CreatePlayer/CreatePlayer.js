import React, { Component } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';
import "./CreatePlayer.css"



class CreatePlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            games_played: "",
            goals: "",
            assists: "",
            info: "",
            file: "",
            minibat_games_played: "",
            at_bats: "",
            hits: "",
            homeruns: "",
            batting_average: ""
        };
    }

    handleNameChange = (event) => {
        console.log("handleNameChange", event)
        this.setState({
            name: event.target.value,
        });
    }
    handleGameChange = (event) => {
        this.setState({
            games_played: event.target.value,
        });
    }
    handleGoalsChange = (event) => {
        this.setState({
            goals: event.target.value,
        });
    }
    handleAssistsChange = (event) => {
        this.setState({
            assists: event.target.value,
        });
    }

    handleMiniBatChange = (event) => {
        this.setState({
            minibat_games_played: event.target.value,
        });
    }

    handleAtBatChange = (event) => {
        this.setState({
            at_bats: event.target.value,
        });
    }

    handleHitsChange = (event) => {
        this.setState({
            hits: event.target.value,
        });
    }

    handleHomerunChange = (event) => {
        this.setState({
            homeruns: event.target.value,
        });
    }

    handleAverageChange = (event) => {
        this.setState({
            batting_average: event.target.value,
        });
    }

    handleInfoChange = (event) => {
        console.log("handleInfoChange", event)
        this.setState({
            info: event.target.value,
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
        const newPlayer = {
            name: this.state.name,
            games_played: parseInt(this.state.games_played),
            goals: parseInt(this.state.goals),
            assists: parseInt(this.state.assists),
            info: this.state.info,
            file: this.state.file,
            minibat_games_played: parseInt(this.state.minibat_games_played),
            at_bats: parseInt(this.state.at_bats),
            hits: parseInt(this.state.hits),
            homeruns: parseInt(this.state.homeruns),
            batting_average: parseInt(this.state.batting_average)
        }
        console.log('Create Submit', this.props, newPlayer)
        this.props.createNewPlayer(newPlayer);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2> Register A Player </h2>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="text" placeholder="Player Name" onChange={this.handleNameChange} value={this.state.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="number" placeholder="Hockey Games Played" onChange={this.handleGameChange} value={this.state.games_played} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPrice">
                    <Form.Control type="number" placeholder="Goals" onChange={this.handleGoalsChange} value={this.state.goals} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Assists" onChange={this.handleAssistsChange} value={this.state.assists} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Minibat Games Played" onChange={this.handleMiniBatChange} value={this.state.minibat_games_played} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="At Bats" onChange={this.handleAtBatChange} value={this.state.at_bats} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Hits" onChange={this.handleHitsChange} value={this.state.hits} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Batting Average" onChange={this.handleAverageChange} value={this.state.batting_average} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Homeruns" onChange={this.handleHomerunChange} value={this.state.homeruns} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="text" placeholder="About Me" onChange={this.handleInfoChange} value={this.state.info} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="file" accept='image/*' onChange={this.fileSelected} />
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-success">Create Player</Button>
                <Grid style={{ marginLeft: "850px" }}></Grid>
            </form>
        );
    }
}

export default CreatePlayer;