import React, {Component} from 'react'
import axios from 'axios'
import { render } from 'react-dom';
import {Table} from 'react-bootstrap'
import {Button} from '@material-ui/core'
import SearchBar from '../SearchBar/SearchBar';
import "./Players.css"
import { Link } from 'react-router-dom';

class Players extends Component {
    constructor(props){
        super(props);
        this.state = {
            players: [{
                name: "",
                games_played: "", 
                goals: "",
                assists: "",
                info: "",
            }],
        }
    }


componentDidMount = () => {
    this.getAllPlayers();
}

getAllPlayers = async() => {
    let response = await axios.get('http://127.0.0.1:8000/api/players/all/')
    this.setState({
        players : response.data
    })
}

render() {
    return ( 
        <div style={{marginRight: "450px", marginLeft: "250px", marginBottom: "250px"}} >
            <SearchBar />
            <h1 style={{marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit"}} >Players</h1>
            <Table  striped bordered hover>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Games Played</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            </tr>
                        </thead>                       
                        <tbody>
                        {this.state.players.map((player)=>(
                            <tr>
                            <td><Link to={`/Players/${player.name}/profile`}>{player.name}</Link></td>
                            <td>{player.games_played}</td>
                            <td>{player.goals}</td>
                            <td>{player.assists}</td>
                            </tr>   
                        ))}
                        </tbody>
            </Table>
        </div>
     );
}
}
export default Players;