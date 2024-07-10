import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { SortNumericDown } from 'react-bootstrap-icons';
import Button from '@material-ui/core/Button';
import teamData from '../../data/teams.json';

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            team: teamData,
            sortConfig: { key: '', direction: '' }
        };
    }

    sortData = (key) => {
        const { team, sortConfig } = this.state;
        let direction = 'asc';
        
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedData = [...team].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        this.setState({
            team: sortedData,
            sortConfig: {
                key,
                direction,
            },
        });
    };

    render() {
        const { team } = this.state;
        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>All-Time Team Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                Team
                                <Button onClick={() => this.sortData('name')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                Hockey W
                                <Button onClick={() => this.sortData('hockeywins')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                Hockey L
                                <Button onClick={() => this.sortData('hockeylosses')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                G
                                <Button onClick={() => this.sortData('goals')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                GA
                                <Button onClick={() => this.sortData('goalsag')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                Bats W
                                <Button onClick={() => this.sortData('batswins')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                Bats L
                                <Button onClick={() => this.sortData('batslosses')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                R
                                <Button onClick={() => this.sortData('runs')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                RA
                                <Button onClick={() => this.sortData('runsag')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                Hockey Titles
                                <Button onClick={() => this.sortData('hockeychampionships')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                Bats Titles
                                <Button onClick={() => this.sortData('batschampionships')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.map((team) => (
                            <tr key={team.Id}>
                                <td>{team.name}</td>
                                <td>{team.hockeywins}</td>
                                <td>{team.hockeylosses}</td>
                                <td>{team.goals}</td>
                                <td>{team.goalsag}</td>
                                <td>{team.batswins}</td>
                                <td>{team.batslosses}</td>
                                <td>{team.runs}</td>
                                <td>{team.runsag}</td>
                                <td>{team.hockeychampionships}</td>
                                <td>{team.batschampionships}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Teams;
