import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Games.css"
import games from '../../data/games.json'


class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [{
            }]
        }
    }


    componentDidMount = () => {
        this.getAllGames();
    }

    getAllGames = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/games/all/')
        this.setState({
            teams: response.data
        })
    }
    render() {
        return (
            <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>All Games</h1>
                <div>
                    <Table striped border hover>
                        <thead>
                            <th>Series</th>
                            <th>Type</th>
                            <th>Away Team</th>
                            <th>Score</th>
                            <th>Home Team</th>
                            <th>Score</th>
                        </thead>
                        <tbody>
                            {games.map(game => (
                                <tr>
                                    <td>{game.game}</td>
                                    <td>{game.type}</td>
                                    <td>{game.away_team}</td>
                                    <td>{game.away_score}</td>
                                    <td>{game.home_team}</td>
                                    <td>{game.home_score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}
export default Games;
