import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'

function Tourney() {
    const { game } = useParams()
    const [games, setGame] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/games/${game}/`)
            .then(res => {
                console.log(res)
                setGame(res.data)
            })
            .catch(err =>
                console.log(err)

            )
    })


    return (
        <div style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "10%" }} >
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>{game} Results</h1>
            <div>
                <img src={game.file} width="150%" height="150%" alt=""></img>
                <Table striped bordered hover>
                    <thead>
                        <th>Game Type</th>
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
export default Tourney;
