import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import DewCupGroup from "../../Images/DewCupGroup.jpeg"
import "./Tournaments.css"
import points from '../../data/points.json'
import tourneys from '../../data/tournaments.json'


class Tourneys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tourneys: [{
                name: "",
                champions: ""
            }],
        }
    }

    componentDidMount = () => {
        this.getTourneys();
    }

    getTourneys = async () => {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/tournament/all/')
            this.setState({
                tourneys: response.data
            })
        }
        catch (err) {
        }
    }

    render() {
        return (
            <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "0%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Tournaments</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Series</th>
                            <th>Champions</th>
                            <th>Players</th>
                            <th>MVP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tourneys.map((tourney) => (
                            <tr>
                                <td>{tourney.name}</td>
                                <td>{tourney.champions}</td>
                                <td>{tourney.players}</td>
                                <td>{tourney.mvp}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Dew Cup IV Point Leaders</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Games Played</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {points.map((point) => (
                            <tr>
                                <td>{point.name}</td>
                                <td>{point.games}</td>
                                <td>{point.goals}</td>
                                <td>{point.assists}</td>
                                <td>{point.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <img src={DewCupGroup} width="100%" height="100%" class="center" alt=""></img>
            </div>
        );
    }
}

export default Tourneys;