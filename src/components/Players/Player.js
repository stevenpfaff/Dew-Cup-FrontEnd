import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'


const Player = (props) => {

const { name } = useParams()


  return (
    <div style={{marginRight: "500px", marginLeft: "250px", marginBottom: "250px"}} >
        <h1 style={{marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit"}}> {name}'s Player Profile</h1>
        <Table  striped bordered hover>
                        <thead>
                            <tr>
                            <th>Games Played</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            </tr>
                        </thead>                       
                        <tbody>
                            <tr>
                            {/* <td>{player.games_played}</td>
                            <td>{player.goals}</td>
                            <td>{player.assists}</td> */}
                            </tr>   
                        </tbody>
            </Table>
        </div>
     );
}
export default Player;