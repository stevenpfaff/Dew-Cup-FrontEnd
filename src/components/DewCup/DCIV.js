import { SortNumericDown } from 'react-bootstrap-icons'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import hockey from '../../data/hockey.json'

class DCIV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hockey: []
        }
        // this.byGoals = this.byGoals.bind(this);
        // this.byAssists = this.byAssists.bind(this);
        // this.byPoints = this.byPoints.bind(this);

    }

    // refreshList() {
    //     fetch(process.env.REACT_APP_API + 'dciv')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ player: data })
    //         })
    // }

    // componentDidMount() {
    //     this.refreshList();
    // }


    // byGoals() {
    //     let goals = this.state.player.sort((a, b) => {
    //         return b.Goals - a.Goals;
    //     });

    //     this.setState({
    //         player: goals
    //     });
    // }

    // byAssists() {
    //     let assists = this.state.player.sort((a, b) => {
    //         return b.Assists - a.Assists;
    //     });

    //     this.setState({
    //         player: assists
    //     });
    // }

    // byPoints() {
    //     let points = this.state.player.sort((a, b) => {
    //         return b.Points - a.Points;
    //     });

    //     this.setState({
    //         player: points
    //     });
    // }


    render() {

        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Individual Hockey Stats</h1>
                <a>*Individual goals and assists not tracked prior to Dew Cup IV*</a>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Games</th>
                            <th>Goals</th>
                            <th>Assists</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hockey.map((trny) => (
                            <tr>
                                <td>{trny.name}</td>
                                <td>{trny.games}</td>
                                <td>{trny.goals}</td>
                                <td>{trny.assists}</td>
                                <td>{trny.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default DCIV;