import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = { team: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'team')
            .then(response => response.json())
            .then(data => {
                this.setState({ team: data })
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { team } = this.state;
        const sortedTitle = team.sort((a, b) => b.Championships > a.Championships ? 1 : -1)
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>All-Time Team Stats</h1>
                <Link to={'/coorsclash'}><Button type="submit" variant="contained" class="btn btn-dark">Coors Clash Standings</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>W</th>
                            <th>L</th>
                            <th>G</th>
                            <th>GA</th>
                            <th>R</th>
                            <th>RA</th>
                            <th>Titles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTitle.map((team) => (
                            <tr key={team.Id}>
                                <td>{team.TeamName}</td>
                                <td>{team.Wins}</td>
                                <td>{team.Losses}</td>
                                <td>{team.Goals}</td>
                                <td>{team.GoalsAg}</td>
                                <td>{team.Runs}</td>
                                <td>{team.RunsAg}</td>
                                <td>{team.Championships}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Teams;