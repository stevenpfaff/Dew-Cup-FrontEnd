import { SortNumericDown } from 'react-bootstrap-icons'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class CoorsClashStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: []
        }
        this.byHits = this.byHits.bind(this);
        this.byDoubles = this.byDoubles.bind(this);
        this.byTriples = this.byTriples.bind(this);
        this.byHomers = this.byHomers.bind(this);
        this.byAvg = this.byAvg.bind(this);
        this.byRbi = this.byRbi.bind(this);
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'coorsclashstats')
            .then(response => response.json())
            .then(data => {
                this.setState({ player: data })
            })
    }

    componentDidMount() {
        this.refreshList();
    }


    byHits() {
        let hits = this.state.player.sort((a, b) => {
            return b.Hits - a.Hits;
        });

        this.setState({
            player: hits
        });
    }

    byDoubles() {
        let doubles = this.state.player.sort((a, b) => {
            return b.DBL - a.DBL;
        });

        this.setState({
            player: doubles
        });
    }

    byTriples() {
        let triples = this.state.player.sort((a, b) => {
            return b.TPL - a.TPL;
        });

        this.setState({
            player: triples
        });
    }

    byHomers() {
        let homers = this.state.player.sort((a, b) => {
            return b.HR - a.HR;
        });

        this.setState({
            player: homers
        });
    }

    byAvg() {
        let avg = this.state.player.sort((a, b) => {
            return b.bAVG - a.bAVG;
        });

        this.setState({
            player: avg
        });
    }

    byRbi() {
        let rbi = this.state.player.sort((a, b) => {
            return b.RBI - a.RBI;
        });

        this.setState({
            player: rbi
        });
    }

    render() {

        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Coors Clash Player Stats</h1>
                <Link to={'/budwoodstats'}><Button type="submit" variant="contained" class="btn btn-dark">Buddy Wood Memorial I Stats</Button></Link>
                <Link to={'/budwood2stats'}><Button type="submit" variant="contained" class="btn btn-dark">Buddy Wood Memorial II Stats</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>H<button type="button" class="btn btn-default" onClick={this.byHits}><SortNumericDown /></button></th>
                            <th>AVG<button type="button" class="btn btn-default" onClick={this.byAvg}><SortNumericDown /></button></th>
                            <th>2B<button type="button" class="btn btn-default" onClick={this.byDoubles}><SortNumericDown /></button></th>
                            <th>3B<button type="button" class="btn btn-default" onClick={this.byTriples}><SortNumericDown /></button></th>
                            <th>HR<button type="button" class="btn btn-default" onClick={this.byHomers}><SortNumericDown /></button></th>
                            <th>RBI<button type="button" class="btn btn-default" onClick={this.byRbi}><SortNumericDown /></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.player.map((trny) => (
                            <tr>
                                <td>{trny.Player}</td>
                                <td>{trny.Hits}</td>
                                <td>{trny.bAVG}</td>
                                <td>{trny.DBL}</td>
                                <td>{trny.TPL}</td>
                                <td>{trny.HR}</td>
                                <td>{trny.RBI}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default CoorsClashStats;