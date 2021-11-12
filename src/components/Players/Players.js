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
                name: "Steven",
                games_played: 12, 
                goals: 0, assists: 0, info: "A brutal player",}],
        }
    }


componentDidMount = () => {
    //this.getAllPlayers();
}

getAllPlayers = async() => {
    let response = await axios.get('http://127.0.0.1:8000/api/players/all')
    this.setState({
        player : response.data
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
                            <th>Info</th>
                            </tr>
                        </thead>                       
                        <tbody>
                        {this.state.players.map((player)=>(
                            <tr>
                            <td><Link to={`/Players/${player.name}/stats`}>{player.name}</Link></td>
                            <td>{player.games_played}</td>
                            <td>{player.goals}</td>
                            <td>{player.assists}</td>
                            <td>{player.info}</td>
                            </tr>   
                        ))}
                        </tbody>
            </Table>
        </div>
     );
}
}
export default Players;