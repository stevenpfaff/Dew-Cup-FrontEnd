import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import axios from 'axios'

function SingleGame() {
    const { games_id } = useParams()
    const [games, setGame] = useState({
    })


    const getGame = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/games/games/${games_id}/`)
            console.log(response)
            console.log(response.data)
            let temp1 = response.data
            let temp2 = temp1[0]
            setGame(temp2)
        }
        catch (err) {
        }
    }

    useEffect(() => {
        getGame()
    })

    return (
        <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>{games_id}Details</h1>
            <div>
                <h1>Game Details</h1>
                <Table>
                    <thead>
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
export default SingleGame;