import { SortNumericUp } from 'react-bootstrap-icons';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Papa from 'papaparse';
import './Statsheet.css';

class Hockey extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            hockey: [],
            sortConfig: {
                key: 'points',
                direction: 'desc',
            },
            loading: true,
        };
    }

    componentDidMount() {
        fetch('/hockey.csv')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then((csvData) => {
                Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        const parsedData = result.data.map((row) => ({
                            ...row,
                            hgames: parseInt(row.hgames, 10) || 0,
                            goals: parseInt(row.goals, 10) || 0,
                            assists: parseInt(row.assists, 10) || 0,
                            points: parseInt(row.points, 10) || 0,
                        }));

                        const sortedHockeyData = [...parsedData].sort((a, b) => b.points - a.points);

                        this.setState({
                            hockey: sortedHockeyData,
                            loading: false,
                        });
                    },
                    error: (error) => {
                        console.error('Error parsing CSV:', error);
                        this.setState({ loading: false });
                    },
                });
            })
            .catch((error) => {
                console.error('Error fetching CSV:', error);
                this.setState({ loading: false });
            });
    }

    sortData = (key) => {
        const { hockey, sortConfig } = this.state;
        let direction = 'asc';
        
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedData = [...hockey].sort((a, b) => {
            if (a[key] > b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] < b[key]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        this.setState({
            hockey: sortedData,
            sortConfig: {
                key,
                direction,
            },
        });
    };

    handlePlayerClick = (id) => {
        this.props.history.push(`/HockeyCard/${id}`);
    };

    render() {
        const { hockey, loading } = this.state;
        const filteredHockey = hockey.filter((data) => data.hgames !== 0);

        if (loading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="hockey-container">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 className="minibats-title">Hockey All-Time Stats</h1>
                <p>*incomplete records for goals, assists, and points</p>
                <div className="table-responsive">
                    <Table striped bordered hover className="hockey-table">
                    <thead>
                        <tr>
                            <th>
                                Player
                                <Button onClick={() => this.sortData('name')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                Games
                                <Button onClick={() => this.sortData('hgames')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                Goals
                                <Button onClick={() => this.sortData('goals')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                Assists
                                <Button onClick={() => this.sortData('assists')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                Points
                                <Button onClick={() => this.sortData('points')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredHockey.map((data) => (
                             <tr key={data.id}>
                             <td style={{ cursor: 'pointer', color: 'blue' }} onClick={() => this.handlePlayerClick(data.id)}>
                                 {data.name}
                             </td>
                                <td>{data.hgames}</td>
                                <td>{data.goals}</td>
                                <td>{data.assists}</td>
                                <td>{data.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
        );
    }
}

export default Hockey;