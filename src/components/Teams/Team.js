import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Team.css"



const Team = (props) => {
    const { name } = useParams()
    const [team, setTeam] = useState({
        name,
        wins: "",
        losses: "",
        goals: "",
        goals_against: "",
        championships: "",
        players: "",
        file: "",
        runs: "",
        runs_against: "",
        batting_average: "",
        homeruns: ""
    })


    const getTeam = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/api/teams/${name}/`)
            console.log(response)
            console.log(response.data)
            let temp1 = response.data
            let temp2 = temp1[0]
            setTeam(temp2)
        }
        catch (err) {
        }
    }

    useEffect(() => {
        getTeam()
    })


    return (
        <div style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "10%" }} >
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>{name}</h1>
            <div class="column">
                <img src={team.file} width="150%" height="150%" alt="" />
            </div>
            <div class="column2">
                <h1>Team Stats</h1>
                <Table>
                    <tbody>
                        <tr>
                            <th>Wins</th>
                            <td>{team.wins}</td>
                        </tr>
                        <tr>
                            <th>Losses</th>
                            <td>{team.losses}</td>
                        </tr>
                        <tr>
                            <th>Goals</th>
                            <td>{team.goals}</td>
                        </tr>
                        <tr>
                            <th>Goals Against</th>
                            <td>{team.goals_against}</td>
                        </tr>
                        <tr>
                            <th>Runs</th>
                            <td>{team.runs}</td>
                        </tr>
                        <tr>
                            <th>Runs Against</th>
                            <td>{team.runs_against}</td>
                        </tr>
                        <tr>
                            <th>Batting Average</th>
                            <td>.{team.batting_average}</td>
                        </tr>
                        <tr>
                            <th>Homeruns</th>
                            <td>{team.homeruns}</td>
                        </tr>
                        <tr>
                            <th>Championships</th>
                            <td>{team.championships}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default Team;