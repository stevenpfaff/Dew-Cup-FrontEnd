import { SortNumericUp } from 'react-bootstrap-icons';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import hockeyData from '../../data/playerstats.json';

class Hockey extends Component {
    constructor(props) {
        super(props);
        
        // Pre-sort the data by points in descending order
        const sortedHockeyData = [...hockeyData].sort((a, b) => b.points - a.points);

        this.state = {
            hockey: sortedHockeyData,
            sortConfig: {
                key: 'points',
                direction: 'desc',
            },
        };
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
        this.props.history.push(`/player/${id}`);
    };

    render() {
        const { hockey } = this.state;
        const filteredHockey = hockey.filter((data) => data.hgames !== 0);
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Individual Hockey Stats</h1>
                <a>*Individual goals and assists not tracked prior to Dew Cup IV*</a>
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
        );
    }
}

export default Hockey;
