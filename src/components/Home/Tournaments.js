import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Home.css"


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
            <div>
                <h1 style={{ marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit" }}>Tournaments</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Tournament</th>
                            <th>Champions</th>
                            <th>Tournament MVP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tourneys.map((tourney) => (
                            <tr>
                                <td><Link to={`/${tourney.name}/tourney`}>{tourney.name}</Link></td>
                                <td><Link to={`/Teams/${tourney.champions}/profile`}>{tourney.champions}</Link></td>
                                <td><Link to={`/Players/${tourney.mvp}/profile`}>{tourney.mvp}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Tourneys;