import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'

const Tourney = (props) => {
    const { game } = useParams()
    const [games, setGames] = useState({
        game,
    })

    const getGames = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/games/${game}/`)
            let games = response.data[0]
            setGames(games)
        }
        catch (err) {
        }
    }

    useEffect(() => {
        getGames()
    })

    return (
        <div style={{ marginRight: "500px", marginLeft: "250px", marginBottom: "250px" }} >
            <h1 style={{ marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit" }}>{game} Results</h1>
            <div>
                <h1>Games</h1>
                <Table>
                    <thead>
                        <th>Away Team</th>
                        <th>Score</th>
                        <th>Home Team</th>
                        <th>Score</th>
                        <th>Game Details</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{games.away_team}</td>
                            <td>{games.away_score}</td>
                            <td>{games.home_team}</td>
                            <td>{games.home_score}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default Tourney;
