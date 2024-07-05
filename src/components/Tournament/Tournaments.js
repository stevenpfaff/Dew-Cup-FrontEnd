import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import tourney from '../../data/tourneys.json'
import Button from '@material-ui/core/Button';


class Tourneys extends Component {
    constructor(props) {
        super(props);
        this.state = { tourney: [] }
    }

    //refreshList() {
    //fetch(process.env.REACT_APP_API + 'tourney')
    //.then(response => response.json())
    //.then(data => {
    //this.setState({ tourney: data })
    //})
    //}

    //componentDidMount() {
    //this.refreshList();
    //}

    //componentDidUpdate() {
    //this.refreshList();
    //}

    render() {
        //const { tourney } = this.state;
        //const sorted = tourney.sort((a, b) => a.number > b.number ? 1 : -1)

        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }}>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Tournaments</h1>
                <a target="_blank" href="https://docs.google.com/spreadsheets/d/1--Z4rwRCaDi32B6K8KxQHrcy5mvSjfYOzOZjyPbgK20/edit#gid=820517614"><Button type="submit" variant="contained" class="btn btn-dark">Minibat Stats And Results</Button></a>
                <a target="_blank" href="https://docs.google.com/spreadsheets/d/1-S9klqwfLvodu_MMg5HCc9CZSUmf3a7aA6NT9dRb7ro/edit#gid=1341328881"><Button type="submit" variant="contained" class="btn btn-dark">Pond Hockey Stats And Results</Button></a>
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