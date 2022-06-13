import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import SearchBar from '../SearchBar/SearchBar';
import "./Players.css"
import { Link } from 'react-router-dom';
import { SortAlphaUp } from 'react-bootstrap-icons'
import { SortNumericDown } from 'react-bootstrap-icons'
import players from '../../data/players.json'

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [{
                name: "",
                games_played: "",
                info: "",
                file: "",
                minibat_games_played: "",
                at_bats: "",
                hits: "",
                batting_average: ""

            }],
        }
    }


    componentDidMount = () => {
        this.getAllPlayers();
    }

    handleClick = (event) => {
        event.preventDefault()
        this.getAllPlayers()
    }

    getAllPlayers = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/players/all/')
        this.setState({
            players: response.data
        })
    }

    playerSearch = (searchTerm) => {
        const filteredList = this.state.players.filter(function (player) {
            return player.name.toLowerCase() === searchTerm.toLowerCase()
        })
        this.setState({
            players: filteredList
        })
    }

    sortPlayerName = () => {
        this.setState(prevState => ({
            players: [...prevState.players].sort(function (player1, player2) {
                if (player1.name < player2.name) {
                    return -1;
                }
                if (player1.name > player2.name) {
                    return 1;
                }
                return 0;
            }),
        }))
    }

    sortPlayerHockey = () => {
        this.setState(prevState => ({
            players: [...prevState.players].sort(function (player1, player2) {
                if (player1.games_played < player2.games_played) {
                    return 1;
                }
                if (player1.games_played > player2.games_played) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortPlayerGoals = () => {
        this.setState(prevState => ({
            players: [...prevState.players].sort(function (player1, player2) {
                if (player1.goals < player2.goals) {
                    return 1;
                }
                if (player1.goals > player2.goals) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortPlayerAssists = () => {
        this.setState(prevState => ({
            players: [...prevState.players].sort(function (player1, player2) {
                if (player1.assists < player2.assists) {
                    return 1;
                }
                if (player1.assists > player2.assists) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortPlayerPoints = () => {
        this.setState(prevState => ({
            players: [...prevState.players].sort(function (player1, player2) {
                if (player1.points < player2.points) {
                    return 1;
                }
                if (player1.points > player2.points) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortPlayerMinibat = () => {
        this.setState(prevState => ({
            players: [...prevState.players].sort(function (player1, player2) {
                if (player1.minibat_games_played < player2.minibat_games_played) {
                    return 1;
                }
                if (player1.minibat_games_played > player2.minibat_games_played) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortPlayerHomeruns = () => {
        this.setState(prevState => ({
            players: [...prevState.players].sort(function (player1, player2) {
                if (player1.homeruns < player2.homeruns) {
                    return 1;
                }
                if (player1.homeruns > player2.homeruns) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortPlayerAverage = () => {
        this.setState(prevState => ({
            players: [...prevState.players].sort(function (player1, player2) {
                if (player1.batting_average < player2.batting_average) {
                    return 1;
                }
                if (player1.batting_average > player2.batting_average) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortPlayerAtBats = () => {
        this.setState(prevState => ({
            players: [...prevState.players].sort(function (player1, player2) {
                if (player1.at_bats < player2.at_bats) {
                    return 1;
                }
                if (player1.at_bats > player2.at_bats) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    sortPlayerHits = () => {
        this.setState(prevState => ({
            players: [...prevState.players].sort(function (player1, player2) {
                if (player1.hits < player2.hits) {
                    return 1;
                }
                if (player1.hits > player2.hits) {
                    return -1;
                }
                return 0;
            }),
        }))
    }

    render() {
        return (
            <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
                <SearchBar playerSearch={this.playerSearch} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>All-Time Player Stats</h1>
                <Button type="submit" variant="contained" onClick={this.handleClick} class="btn btn-success">Refresh Player List</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name<button type="button" class="btn btn-default" onClick={this.sortPlayerName}><SortAlphaUp /></button></th>
                            <th>Hockey Games Played<button type="button" class="btn btn-default" onClick={this.sortPlayerHockey}><SortNumericDown /></button></th>
                            <th>Goals<button type="button" class="btn btn-default" onClick={this.sortPlayerGoals}><SortNumericDown /></button></th>
                            <th>Assists<button type="button" class="btn btn-default" onClick={this.sortPlayerAssists}><SortNumericDown /></button></th>
                            <th>Points<button type="button" class="btn btn-default" onClick={this.sortPlayerPoints}><SortNumericDown /></button></th>
                            <th>Minibat Games Played<button type="button" class="btn btn-default" onClick={this.sortPlayerMinibat}><SortNumericDown /></button></th>
                            <th>At Bats<button type="button" class="btn btn-default" onClick={this.sortPlayerAtBats}><SortNumericDown /></button></th>
                            <th>Hits<button type="button" class="btn btn-default" onClick={this.sortPlayerHits}><SortNumericDown /></button></th>
                            <th>Batting Average<button type="button" class="btn btn-default" onClick={this.sortPlayerAverage}><SortNumericDown /></button></th>
                            <th>Homeruns<button type="button" class="btn btn-default" onClick={this.sortPlayerHomeruns}><SortNumericDown /></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.players.map((player) => (
                            <tr>
                                <td><Link to={`/Players/${player.name}/profile`}>{player.name}</Link></td>
                                <td>{player.games_played}</td>
                                <td>{player.goals}</td>
                                <td>{player.assists}</td>
                                <td>{player.points}</td>
                                <td>{player.minibat_games_played}</td>
                                <td>{player.at_bats}</td>
                                <td>{player.hits}</td>
                                <td>.{player.batting_average}</td>
                                <td>{player.homeruns}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Players;