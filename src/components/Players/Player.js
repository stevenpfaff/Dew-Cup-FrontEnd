import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'




const Player = (props) => {
    const { name } = useParams()
    const [player, setPlayer] = useState({
        name,
        goals: 10,
        assists: 19,
        games_played: 18,
        info: "A complete pigeon"
      })


    //   const getPlayer = async (name) => {
    //     try {
    //     let response = await axios.get(`http://127.0.0.1:8000/api/players/${name}/profile/`)
    //     this.setState({
    //       player : response.data
    //     });} 
    //     catch (err){
    //   }
    //  }


    return (
        <div style={{ marginRight: "500px", marginLeft: "250px", marginBottom: "250px" }} >
            <h1 style={{ marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit" }}>{name}'s Player Profile</h1>
            <div>
                <h2>About</h2>
                <p>{player.info}</p>
            </div>
            <div>
                <h2>Player Stats</h2>
                <Table>
                        <tbody>
                            <tr>
                                <th>Games Played</th>
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
                        </tbody>
                </Table>
            </div>
        </div>
    );
}
export default Player;