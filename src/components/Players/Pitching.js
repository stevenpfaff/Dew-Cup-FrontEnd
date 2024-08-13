import { SortNumericUp } from 'react-bootstrap-icons';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import data from '../../data/playerstats.json';
import './Statsheet.css';

class Pitching extends Component {
    constructor(props) {
        super(props);

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

        if (key === 'era') {
            const playersWith10Ip = player.filter((p) => p.ip >= 10);
            const playersWithLessThan10Ip = player.filter((p) => p.ip > 0 && p.ip < 10);

            const sorted10IpData = [...playersWith10Ip].sort((a, b) => {
                if (a[key] > b[key]) {
                    return direction === 'asc' ? -1 : 1;
                }
                if (a[key] < b[key]) {
                    return direction === 'asc' ? 1 : -1;
                }
                return 0;
            });

            const combinedSortedData = [...sorted10IpData, ...playersWithLessThan10Ip];

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

        // Filter out players with 0 IP
        const filteredPlayers = player.filter((data) => data.ip > 0);

        return (
            <div className="minibats-container">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 className="minibats-title">Minibat All-Time Pitching Stats</h1>
                <p>*Must have 10 innings to qualify for the ERA Leaderboard</p>
                <div className="table-responsive">
                    <Table striped bordered hover className="pitching-table">
                        <thead>
                            <tr>
                                <th className='sticky-column'>
                                    Player 
                                    <Button onClick={() => this.sortData('name')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    IP
                                    <Button onClick={() => this.sortData('ip')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    W
                                    <Button onClick={() => this.sortData('w')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    L 
                                    <Button onClick={() => this.sortData('l')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    SV 
                                    <Button onClick={() => this.sortData('sv')} style={{ color: 'white' }}> 
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    ERA
                                    <Button onClick={() => this.sortData('era')} style={{ color: 'white' }}> 
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    K 
                                    <Button onClick={() => this.sortData('so')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    HR
                                    <Button onClick={() => this.sortData('hra')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPlayers.map((data) => (
                                <tr key={data.id}>
                                    <td className="sticky-column" style={{ cursor: 'pointer', color: 'blue' }} onClick={() => this.handlePlayerClick(data.id)}>
                                        {data.name}
                                    </td>
                                    <td>{data.ip}</td>
                                    <td>{data.w}</td>
                                    <td>{data.l}</td>
                                    <td>{data.sv}</td>
                                    <td>{data.era}</td>
                                    <td>{data.so}</td>
                                    <td>{data.hra}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Pitching;
