import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { SortNumericDown } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: []
        }
        this.byGames = this.byGames.bind(this);
        this.byGoals = this.byGoals.bind(this);
        this.byAssists = this.byAssists.bind(this);
        this.byPoints = this.byPoints.bind(this);
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
            return b.HockeyGP - a.HockeyGP;
        });

        this.setState({
            player: games
        });
    }

    byGoals() {
        let goals = this.state.player.sort((a, b) => {
            return b.Goals - a.Goals;
        });

        this.setState({
            player: goals
        });
    }

    byAssists() {
        let assists = this.state.player.sort((a, b) => {
            return b.Assists - a.Assists;
        });

        this.setState({
            player: assists
        });
    }

    byPoints() {
        let points = this.state.player.sort((a, b) => {
            return b.Points - a.Points;
        });

        this.setState({
            player: points
        });
    }

    render() {
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>All-Time Hockey Stats</h1>
                <Link to={'/dciv'}><Button type="submit" variant="contained" class="btn btn-dark">Dew Cup IV Player Stats</Button></Link>
                <Link to={'/crci'}><Button type="submit" variant="contained" class="btn btn-dark">Code Red Classic I Player Stats</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>GP<button type="button" class="btn btn-default" onClick={this.byGames}><SortNumericDown /></button></th>
                            <th>Goals<button type="button" class="btn btn-default" onClick={this.byGoals}><SortNumericDown /></button></th>
                            <th>Assists<button type="button" class="btn btn-default" onClick={this.byAssists}><SortNumericDown /></button></th>
                            <th>Points<button type="button" class="btn btn-default" onClick={this.byPoints}><SortNumericDown /></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.player.map((player) => (
                            <tr key={player.Id}>
                                <td>{player.PlayerName}</td>
                                <td>{player.HockeyGP}</td>
                                <td>{player.Goals}</td>
                                <td>{player.Assists}</td>
                                <td>{player.Points}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div >
        );
    }
}
export default Players;