import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Games.css"

function Games() {
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/games/all/`)
            .then(res => {
                console.log(res)
                setGames(res.data)
            })
            .catch(err =>
                console.log(err)

            )
    })
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
export default Games;
