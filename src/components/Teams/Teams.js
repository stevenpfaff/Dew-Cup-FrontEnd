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
                file: "",
                runs: "",
                runs_against: "",
                batting_average: "",
                homeruns: ""
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
            <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Teams</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Wins</th>
                            <th>Losses</th>
                            <th>Goals</th>
                            <th>Goals Against </th>
                            <th>Runs</th>
                            <th>Runs Against</th>
                            <th>Batting Average</th>
                            <th>Homeruns</th>
                            <th>Championships</th>
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
                                <td>{team.runs}</td>
                                <td>{team.runs_against}</td>
                                <td>.{team.batting_average}</td>
                                <td>{team.homeruns}</td>
                                <td>{team.championships}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Teams;