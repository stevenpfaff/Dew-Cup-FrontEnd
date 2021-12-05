import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'

const Tourney = (props) => {
    const { game } = useParams()
    const [games, setTourney] = useState({
        game,
        home_team: "",
        home_score: "",
        home_players: "",
        away_players: "",
        away_score: "",
        away_team: ""
    })

    const getTourney = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/games/${game}/`)
            console.log(response)
            console.log(response.data)
            let temp1 = response.data
            let temp2 = temp1[0]
            setTourney(temp2)
        }
        catch (err) {
        }
    }

    useEffect(() => {
        getTourney()
    }, [game])

    return (
        <div style={{ marginRight: "500px", marginLeft: "250px", marginBottom: "250px" }} >
            <h1 style={{ marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit" }}>{game} Results</h1>
            <div>
                <h1>Games</h1>
                <Table>
                    <thead>
                        <th>Home Team</th>
                        <th>Score</th>
                        <th>Away Team</th>
                        <th>Score</th>
                        <th>Game Details</th>
                    </thead>
                    <tbody>
                        <td>{games.home_team}</td>
                        <td>{games.home_score}</td>
                        <td>{games.away_team}</td>
                        <td>{games.away_score}</td>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default Tourney;
