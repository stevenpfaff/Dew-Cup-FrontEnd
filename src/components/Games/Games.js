import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import games from '../../data/games.json'

class Games extends Component {
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
                            <th>Away Players</th>
                            <th>Home Team</th>
                            <th>Score</th>
                            <th>Home Players</th>
                        </thead>
                        <tbody>
                            {games.map(game => (
                                <tr>
                                    <td>{game.game}</td>
                                    <td>{game.type}</td>
                                    <td>{game.away_team}</td>
                                    <td>{game.away_score}</td>
                                    <td>{game.away_players}</td>
                                    <td>{game.home_team}</td>
                                    <td>{game.home_score}</td>
                                    <td>{game.home_players}</td>
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
