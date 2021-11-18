import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Teams.css"
import { Link } from 'react-router-dom';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [{
                name: "",
                wins: "",
                losses: "",
                goals: "",
                goals_against: "",
                championships: "",
                players: "",
                file: ""
            }]
        }
    }


    componentDidMount = () => {
        this.getAllTeams();
    }

    getAllTeams = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/teams/all/')
        this.setState({
            teams: response.data
        })
    }

    render() {
        return (
            <div style={{ marginRight: "450px", marginLeft: "250px", marginBottom: "250px" }} >
                <h1 style={{ marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit" }} >Teams</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Wins</th>
                            <th>Losses</th>
                            <th>Goals</th>
                            <th>Goals Against </th>
                            <th>Championships</th>
                            <th>Players</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((team) => (
                            <tr>
                                <td><Link to={`/Teams/${team.name}/profile`}>{team.name}</Link></td>
                                <td>{team.wins}</td>
                                <td>{team.losses}</td>
                                <td>{team.goals}</td>
                                <td>{team.goals_against}</td>
                                <td>{team.championships}</td>
                                <td>{team.players}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Teams;