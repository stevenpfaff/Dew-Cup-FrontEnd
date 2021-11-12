import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const Player = (props) => {

let { name } = useParams()

  return (
    <div>
        <h1 style={{marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit"}}> {name}'s Player Profile</h1>
          <thead>
            <tr>
              <th>Games Played</th>
              <th>Goals</th>
              <th>Assists</th>  
            </tr>
          </thead>
          <tbody>
            {/* <td>{player.games_played}</td>
            <td>{player.goals}</td>
            <td>{player.assists}</td>  */}
          </tbody>      
    </div>
  )
}
export default Player