import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import tourney from '../../data/tourneys.json'
import './Table.css'


class Tourneys extends Component {
    constructor(props) {
        super(props);
        this.state = { tourney: [] }
    }

    handleTourneyClick = (id) => {
        this.props.history.push(`/tourney/${id}`);
    };

    render() {

        return (
            <div className="tourney-container">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h1 className="title">Tournaments</h1>
            <div className="table-responsive">
                <Table striped bordered hover className="tourney-table">
                    <thead>
                        <tr>
                            <th>Series</th>
                            <th>Year</th>
                            <th>Winner</th>
                            <th>MVP</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tourney.map((tourney) => (
                                <tr key={tourney.id}>
                                    <td style={{ cursor: 'pointer', color: 'blue' }} onClick={() => this.handleTourneyClick(tourney.id)}>
                                        {tourney.tourney}
                                    </td>
                                <td>{tourney.year}</td>
                                <td>{tourney.winner}</td>
                                <td>{tourney.MVP}</td>
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