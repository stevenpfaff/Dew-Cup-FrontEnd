import { SortNumericDown } from 'react-bootstrap-icons'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import player from '../../data/bats.json'

class BudWoodIStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: []
        }
        // this.byHits = this.byHits.bind(this);

        // this.byHomers = this.byHomers.bind(this);
        // this.byAvg = this.byAvg.bind(this);

    }

    // refreshList() {
    //     fetch(process.env.REACT_APP_API + 'budstats')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ player: data })
    //         })
    // }

    // componentDidMount() {
    //     this.refreshList();
    // }


    // byHits() {
    //     let hits = this.state.player.sort((a, b) => {
    //         return b.Hits - a.Hits;
    //     });

    //     this.setState({
    //         player: hits
    //     });
    // }

    // byHomers() {
    //     let homers = this.state.player.sort((a, b) => {
    //         return b.HR - a.HR;
    //     });

    //     this.setState({
    //         player: homers
    //     });
    // }

    // byAvg() {
    //     let avg = this.state.player.sort((a, b) => {
    //         return b.bAVG - a.bAVG;
    //     });

    //     this.setState({
    //         player: avg
    //     });
    // }


    render() {

        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Minibat Individual Player Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>H</th>
                            <th>AVG</th>
                            <th>2B</th>
                            <th>3B</th>
                            <th>HR</th>
                            <th>RBI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {player.map((trny) => (
                            <tr>
                                <td>{trny.name}</td>
                                <td>{trny.hits}</td>
                                <td>.{trny.average}</td>
                                <td>{trny.doubles}</td>
                                <td>{trny.triples}</td>
                                <td>{trny.homeruns}</td>
                                <td>{trny.rbi}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default BudWoodIStats;