import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Tourneys extends Component {
    constructor(props) {
        super(props);
        this.state = { tourney: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'tourney')
            .then(response => response.json())
            .then(data => {
                this.setState({ tourney: data })
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { tourney } = this.state;
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Tournaments</h1>
                <Link to={'/coorsclash'}><Button type="submit" variant="contained" class="btn btn-success">Coors Clash Standings</Button></Link>
                <Link to={'/budwoodstats'}><Button type="submit" variant="contained" class="btn btn-success">Buddy Wood Memorial I Results</Button></Link>
                <Link to={'/budwood'}><Button type="submit" variant="contained" class="btn btn-success">Buddy Wood Memorial II Results</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Series</th>
                            <th>Winner</th>
                            <th>Runner Up</th>
                            <th>Players</th>
                            <th>MVP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tourney.map((trny) => (
                            <tr key={trny.Id}>
                                <td>{trny.TourneyName}</td>
                                <td>{trny.Winner}</td>
                                <td>{trny.RunnerUp}</td>
                                <td>{trny.Players}</td>
                                <td>{trny.MVP}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Tourneys;