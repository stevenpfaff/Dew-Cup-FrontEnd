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
    handleSubmit = (event) => {
        event.preventDefault();
        const newTeam = {
            name : this.state.name,
            wins : parseInt(this.state.wins),
            losses : parseInt(this.state.losses),
            championships : parseInt(this.state.championships),
        }
        console.log('Create Submit', this.props, newTeam)
        this.props.createNewTeam(newTeam);
    };

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text" placeholder="Team Name" onChange={this.handleNameChange} value={this.state.name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Control type="number" placeholder="Wins" onChange={this.handleWinsChange} value={this.state.wins}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPrice">
                        <Form.Control type="number" placeholder="Losses" onChange={this.handleLossesChange} value={this.state.losses}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupRating">
                        <Form.Control type="number" placeholder="Championships" onChange={this.handleChampsChange} value={this.state.championships}/>
                    </Form.Group>
                    <Grid style={{marginLeft: "850px"}}><Button type="submit" variant="contained">Submit</Button></Grid>
                </form>
    );
    }
}

export default CreateTeam;