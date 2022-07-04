import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class MBPlayers extends Component {
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
        const sortedName = player.sort((a, b) => b.batavg > a.batavg ? 1 : -1)
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>All-Time Minibat Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>GP</th>
                            <th>H</th>
                            <th>2B</th>
                            <th>3B</th>
                            <th>HR</th>
                            <th>RBI</th>
                            <th>AVG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedName.map((player) => (
                            <tr key={player.Id}>
                                <td>{player.PlayerName}</td>
                                <td>{player.MBGP}</td>
                                <td>{player.Hits}</td>
                                <td>{player.doubles}</td>
                                <td>{player.triples}</td>
                                <td>{player.Homeruns}</td>
                                <td>{player.RBI}</td>
                                <td>{player.batavg}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default MBPlayers;