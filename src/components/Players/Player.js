import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'


const Player = (props) => {
  const { name } = useParams()
  const [goals] = useState()
  const [games_played] = useState()
  const [assists] = useState()
  const [info] = useState()

  


  return (
    <div style={{marginRight: "500px", marginLeft: "250px", marginBottom: "250px"}} >
        <h1 style={{marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit"}}> {name}'s Player Profile</h1>
        <Table  striped bordered hover>
                        <thead>
                            <tr>
                            <th>Games Played</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Bio</th>
                            </tr>
                        </thead>                      
                        <tbody>
                            <tr>
                            <td>{games_played}</td>
                            <td>{goals}</td>
                            <td>{assists}</td>
                            <td>{info}</td>
                            </tr>   
                        </tbody>
            </Table>
        </div>
     );
}
export default Player;