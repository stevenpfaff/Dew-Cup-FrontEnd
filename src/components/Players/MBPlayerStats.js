import { SortNumericDown } from 'react-bootstrap-icons';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import playerData from '../../data/bats.json';

class MBPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: playerData,
            sortConfig: {
                key: null,
                direction: 'asc',
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
            if (a[key] < b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
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

    render() {
        const { player } = this.state;

        return (
            <div style={{ marginRight: "25%", marginLeft: "25%", marginBottom: "10%" }} >
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <h1 style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "5%", marginTop: "5%", fontFamily: "inherit" }}>Minibat Individual Player Stats</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                Player 
                                <Button onClick={() => this.sortData('name')}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                GP 
                                <Button onClick={() => this.sortData('games')}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                AB 
                                <Button onClick={() => this.sortData('ab')}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                H 
                                <Button onClick={() => this.sortData('hits')}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                AVG 
                                <Button onClick={() => this.sortData('average')}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                2B 
                                <Button onClick={() => this.sortData('doubles')}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                3B 
                                <Button onClick={() => this.sortData('triples')}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                HR 
                                <Button onClick={() => this.sortData('homeruns')}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                            <th>
                                RBI 
                                <Button onClick={() => this.sortData('rbi')}>
                                    <SortNumericDown />
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {player.map((trny) => (
                            <tr key={trny.name}>
                                <td>{trny.name}</td>
                                <td>{trny.games}</td>
                                <td>{trny.ab}</td>
                                <td>{trny.hits}</td>
                                <td>.{trny.average}</td>
                                <td>{trny.doubles}</td>
                                <td>{trny.triples}</td>
                                <td>{trny.homeruns}</td>
                                <td>{trny.rbi}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MBPlayers;
