import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import SearchBar from '../SearchBar/SearchBar';
import "./Players.css"
import { Link } from 'react-router-dom';

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
            return player.name.toLowerCase() == searchTerm.toLowerCase()
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

    render() {
        return (
            <div style={{ marginRight: "450px", marginLeft: "250px", marginBottom: "250px" }} >
                <SearchBar playerSearch={this.playerSearch} />
                <h1 style={{ marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit" }}>Players</h1>
                <Button type="submit" variant="contained" onClick={this.handleClick} class="btn btn-success">Refresh Player List</Button>
                <Button type="submit" variant="contained" onClick={this.sortPlayerName} class="btn btn-success">Sort By Name</Button>
                <Button type="submit" variant="contained" onClick={this.sortPlayerAverage} class="btn btn-success">Sort By Batting Average</Button>
                <Button type="submit" variant="contained" onClick={this.sortPlayerHomeruns} class="btn btn-success">Sort By Homeruns</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Hockey Games Played</th>
                            <th>Minibat Games Played</th>
                            <th>At Bats</th>
                            <th>Hits</th>
                            <th>Batting Average</th>
                            <th>Homeruns</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.players.map((player) => (
                            <tr>
                                <td><Link to={`/Players/${player.name}/profile`}>{player.name}</Link></td>
                                <td>{player.games_played}</td>
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