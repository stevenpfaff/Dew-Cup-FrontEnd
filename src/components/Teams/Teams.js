import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Teams.css"
import { Link } from 'react-router-dom';
import { SortAlphaUp } from 'react-bootstrap-icons'
import { SortNumericDown } from 'react-bootstrap-icons'
import teams from '../../data/teams.json'

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

    sortTeamName = () => {
        this.setState(prevState => ({
            teams: [...prevState.teams].sort(function (team1, team2) {
                if (team1.name < team2.name) {
                    return -1;
                }
                if (team1.name > team2.name) {
                    return 1;
                }
                return 0;
            }),
        }))
    }

    sortWins = () => {
        this.setState(prevState => ({
            teams: [...prevState.teams].sort(function (team1, team2) {
                if (team1.wins < team2.wins) {
                    return 1;
                }
                if (team1.wins > team2.wins) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortLosses = () => {
        this.setState(prevState => ({
            teams: [...prevState.teams].sort(function (team1, team2) {
                if (team1.losses < team2.losses) {
                    return 1;
                }
                if (team1.losses > team2.losses) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortGoals = () => {
        this.setState(prevState => ({
            teams: [...prevState.teams].sort(function (team1, team2) {
                if (team1.goals < team2.goals) {
                    return 1;
                }
                if (team1.goals > team2.goals) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortGoalsAg = () => {
        this.setState(prevState => ({
            teams: [...prevState.teams].sort(function (team1, team2) {
                if (team1.goals_against < team2.goals_against) {
                    return 1;
                }
                if (team1.goals_against > team2.goals_against) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortRuns = () => {
        this.setState(prevState => ({
            teams: [...prevState.teams].sort(function (team1, team2) {
                if (team1.runs < team2.runs) {
                    return 1;
                }
                if (team1.runs > team2.runs) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortRunsAg = () => {
        this.setState(prevState => ({
            teams: [...prevState.teams].sort(function (team1, team2) {
                if (team1.runs_against < team2.runs_against) {
                    return 1;
                }
                if (team1.runs_against > team2.runs_against) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortAverage = () => {
        this.setState(prevState => ({
            teams: [...prevState.teams].sort(function (team1, team2) {
                if (team1.batting_average < team2.batting_average) {
                    return 1;
                }
                if (team1.batting_average > team2.batting_average) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortHomeruns = () => {
        this.setState(prevState => ({
            teams: [...prevState.teams].sort(function (team1, team2) {
                if (team1.homeruns < team2.homeruns) {
                    return 1;
                }
                if (team1.homeruns > team2.homeruns) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortChampionships = () => {
        this.setState(prevState => ({
            teams: [...prevState.teams].sort(function (team1, team2) {
                if (team1.championships < team2.championships) {
                    return 1;
                }
                if (team1.championships > team2.championships) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    render() {
        return (
            <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Teams</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Wins</th>
                            <th>Losses</th>
                            <th>Goals</th>
                            <th>Goals Against</th>
                            <th>Runs</th>
                            <th>Runs Against</th>
                            <th>Batting Average</th>
                            <th>Homeruns</th>
                            <th>Championships</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((team) => (
                            <tr>
                                <td>{team.name}</td>
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