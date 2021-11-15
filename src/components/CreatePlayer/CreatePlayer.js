import React, { Component } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';
import "./CreatePlayer.css"
import axios from "axios";



class CreatePlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            games_played: "",
            goals: "",
            assists: "",
            info: "",
            file: ""
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
    handleInfoChange = (event) => {
        console.log("handleInfoChange", event)
        this.setState({
            info: event.target.value,
        });
    }

    fileSelected = event => {
        //     console.log(event.target.files)
        //     this.setState({
        //         file: event.target.files
        //     })
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
            file: this.state.file
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
                    <Form.Control type="number" placeholder="Games Played" onChange={this.handleGameChange} value={this.state.games_played} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPrice">
                    <Form.Control type="number" placeholder="Goals" onChange={this.handleGoalsChange} value={this.state.goals} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="number" placeholder="Assists" onChange={this.handleAssistsChange} value={this.state.assists} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="text" placeholder="About Me" onChange={this.handleInfoChange} value={this.state.info} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRating">
                    <Form.Control type="file" accept='image/*' onChange={this.fileSelected}/>
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-success">Create Player</Button>
                <Grid style={{ marginLeft: "850px" }}></Grid>
            </form>
        );
    }
}

export default CreatePlayer;