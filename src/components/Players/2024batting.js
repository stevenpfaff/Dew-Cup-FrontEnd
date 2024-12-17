import { SortNumericUp } from 'react-bootstrap-icons';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Papa from 'papaparse'; // Import PapaParse for CSV parsing
import './Statsheet.css';

class Batting2024 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player: [],
            sortConfig: {
                key: 'homeruns',
                direction: 'desc',
            },
        };
    }

    componentDidMount() {
        // Load the CSV file and parse it
        fetch('/2024-minibats.csv')
            .then((response) => response.text())
            .then((csvData) => {
                Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        const playerData = result.data
                            .filter((player) => player.mbgames > 0)
                            .map((player) => ({
                                ...player,
                                average: parseFloat(player.average),
                                obp: parseFloat(player.obp),
                                slug: parseFloat(player.slug),
                                ops: parseFloat(player.ops),
                                mbgames: parseInt(player.mbgames, 10),
                                ab: parseInt(player.ab, 10),
                                hits: parseInt(player.hits, 10),
                                doubles: parseInt(player.doubles, 10),
                                triples: parseInt(player.triples, 10),
                                homeruns: parseInt(player.homeruns, 10),
                                rbi: parseInt(player.rbi, 10),
                                runs: parseInt(player.runs, 10),
                                k: parseInt(player.k, 10),
                            }));

                        // Sort data by home runs in descending order
                        const sortedPlayerData = [...playerData].sort((a, b) => b.homeruns - a.homeruns);

                        this.setState({ player: sortedPlayerData });
                    },
                });
            });
    }

    sortData = (key) => {
        const { player, sortConfig } = this.state;
        let direction = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        if (key === 'average' || key === 'slug' || key === 'obp' || key === 'ops') {
            const qualifiers = player.filter((p) => p.ab >= 40);
            const nonQualifiers = player.filter((p) => p.ab < 40);

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
        const { player } = this.state;

        return (
            <div className="minibats-container">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 className="minibats-title">2024 Batting Stats</h1>
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
                                <tr key={data.id1}>
                                    <td className="sticky-column" style={{ cursor: 'pointer', color: 'blue' }} onClick={() => this.handlePlayerClick(data.id1)}>
                                        {data.name}
                                    </td>
                                    <td>{data.mbgames}</td>
                                    <td>{data.ab}</td>
                                    <td>{data.hits}</td>
                                    <td>{data.average.toFixed(3)}</td>
                                    <td>{data.obp.toFixed(3)}</td>
                                    <td>{data.slug.toFixed(3)}</td>
                                    <td>{data.ops.toFixed(3)}</td>
                                    <td>{data.doubles}</td>
                                    <td>{data.triples}</td>
                                    <td>{data.homeruns}</td>
                                    <td>{data.rbi}</td>
                                    <td>{data.runs}</td>
                                    <td>{data.so}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Batting2024;
