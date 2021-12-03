import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Players.css"



const Player = (props) => {
    const { name } = useParams()
    const [player, setPlayer] = useState({
        name,
        goals: "",
        assists: "",
        games_played: "",
        info: "",
        file: "",
        minibat_games_played: "",
        at_bats: "",
        hits: "",
        homeruns: "",
        batting_average: ""
    })


    const getPlayer = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/players/${name}/`)
            console.log(response)
            console.log(response.data)
            let temp1 = response.data
            let temp2 = temp1[0]
            setPlayer(temp2)
        }
        catch (err) {
        }
    }

    useEffect(() => {
        getPlayer()
    }, [name])


    return (
        <div style={{ marginRight: "500px", marginLeft: "250px", marginBottom: "250px" }} >
            <h1 style={{ marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit" }}>{name}'s Player Profile</h1>
            <div>
                <img src={player.file} width="400" height="400" class="center" />
                <h1>About</h1>
                <p>{player.info}</p>
            </div>
            <div>
                <h1>Player Stats</h1>
                <Table>
                    <tbody>
                        <tr>
                            <th>Hockey Games Played</th>
                            <td>{player.games_played}</td>
                        </tr>
                        <tr>
                            <th>Goals</th>
                            <td>{player.goals}</td>
                        </tr>
                        <tr>
                            <th>Assists</th>
                            <td>{player.assists}</td>
                        </tr>
                        <tr>
                            <th>Minibat Games Played</th>
                            <td>{player.minibat_games_played}</td>
                        </tr>
                        <tr>
                            <th>At Bats</th>
                            <td>{player.at_bats}</td>
                        </tr>
                        <tr>
                            <th>Hits</th>
                            <td>{player.hits}</td>
                        </tr>
                        <tr>
                            <th>Batting Average</th>
                            <td>.{player.batting_average}</td>
                        </tr>
                        <tr>
                            <th>Homeruns</th>
                            <td>{player.homeruns}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default Player;