import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import tourney from '../../data/tourneys.json'
import Button from '@material-ui/core/Button';


class Tourneys extends Component {
    constructor(props) {
        super(props);
        this.state = { tourney: [] }
    }


    render() {

        return (
                <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }}>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Tournaments</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Series</th>
                            <th>Year</th>
                            <th>Winner</th>
                            <th>Runner Up</th>
                            <th>Players</th>
                            <th>MVP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tourney.map((trny) => (
                            <tr>
                                <td>{trny.tourney}</td>
                                <td>{trny.year}</td>
                                <td>{trny.winner}</td>
                                <td>{trny.runnerup}</td>
                                <td>{trny.players}</td>
                                <td>{trny.MVP}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div >
        );
    }
}
export default Tourneys;