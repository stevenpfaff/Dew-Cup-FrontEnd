import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Player.css"



const Player = (props) => {
    const { name } = useParams()
    const [player, setPlayer] = useState({
        name,
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
    })


    return (
        <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "10%" }} >
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>{name}'s Player Profile</h1>
            <div class="column">
                <img src={player.file} width="150%" height="150%" alt=""></img>
            </div>
            <div class="column2">
                <h1>Player Stats</h1>
                <Table>
                    <tbody>
                        <tr>
                            <th>Hockey Games Played</th>
                            <td>{player.games_played}</td>
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
                <h1>About</h1>
                <h5>{player.info}</h5>
            </div>
        </div>
    );
}
export default Player;