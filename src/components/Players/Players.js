import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: []
        }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'player')
            .then(response => response.json())
            .then(data => {
                this.setState({ player: data })
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }



    render() {
        const { player } = this.state;
        const sortedName = player.sort((a, b) => b.Points > a.Points ? 1 : -1)
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>All-Time Hockey Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>GP</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedName.map((player) => (
                            <tr key={player.Id}>
                                <td>{player.PlayerName}</td>
                                <td>{player.HockeyGP}</td>
                                <td>{player.Goals}</td>
                                <td>{player.Assists}</td>
                                <td>{player.Points}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Players;