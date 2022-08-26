import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class CoorsClash extends Component {
    constructor(props) {
        super(props);
        this.state = { tourney: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'coorsclash')
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
        const sortedTitle = tourney.sort((a, b) => b.Wins > a.Wins ? 1 : -1)
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Coors Clash Standings</h1>
                <Link to={'/coorsclashstats'}><Button type="submit" variant="contained" class="btn btn-dark">Coors Clash Player Stats</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>W</th>
                            <th>L</th>
                            <th>R</th>
                            <th>RA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTitle.map((trny) => (
                            <tr key={trny.Id}>
                                <td>{trny.Team}</td>
                                <td>{trny.Wins}</td>
                                <td>{trny.Losses}</td>
                                <td>{trny.Runs}</td>
                                <td>{trny.RunsAg}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default CoorsClash;