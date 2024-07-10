import { SortNumericDown } from 'react-bootstrap-icons';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import hockeyData from '../../data/hockey.json';

class Players extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hockey: hockeyData,
            sortConfig: {
                key: null,
                direction: 'asc',
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
            if (a[key] < b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
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

    render() {
        const { hockey } = this.state;

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
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                Games
                                <Button onClick={() => this.sortData('games')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                Goals
                                <Button onClick={() => this.sortData('goals')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                Assists
                                <Button onClick={() => this.sortData('assists')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                Points
                                <Button onClick={() => this.sortData('points')} style={{ color: 'white' }}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {hockey.map((trny) => (
                            <tr key={trny.name}>
                                <td>{trny.name}</td>
                                <td>{trny.games}</td>
                                <td>{trny.goals}</td>
                                <td>{trny.assists}</td>
                                <td>{trny.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Players;
