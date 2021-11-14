import React, {Component} from 'react'
import {Form} from "react-bootstrap"
import {Button, Grid} from '@material-ui/core';

class CreateTourney extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            teams: "",
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

    handleSubmit = (event) => {
        event.preventDefault()
        const newTourney = {
            name: this.state.name,
            teams: this.state.teams
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
                    <Button type="submit" variant="contained" class="btn btn-success">Create Tournament</Button>
                    <Grid style={{marginLeft: "850px"}}></Grid>
                </form>
    );
    }
}
export default CreateTourney