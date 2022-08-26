import { SortNumericDown } from 'react-bootstrap-icons'
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class CRCI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: []
        }
        this.byGoals = this.byGoals.bind(this);
        this.byAssists = this.byAssists.bind(this);
        this.byPoints = this.byPoints.bind(this);

    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'crci')
            .then(response => response.json())
            .then(data => {
                this.setState({ player: data })
            })
    }

    componentDidMount() {
        this.refreshList();
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
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Code Red Classic I Player Stats</h1>
                <Link to={'/dciv'}><Button type="submit" variant="contained" class="btn btn-dark">Dew Cup IV Stats</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>G<button type="button" class="btn btn-default" onClick={this.byGoals}><SortNumericDown /></button></th>
                            <th>A<button type="button" class="btn btn-default" onClick={this.byAssists}><SortNumericDown /></button></th>
                            <th>P<button type="button" class="btn btn-default" onClick={this.byPoints}><SortNumericDown /></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.player.map((trny) => (
                            <tr>
                                <td>{trny.Player}</td>
                                <td>{trny.Goals}</td>
                                <td>{trny.Assists}</td>
                                <td>{trny.Points}</td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default CRCI;