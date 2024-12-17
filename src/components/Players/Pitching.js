import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { SortNumericUp } from 'react-bootstrap-icons';
import Papa from 'papaparse';
import './Statsheet.css';

class Pitching extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player: [],
            sortConfig: {
                key: 'era',
                direction: 'asc',
            },
            loading: true,
        };
    }

    componentDidMount() {
        this.loadPitchingData();
    }

    loadPitchingData = () => {
        Papa.parse('/pitching.csv', {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                const sortedPlayerData = [...result.data]
                    .map((player) => ({
                        ...player,
                        ip: parseFloat(player.ip) || 0,
                        era: parseFloat(player.era) || 0,
                        w: parseInt(player.w) || 0,
                        l: parseInt(player.l) || 0,
                        sv: parseInt(player.sv) || 0,
                        so: parseInt(player.so) || 0,
                        hra: parseInt(player.hra) || 0,
                    }))
                    .sort((a, b) => b.ip - a.ip);

                this.setState({ player: sortedPlayerData, loading: false });
            },
            error: (error) => {
                console.error("Error loading pitching data:", error);
                this.setState({ loading: false });
            },
        });
    };

    sortData = (key) => {
        const { player, sortConfig } = this.state;
        let direction = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        if (key === 'era') {
            const qualifiers = player.filter((p) => p.ip >= 20);
            const nonQualifiers = player.filter((p) => p.ip > 0 && p.ip < 20);

            const sortedQualifiers = [...qualifiers].sort((a, b) => {
                if (a[key] > b[key]) {
                    return direction === 'asc' ? -1 : 1;
                }
                if (a[key] < b[key]) {
                    return direction === 'asc' ? 1 : -1;
                }
                return 0;
            });

            const combinedSortedData = [...sortedQualifiers, ...nonQualifiers];

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

    handlePlayerClick = (id1) => {
        this.props.history.push(`/BaseballCard/${id1}`);
    };

    render() {
        const { player, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        const filteredPlayers = player.filter((data) => data.ip > 0);

        return (
            <div className="pitching-container">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 className="minibats-title">Minibat All-Time Pitching Stats</h1>
                <p>*Must have 20 innings to qualify for the ERA Leaderboard</p>
                <div className="table-responsive">
                    <Table striped bordered hover className="pitching-table">
                        <thead>
                            <tr>
                                <th className="sticky-column">
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
                                <tr key={data.id1}>
                                    <td
                                        className="sticky-column"
                                        style={{ cursor: 'pointer', color: 'blue' }}
                                        onClick={() => this.handlePlayerClick(data.id1)}
                                    >
                                        {data.name}
                                    </td>
                                    <td>{data.ip}</td>
                                    <td>{data.w}</td>
                                    <td>{data.l}</td>
                                    <td>{data.sv}</td>
                                    <td>{parseFloat(data.era)}</td>
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
