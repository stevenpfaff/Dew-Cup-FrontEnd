import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Teams.css"
import { SortAlphaUp } from 'react-bootstrap-icons'
import { SortNumericDown } from 'react-bootstrap-icons'
import team from '../../data/teams.json'

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
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Team Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Team Name<button type="button" class="btn btn-default" onClick={this.sortTeamName}><SortAlphaUp /></button></th>
                            <th>Wins<button type="button" class="btn btn-default" onClick={this.sortWins}><SortNumericDown /></button></th>
                            <th>Losses<button type="button" class="btn btn-default" onClick={this.sortLosses}><SortNumericDown /></button></th>
                            <th>Goals<button type="button" class="btn btn-default" onClick={this.sortGoals}><SortNumericDown /></button></th>
                            <th>Goals Against<button type="button" class="btn btn-default" onClick={this.sortGoalsAg}><SortNumericDown /></button></th>
                            <th>Runs<button type="button" class="btn btn-default" onClick={this.sortRuns}><SortNumericDown /></button></th>
                            <th>Runs Against<button type="button" class="btn btn-default" onClick={this.sortRunsAg}><SortNumericDown /></button></th>
                            <th>Batting Average<button type="button" class="btn btn-default" onClick={this.sortAverage}><SortNumericDown /></button></th>
                            <th>Homeruns<button type="button" class="btn btn-default" onClick={this.sortHomeruns}><SortNumericDown /></button></th>
                            <th>Championships<button type="button" class="btn btn-default" onClick={this.sortChampionships}><SortNumericDown /></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((team) => (
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