import { SortNumericUp } from 'react-bootstrap-icons';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import data from '../../data/playerstats.json';
import './Statsheet.css';

class Batting2022 extends Component {
    constructor(props) {
        super(props);

        const playerData2022 = data
            .filter((player) => player["2022_stats"] && player["2022_stats"].mbgames > 0)
            .map((player) => {
                const stats2022 = player["2022_stats"];
                return {
                    ...player,
                    ...stats2022,
                };
            });

        const sortedPlayerData = [...playerData2022].sort((a, b) => b.homeruns - a.homeruns);

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

        if (key === 'average' || key === 'slug' || key === 'obp' || key === 'ops') {
            const playersWith50ABs = player.filter((p) => p.ab >= 40);
            const playersWithLessThan50ABs = player.filter((p) => p.ab < 40);

            const sorted50ABsData = [...playersWith50ABs].sort((a, b) => {
                if (a[key] > b[key]) {
                    return direction === 'asc' ? -1 : 1;
                }
                if (a[key] < b[key]) {
                    return direction === 'asc' ? 1 : -1;
                }
                return 0;
            });

            const combinedSortedData = [...sorted50ABsData, ...playersWithLessThan50ABs];

            this.setState({
                player: combinedSortedData,
                sortConfig: {
                    key,
                    direction,
                },
            });
        } else {
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
        }
    };


    handlePlayerClick = (id) => {
        this.props.history.push(`/player/${id}`);
    };

    render() {
        const { player } = this.state;

        return (
            <div className="minibats-container">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 className="minibats-title">2022 Batting Stats</h1>
                <div className="table-responsive">
                    <Table striped bordered hover className="minibats-table">
                        <thead>
                            <tr>
                                <th className="sticky-column">
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
                                    OBP 
                                    <Button onClick={() => this.sortData('obp')} style={{ color: 'white' }}> 
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    SLG 
                                    <Button onClick={() => this.sortData('slug')} style={{ color: 'white' }}> 
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    OPS
                                    <Button onClick={() => this.sortData('ops')} style={{ color: 'white' }}> 
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
                                <th>
                                    R 
                                    <Button onClick={() => this.sortData('runs')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    K
                                    <Button onClick={() => this.sortData('k')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {player.map((data) => (
                                <tr key={data.id}>
                                    <td className="sticky-column" style={{ cursor: 'pointer', color: 'blue' }} onClick={() => this.handlePlayerClick(data.id)}>
                                        {data.name}
                                    </td>
                                    <td>{data.mbgames}</td>
                                    <td>{data.ab}</td>
                                    <td>{data.hits}</td>
                                    <td>{parseFloat(data.average).toFixed(3)}</td>
                                    <td>{parseFloat(data.obp).toFixed(3)}</td>
                                    <td>{parseFloat(data.slug).toFixed(3)}</td>
                                    <td>{parseFloat(data.ops).toFixed(3)}</td>
                                    <td>{data.doubles}</td>
                                    <td>{data.triples}</td>
                                    <td>{data.homeruns}</td>
                                    <td>{data.rbi}</td>
                                    <td>{data.runs}</td>
                                    <td>{data.k}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Batting2022;
