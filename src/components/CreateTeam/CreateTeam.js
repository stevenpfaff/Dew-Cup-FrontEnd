import React, { Component } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';



class CreateTeam extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            wins: "",
            losses: "",
            goals: "",
            goals_against: "",
            championships: "",
            players: ""
        };
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
    handleWinsChange = (event) => {
        this.setState({
            wins: event.target.value,
        });
    }
    handleLossesChange = (event) => {
        this.setState({
            losses: event.target.value,
        });
    }
    handleChampsChange = (event) => {
        this.setState({
            championships: event.target.value,
        });
    }
    handleGoalsChange = (event) => {
        this.setState({
            goals: event.target.value,
        });
    }
    handleGoalsAgChange = (event) => {
        this.setState({
            goals_against: event.target.value,
        });
    }
    handlePlayerChange = (event) => {
        this.setState({
            players: event.target.value,
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
        event.preventDefault();
        const newTeam = {
            name: this.state.name,
            wins: parseInt(this.state.wins),
            losses: parseInt(this.state.losses),
            goals: parseInt(this.state.goals),
            goals_against: parseInt(this.state.goals_against),
            championships: parseInt(this.state.championships),
            players: this.state.players,
            file: this.state.file
        }
        console.log('Create Submit', this.props, newTeam)
        this.props.createNewTeam(newTeam);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2> Register A Team </h2>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="text" placeholder="Team Name" onChange={this.handleNameChange} value={this.state.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDescription">
                    <Form.Control type="number" placeholder="Wins" onChange={this.handleWinsChange} value={this.state.wins} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPrice">
                    <Form.Control type="number" placeholder="Losses" onChange={this.handleLossesChange} value={this.state.losses} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Championships" onChange={this.handleChampsChange} value={this.state.championships} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Goals" onChange={this.handleGoalsChange} value={this.state.goals} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Goals Against" onChange={this.handleGoalsAgChange} value={this.state.goals_against} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="text" placeholder="Players" onChange={this.handlePlayerChange} value={this.state.players} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="file" accept='image/*' onChange={this.fileSelected} />
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-success">Create Team</Button>
                <Grid style={{ marginLeft: "850px" }}></Grid>
            </form>
        );
    }
}

export default CreateTeam;