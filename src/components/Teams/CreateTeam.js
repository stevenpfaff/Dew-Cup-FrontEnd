import React, { Component } from "react";
import {Form} from "react-bootstrap"
import {Button, Grid} from '@material-ui/core';



class CreateTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name : "",
        wins : "",
        losses : "",
        championships : "",
        players : ""
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
    handlePlayersChange = (event) => {
        this.setState({
           players: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newTeam = {
            name : this.state.name,
            wins : parseInt(this.state.wins),
            losses : parseInt(this.state.losses),
            championships : parseInt(this.state.championships),
            players : this.state.players
        }
        console.log('Create Submit', this.props, newTeam)
        this.props.createNewTeam(newTeam);
    };

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Team Name" onChange={this.handleNameChange} value={this.state.name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Wins" onChange={this.handleWinsChange} value={this.state.wins}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Losses" onChange={this.handleLossesChange} value={this.state.losses}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number" placeholder="Championships" onChange={this.handleChampsChange} value={this.state.championships}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Floating label select example" onChange={this.handlePlayersChange} value={this.state.players}>
                                                        <option>Select a Category:</option>
                                                        <option value="Guitar">Guitar</option>
                                                        <option value="Amp">Amp</option>
                                                        <option value="Keyboard">Keyboard</option>
                                                        <option value="Drums">Drums</option>
                                                        <option value="Live Sound">Live Sound</option>
                                                    </Form.Select>
                    </Form.Group>
                    <Grid style={{marginLeft: "850px"}}><Button type="submit" variant="contained">Submit</Button></Grid>
                </form>
    );
    }
}

export default CreateTeam;