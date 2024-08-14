import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { SortNumericUp } from 'react-bootstrap-icons';
import Button from '@material-ui/core/Button';
import teamData from '../../data/teams.json';
import '../Players/Statsheet.css'

class Teams extends Component {
    constructor(props) {
        super(props);

        // Sort the team data by hockey championships in descending order
        const sortedTeamData = [...teamData].sort((a, b) => b.hockeychampionships - a.hockeychampionships);

        this.state = { 
            team: sortedTeamData,
            sortConfig: { key: 'hockeychampionships', direction: 'desc' }
        };
    }

    sortData = (key) => {
        const { team, sortConfig } = this.state;
        let direction = 'asc';
        
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedData = [...team].sort((a, b) => {
            if (a[key] > b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] < b[key]) {
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

    handleTeamClick = (id) => {
        this.props.history.push(`/team/${id}`);
    };

    render() {
        const { team } = this.state;
        return (
            <div className="teams-container">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 className="minibats-title">All-Time Team Stats</h1>
                <div className="table-responsive">
                    <Table striped bordered hover className="minibats-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>
                                    Team
                                    <Button onClick={() => this.sortData('name')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    Hockey W
                                    <Button onClick={() => this.sortData('hockeywins')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    Hockey L
                                    <Button onClick={() => this.sortData('hockeylosses')} style={{ color: 'white' }}>
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
                                    Goals Ag
                                    <Button onClick={() => this.sortData('goalsag')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    Bats W
                                    <Button onClick={() => this.sortData('batswins')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    Bats L
                                    <Button onClick={() => this.sortData('batslosses')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    Runs
                                    <Button onClick={() => this.sortData('runs')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    Runs Ag
                                    <Button onClick={() => this.sortData('runsag')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    Hockey Titles
                                    <Button onClick={() => this.sortData('hockeychampionships')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                                <th>
                                    Bats Titles
                                    <Button onClick={() => this.sortData('batschampionships')} style={{ color: 'white' }}>
                                        <SortNumericUp />
                                    </Button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {team.map((team) => (
                                <tr key={team.id}>
                                    <td>
                                        <img 
                                            src={team.mini} 
                                            style={{ width: '30px', height: '30px', marginRight: '10px' }} 
                                        />
                                    </td>
                                    <td className="sticky-column" style={{ cursor: 'pointer', color: 'blue' }} onClick={() => this.handleTeamClick(team.id)}>
                                        {team.name}
                                    </td>
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
            </div>
        );
    }
}

export default Teams;