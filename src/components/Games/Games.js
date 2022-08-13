import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Games extends Component {
    constructor(props) {
        super(props);
        this.state = { game: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'game')
            .then(response => response.json())
            .then(data => {
                this.setState({ game: data })
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { game } = this.state;
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Game Results</h1>
                <Link to={'/coorsclash'}><Button type="submit" variant="contained" class="btn btn-success">Coors Clash Standings</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Series</th>
                            <th>Type</th>
                            <th>Home Team</th>
                            <th>Score</th>
                            <th>Away Team</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {game.map((gm) => (
                            <tr>
                                <td>{gm.Series}</td>
                                <td>{gm.Category}</td>
                                <td>{gm.HomeTeam}</td>
                                <td>{gm.HomeScore}</td>
                                <td>{gm.AwayTeam}</td>
                                <td>{gm.AwayScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Games;