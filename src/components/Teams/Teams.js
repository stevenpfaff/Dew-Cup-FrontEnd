import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import team from '../../data/teams.json';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = { team: [] }
    }

    // refreshList() {
    //     fetch(process.env.REACT_APP_API + 'team')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ team: data })
    //         })
    // }

    // componentDidMount() {
    //     this.refreshList();
    // }

    // componentDidUpdate() {
    //     this.refreshList();
    // }

    render() {
        // const { team } = this.state;
        // const sortedTitle = team.sort((a, b) => b.Championships > a.Championships ? 1 : -1)
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>All-Time Team Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Hockey W</th>
                            <th>Hockey L</th>
                            <th>G</th>
                            <th>GA</th>
                            <th>Bats W</th>
                            <th>Bats L</th>
                            <th>R</th>
                            <th>RA</th>
                            <th>Hockey Titles</th>
                            <th>Bats Titles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((team) => (
                            <tr key={team.Id}>
                                <td>{team.name}</td>
                                <td>{team.hockeywins}</td>
                                <td>{team.hockeylosses}</td>
                                <td>{team.goals}</td>
                                <td>{team.goalsag}</td>
                                <td>{team.batswins}</td>
                                <td>{team.batslosses}</td>
                                <td>{team.runs}</td>
                                <td>{team.runsag}</td>
                                <td>{team.hockeychampionships}</td>
                                <td>{team.batschampionships}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Teams;