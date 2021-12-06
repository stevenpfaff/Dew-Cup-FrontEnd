import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'

function Tourney() {
    const { game } = useParams()
    const [games, setTourney] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/games/${game}/`)
            .then(res => {
                console.log(res)
                setTourney(res.data)
            })
            .catch(err =>
                console.log(err)

            )
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
                        {games.map(game => (
                            <tr>
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
export default Tourney;
