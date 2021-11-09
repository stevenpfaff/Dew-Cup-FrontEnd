import React, {Component} from 'react'
import axios from 'axios'
import { render } from 'react-dom';
import {Table} from 'react-bootstrap'
import {Button} from '@material-ui/core'
import "./Teams.css"

class Teams extends Component {
    constructor(props){
        super(props);
        this.state = {
            teams: [],
        }
    }


componentDidMount = () => {
    this.getAllTeams();
}

getAllTeams = async() => {
    let response = await axios.get('http://127.0.0.1:8000/api/teams/all')
    this.setState({
        team : response.data
    })
}

deleteTeam = async(team_id) => {
    let response = await axios.delete(`http://127.0.0.1:8000/api/teams/all/${team_id}`)
    this.getAllTeams()
    return response.status
}

render() {
    return ( 
        <div style={{marginRight: "450px", marginLeft: "250px", marginBottom: "250px"}} >
            <h1 style={{marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit"}} >Teams</h1>
            <Table  striped bordered hover>
                        <thead>
                            <tr>
                            <th>Team Name</th>
                            <th>Wins</th>
                            <th>Losses</th>
                            <th>Championships</th>
                            </tr>
                        </thead>
                        {this.state.teams.map((team)=>(
                        <tbody>
                            <tr>
                            <td>{team.name}</td>
                            <td>{team.wins}</td>
                            <td>{team.losses}</td>
                            <td>{team.championships}</td>
                           <td> <Button variant="contained" onClick={()=>this.deleteItem(team.team_id)} 
                                style={{paddingBottom: "10px", paddingTop: "10px", marginTop: "5px"}}   
                                >Delete Team</Button> </td>
                            </tr>   
                        </tbody>
                        ))}
            </Table>
        </div>
     );
}
}
export default Teams;