import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import tourney from '../../data/tourneys.json'
import './Table.css'


class Tourneys extends Component {
    constructor(props) {
        super(props);
        this.state = { tourney: [] }
    }


    render() {

        return (
            <div className="minibats-container">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1 className="minibats-title">Tournaments</h1>
            <div className="table-responsive">
                <Table striped bordered hover className="tourney-table">
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
        </div>
        );
    }
}
export default Tourneys;