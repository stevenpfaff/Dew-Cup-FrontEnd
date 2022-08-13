import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { SortNumericDown } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class MBPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: []
        }
        this.byGames = this.byGames.bind(this);
        this.byHits = this.byHits.bind(this);
        this.byDoubles = this.byDoubles.bind(this);
        this.byTriples = this.byTriples.bind(this);
        this.byHomers = this.byHomers.bind(this);
        this.byAvg = this.byAvg.bind(this);
        this.byRbi = this.byRbi.bind(this);
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'player')
            .then(response => response.json())
            .then(data => {
                this.setState({ player: data })
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    byGames() {
        let games = this.state.player.sort((a, b) => {
            return b.MBGP - a.MBGP;
        });

        this.setState({
            player: games
        });
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
            return b.doubles - a.doubles;
        });

        this.setState({
            player: doubles
        });
    }

    byTriples() {
        let triples = this.state.player.sort((a, b) => {
            return b.triples - a.triples;
        });

        this.setState({
            player: triples
        });
    }

    byHomers() {
        let homers = this.state.player.sort((a, b) => {
            return b.Homeruns - a.Homeruns;
        });

        this.setState({
            player: homers
        });
    }

    byAvg() {
        let avg = this.state.player.sort((a, b) => {
            return b.batavg - a.batavg;
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
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>All-Time Minibat Stats</h1>
                <Link to={'/coorsclashstats'}><Button type="submit" variant="contained" class="btn btn-success">Coors Clash Stats</Button></Link>
                <Link to={'/budwoodstats'}><Button type="submit" variant="contained" class="btn btn-success">Buddy Wood Memorial I Stats</Button></Link>
                <Link to={'/budwood2stats'}><Button type="submit" variant="contained" class="btn btn-success">Buddy Wood Memorial II Stats</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>GP<button type="button" class="btn btn-default" onClick={this.byGames}><SortNumericDown /></button></th>
                            <th>H<button type="button" class="btn btn-default" onClick={this.byHits}><SortNumericDown /></button></th>
                            <th>AVG<button type="button" class="btn btn-default" onClick={this.byAvg}><SortNumericDown /></button></th>
                            <th>2B<button type="button" class="btn btn-default" onClick={this.byDoubles}><SortNumericDown /></button></th>
                            <th>3B<button type="button" class="btn btn-default" onClick={this.byTriples}><SortNumericDown /></button></th>
                            <th>HR<button type="button" class="btn btn-default" onClick={this.byHomers}><SortNumericDown /></button></th>
                            <th>RBI<button type="button" class="btn btn-default" onClick={this.byRbi}><SortNumericDown /></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.player.map((player) => (
                            <tr key={player.Id}>
                                <td>{player.PlayerName}</td>
                                <td>{player.MBGP}</td>
                                <td>{player.Hits}</td>
                                <td>{player.batavg}</td>
                                <td>{player.doubles}</td>
                                <td>{player.triples}</td>
                                <td>{player.Homeruns}</td>
                                <td>{player.RBI}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default MBPlayers;