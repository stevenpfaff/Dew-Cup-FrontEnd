import { SortNumericUp } from 'react-bootstrap-icons';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import data from '../../data/playerstats.json';

class Minibats extends Component {
    constructor(props) {
        super(props);

        // Pre-sort the data by homeruns in descending order
        const sortedPlayerData = [...data].sort((a, b) => b.homeruns - a.homeruns);

        this.state = {
            player: sortedPlayerData,
            sortConfig: {
                key: 'homeruns',
                direction: 'desc',
            },
        };
    }

    sortData = (key) => {
        const { player, sortConfig } = this.state;
        let direction = 'asc';
        
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedData = [...player].sort((a, b) => {
            if (a[key] > b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] < b[key]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        this.setState({
            player: sortedData,
            sortConfig: {
                key,
                direction,
            },
        });
    };

    handlePlayerClick = (id) => {
        this.props.history.push(`/player/${id}`);
    };

    render() {
        const { player } = this.state;

        const filteredBats = player.filter((data) => data.mbgames !== 0);

        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Minibat Individual Player Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                Player 
                                <Button onClick={() => this.sortData('name')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                GP 
                                <Button onClick={() => this.sortData('mbgames')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                AB 
                                <Button onClick={() => this.sortData('ab')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                H 
                                <Button onClick={() => this.sortData('hits')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                AVG 
                                <Button onClick={() => this.sortData('average')} style={{ color: 'white' }}> 
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                2B 
                                <Button onClick={() => this.sortData('doubles')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                3B 
                                <Button onClick={() => this.sortData('triples')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                HR 
                                <Button onClick={() => this.sortData('homeruns')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                RBI 
                                <Button onClick={() => this.sortData('rbi')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBats.map((data) => (
                             <tr key={data.id}>
                                <td style={{ cursor: 'pointer', color: 'blue' }} onClick={() => this.handlePlayerClick(data.id)}>
                                    {data.name}
                                </td>
                                <td>{data.mbgames}</td>
                                <td>{data.ab}</td>
                                <td>{data.hits}</td>
                                <td>.{data.average}</td>
                                <td>{data.doubles}</td>
                                <td>{data.triples}</td>
                                <td>{data.homeruns}</td>
                                <td>{data.rbi}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Minibats;
