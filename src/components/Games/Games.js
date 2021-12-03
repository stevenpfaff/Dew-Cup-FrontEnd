import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap'

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [{
                home_team: "",
                home_score: "",
                away_team: "",
                away_score: "",
            }]
        }
    }

    componentDidMount = () => {
        this.getAllGames();
    }

    getAllGames = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/games/all/')
        this.setState({
            games: response.data
        })
    }
    render() {
        return (
            <div style={{ marginRight: "450px", marginLeft: "250px", marginBottom: "250px" }} >
                <h1 style={{ marginLeft: "100px", marginBottom: "100px", marginTop: "80px", fontFamily: "inherit" }}>Dew Cup Games</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Home Team</th>
                            <th>Score</th>
                            <th>Away Team</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.games.map((game) => (
                            <tr>
                                <td>{game.home_team}</td>
                                <td>{game.home_score}</td>
                                <td>{game.away_team}</td>
                                <td>{game.away_score}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Games;