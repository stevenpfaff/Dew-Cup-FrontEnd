import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { SortNumericUp } from 'react-bootstrap-icons';
import Papa from 'papaparse';
import './Statsheet.css';

const Pitching = () => {
    const [players, setPlayers] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: 'era', direction: 'asc' });
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        Papa.parse('/Minibats/pitching.csv', {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                const parsedPlayers = result.data.map((player) => ({
                    ...player,
                    ip: parseFloat(player.ip) || 0,
                    era: parseFloat(player.era) || 0,
                    w: parseInt(player.w) || 0,
                    l: parseInt(player.l) || 0,
                    sv: parseInt(player.sv) || 0,
                    so: parseInt(player.so) || 0,
                    hra: parseInt(player.hra) || 0,
                }));

                parsedPlayers.sort((a, b) => b.ip - a.ip);

                setPlayers(parsedPlayers);
                setLoading(false);
            },
            error: (error) => {
                console.error("Error loading pitching data:", error);
                setLoading(false);
            },
        });
    }, []);

    const sortData = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        let sorted = [];

        if (key === 'era') {
            const qualifiers = players.filter((p) => p.ip >= 20);
            const nonQualifiers = players.filter((p) => p.ip > 0 && p.ip < 20);

            const sortedQualifiers = [...qualifiers].sort((a, b) => {
                if (a[key] > b[key]) return direction === 'asc' ? -1 : 1;
                if (a[key] < b[key]) return direction === 'asc' ? 1 : -1;
                return 0;
            });

            sorted = [...sortedQualifiers, ...nonQualifiers];
        } else {
            sorted = [...players].sort((a, b) => {
                if (a[key] > b[key]) return direction === 'asc' ? -1 : 1;
                if (a[key] < b[key]) return direction === 'asc' ? 1 : -1;
                return 0;
            });
        }

        setPlayers(sorted);
        setSortConfig({ key, direction });
    };

    const handlePlayerClick = (id1) => {
        navigate(`/BaseballCard/${id1}`);
    };

    if (loading) return <div>Loading...</div>;

    const filteredPlayers = players.filter((p) => p.ip > 0);

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
                                <Button onClick={() => sortData('name')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                IP
                                <Button onClick={() => sortData('ip')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                W
                                <Button onClick={() => sortData('w')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                L
                                <Button onClick={() => sortData('l')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                SV
                                <Button onClick={() => sortData('sv')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                ERA
                                <Button onClick={() => sortData('era')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                K
                                <Button onClick={() => sortData('so')} style={{ color: 'white' }}>
                                    <SortNumericUp />
                                </Button>
                            </th>
                            <th>
                                HR
                                <Button onClick={() => sortData('hra')} style={{ color: 'white' }}>
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
                                    onClick={() => handlePlayerClick(data.id1)}
                                >
                                    {data.name}
                                </td>
                                <td>{data.ip}</td>
                                <td>{data.w}</td>
                                <td>{data.l}</td>
                                <td>{data.sv}</td>
                                <td>{data.era.toFixed(2)}</td>
                                <td>{data.so}</td>
                                <td>{data.hra}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Pitching;