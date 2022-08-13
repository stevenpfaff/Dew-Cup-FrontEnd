import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class BudWood extends Component {
    constructor(props) {
        super(props);
        this.state = { tourney: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'bwii')
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
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Buddy Wood Memorial II Results</h1>
                <Link to={'/budwood2stats'}><Button type="submit" variant="contained" class="btn btn-success">Buddy Wood Memorial II Stats</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Home Team</th>
                            <th>Score</th>
                            <th>Away Team</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tourney.map((trny) => (
                            <tr>
                                <td>{trny.HomeTeam}</td>
                                <td>{trny.HomeScore}</td>
                                <td>{trny.AwayTeam}</td>
                                <td>{trny.AwayScore}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default BudWood;