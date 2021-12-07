import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DewCupGroup from "../../Images/DewCupGroup.jpeg"


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
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Tournaments</h1>
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
                                <td><Link to={`/${tourney.name}/`}>{tourney.name}</Link></td>
                                <td><Link to={`/Teams/${tourney.champions}/profile`}>{tourney.champions}</Link></td>
                                <td><Link to={`/Players/${tourney.mvp}/profile`}>{tourney.mvp}</Link></td>
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