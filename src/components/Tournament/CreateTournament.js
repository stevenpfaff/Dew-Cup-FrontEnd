import React, {Component} from 'react'
import {Form} from "react-bootstrap"
import {Button, Grid} from '@material-ui/core';

class CreateTourney extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            teams: "",
            champions: "",
            mvp: ""
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }

    handleTeamChange = (event) => {
        this.setState({
            teams: event.target.value,
        });
    }

    handleChampsChange = (event) => {
        this.setState({
            champions: event.target.value,
        });
    }

    handleMvpChange = (event) => {
        this.setState({
            mvp: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newTourney = {
            name: this.state.name,
            teams: this.state.teams,
            champions: this.state.champions,
            mvp: this.state.mvp
        }
        this.props.createNewTourney(newTourney)
    }
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <h2> Create A Tournament </h2>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text" placeholder="Tournament Name" onChange={this.handleNameChange} value={this.state.name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Control type="text" placeholder="Add Teams To Tournament" onChange={this.handleTeamChange} value={this.state.teams}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Control type="text" placeholder="Tournament Champs" onChange={this.handleChampsChange} value={this.state.champions}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Control type="text" placeholder="Tournament MVP" onChange={this.handleMvpChange} value={this.state.mvp}/>
                    </Form.Group>
                    <Button type="submit" variant="contained" className="btn btn-success">Create Tournament</Button>
                    <Grid style={{marginLeft: "850px"}}></Grid>
                </form>
    );
    }
}
export default CreateTourney