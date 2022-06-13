import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DewCupGroup from "../../Images/DewCupGroup.jpeg"
import "./Tournaments.css"


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
            <div style={{ marginRight: "15%", marginLeft: "15%", marginBottom: "0%", }} >
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
                        {this.state.tourneys.map((tourney) => (
                            <tr>
                                <td>{tourney.name}</td>
                                <td>{tourney.champions}</td>
                                <td>{tourney.players}</td>
                                <td>{tourney.mvp}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Tourneys;