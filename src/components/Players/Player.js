import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const Player = (props) => {

let { name } = useParams()

  return (
    <div>
        <h1> {name}'s Stats Page</h1>
    </div>
  )
}
export default Player