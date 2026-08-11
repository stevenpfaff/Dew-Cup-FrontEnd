import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';
import { SortNumericUp } from 'react-bootstrap-icons';
import './Statsheet.css';

function Minibats() {
    const [players, setPlayers] = useState([]);
    const [statType, setStatType] = useState('hitting');
    const [sortConfig, setSortConfig] = useState({
        key: 'war',
        direction: 'desc'
    });

    const navigate = useNavigate();

    // Load the appropriate CSV whenever the toggle changes
    useEffect(() => {
        const csvFile =
            statType === 'hitting'
                ? '/Minibats/batting.csv'
                : '/Minibats/pitching.csv';

        fetch(csvFile)
            .then((response) => response.text())
            .then((csvData) => {
                Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {

                        if (statType === 'hitting') {

                            const csvPlayerData = result.data.map((player) => ({
                                ...player,
                                homeruns: parseInt(player.homeruns, 10) || 0,
                                mbgames: parseInt(player.mbgames, 10) || 0,
                                ab: parseInt(player.ab, 10) || 0,
                                hits: parseInt(player.hits, 10) || 0,
                                doubles: parseInt(player.doubles, 10) || 0,
                                triples: parseInt(player.triples, 10) || 0,
                                rbi: parseInt(player.rbi, 10) || 0,
                                runs: parseInt(player.runs, 10) || 0,
                                k: parseInt(player.k, 10) || 0,
                                average: parseFloat(player.average) || 0,
                                obp: parseFloat(player.obp) || 0,
                                slug: parseFloat(player.slug) || 0,
                                ops: parseFloat(player.ops) || 0,
                                war: parseFloat(player.oWar) || 0,
                            }));

                            const sortedData = csvPlayerData.sort(
                                (a, b) => b.war - a.war
                            );

                            setPlayers(sortedData);

                            setSortConfig({
                                key: 'war',
                                direction: 'desc'
                            });

                        } else {

                            const csvPlayerData = result.data.map((player) => ({
                                ...player,
                                ip: parseFloat(player.ip) || 0,
                                w: parseInt(player.w, 10) || 0,
                                l: parseInt(player.l, 10) || 0,
                                sv: parseInt(player.sv, 10) || 0,
                                so: parseInt(player.so, 10) || 0,
                                hra: parseInt(player.hra, 10) || 0,
                                era: parseFloat(player.era) || 0,
                                fip: parseFloat(player.fip) || 0,
                                war: parseFloat(player.war) || 0,
                            }));

                            const sortedData = csvPlayerData.sort(
                                (a, b) => b.war - a.war
                            );

                            setPlayers(sortedData);

                            setSortConfig({
                                key: 'war',
                                direction: 'desc'
                            });
                        }
                    },

                    error: (error) => {
                        console.error('Error loading CSV data:', error);
                    },
                });
            });
    }, [statType]);


    const handlePlayerClick = (id1) => {
        navigate(`/BaseballCard/${id1}`);
    };


    const sortData = (key) => {
        let direction = 'asc';

        if (
            sortConfig.key === key &&
            sortConfig.direction === 'asc'
        ) {
            direction = 'desc';
        }

        const sortArray = (array) => {
            return [...array].sort((a, b) => {
                if (a[key] > b[key]) {
                    return direction === 'asc' ? 1 : -1;
                }

                if (a[key] < b[key]) {
                    return direction === 'asc' ? -1 : 1;
                }

                return 0;
            });
        };


        // Only hitting slash stats use the AB qualifier
        if (
            statType === 'hitting' &&
            ['average', 'obp', 'slug', 'ops'].includes(key)
        ) {
            const qualifiers = players.filter((p) => p.ab >= 100);
            const nonQualifiers = players.filter((p) => p.ab < 100);

            const sortedQualifiers = sortArray(qualifiers);
            const sortedNonQualifiers = sortArray(nonQualifiers);

            setPlayers([
                ...sortedQualifiers,
                ...sortedNonQualifiers
            ]);

        } else {
            setPlayers(sortArray(players));
        }

        setSortConfig({
            key,
            direction
        });
    };


    const filteredPlayers = players.filter((data) => {
        if (statType === 'hitting') {
            return data.mbgames !== 0;
        }

        return data.ip > 0;
    });


    return (
        <div className="minibats-container">

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <h1 className="minibats-title">
                Minibat All-Time{' '}
                {statType === 'hitting'
                    ? 'Batting'
                    : 'Pitching'}{' '}
                Stats
            </h1>


            {/* HITTING / PITCHING TOGGLE */}
            <div className="stats-toggle">

                <button
    className={
        statType === 'hitting'
            ? 'toggle-button active'
            : 'toggle-button'
    }
    onClick={() => {
        setPlayers([]);
        setStatType('hitting');
    }}
>
    Hitting
</button>

<button
    className={
        statType === 'pitching'
            ? 'toggle-button active'
            : 'toggle-button'
    }
    onClick={() => {
        setPlayers([]);
        setStatType('pitching');
    }}
>
    Pitching
</button>

            </div>


            {/* HITTING QUALIFIER */}
            {statType === 'hitting' && (
                <p className="note">
                    *Must have 100 AB's to qualify for slashing leaderboard.
                </p>
            )}


            {/* PITCHING QUALIFIER */}
            {statType === 'pitching' && (
                <p className="note">
                    *Must have 20 innings to qualify for the ERA Leaderboard.
                </p>
            )}


            <div className="table-responsive">

                {/* ========================= */}
                {/* HITTING TABLE              */}
                {/* ========================= */}

                {statType === 'hitting' && (

                    <table className="minibats-table">

                        <thead>
                            <tr>

                                <th className="sticky-column">
                                    Player
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('name')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    GP
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('mbgames')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    AB
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('ab')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    H
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('hits')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    2B
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('doubles')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    3B
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('triples')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    HR
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('homeruns')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    RBI
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('rbi')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    R
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('runs')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    K
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('k')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    AVG
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('average')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    OBP
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('obp')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    SLG
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('slug')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    OPS
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('ops')}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>

                                <th>
                                    WAR
                                    <Button
                                        className="sort-button"
                                        onClick={() => sortData('war')}
                                    >
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
                                        style={{
                                            cursor: 'pointer',
                                            color: 'blue'
                                        }}
                                        onClick={() =>
                                            handlePlayerClick(data.id1)
                                        }
                                    >
                                        {data.name}
                                    </td>

                                    <td>{data.mbgames}</td>
                                    <td>{data.ab}</td>
                                    <td>{data.hits}</td>
                                    <td>{data.doubles}</td>
                                    <td>{data.triples}</td>
                                    <td>{data.homeruns}</td>
                                    <td>{data.rbi}</td>
                                    <td>{data.runs}</td>
                                    <td>{data.k}</td>

                                    <td>
                                        {data.average.toFixed(3)}
                                    </td>

                                    <td>
                                        {data.obp.toFixed(3)}
                                    </td>

                                    <td>
                                        {data.slug.toFixed(3)}
                                    </td>

                                    <td>
                                        {data.ops.toFixed(3)}
                                    </td>

                                    <td>
                                        {data.war.toFixed(1)}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                )}


                {/* ========================= */}
                {/* PITCHING TABLE             */}
                {/* ========================= */}

                {statType === 'pitching' && (

                    <table className="minibats-table">

                        <thead>

                            <tr>

                                <th className="sticky-column">
                                    Player

                                    <Button
                                        className="sort-button"
                                        onClick={() =>
                                            sortData('name')
                                        }
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>


                                <th>
                                    IP

                                    <Button
                                        className="sort-button"
                                        onClick={() =>
                                            sortData('ip')
                                        }
                                        style={{ color: 'white' }}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>


                                <th>
                                    W

                                    <Button
                                        className="sort-button"
                                        onClick={() =>
                                            sortData('w')
                                        }
                                        style={{ color: 'white' }}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>


                                <th>
                                    L

                                    <Button
                                        className="sort-button"
                                        onClick={() =>
                                            sortData('l')
                                        }
                                        style={{ color: 'white' }}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>


                                <th>
                                    SV

                                    <Button
                                        className="sort-button"
                                        onClick={() =>
                                            sortData('sv')
                                        }
                                        style={{ color: 'white' }}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>


                                <th>
                                    K

                                    <Button
                                        className="sort-button"
                                        onClick={() =>
                                            sortData('so')
                                        }
                                        style={{ color: 'white' }}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>


                                <th>
                                    HR

                                    <Button
                                        className="sort-button"
                                        onClick={() =>
                                            sortData('hra')
                                        }
                                        style={{ color: 'white' }}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>


                                <th>
                                    ERA

                                    <Button
                                        className="sort-button"
                                        onClick={() =>
                                            sortData('era')
                                        }
                                        style={{ color: 'white' }}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>


                                <th>
                                    FIP

                                    <Button
                                        className="sort-button"
                                        onClick={() =>
                                            sortData('fip')
                                        }
                                        style={{ color: 'white' }}
                                    >
                                        <SortNumericUp />
                                    </Button>
                                </th>


                                <th>
                                    WAR

                                    <Button
                                        className="sort-button"
                                        onClick={() =>
                                            sortData('war')
                                        }
                                        style={{ color: 'white' }}
                                    >
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
                                        style={{
                                            cursor: 'pointer',
                                            color: 'blue'
                                        }}
                                        onClick={() =>
                                            handlePlayerClick(data.id1)
                                        }
                                    >
                                        {data.name}
                                    </td>

                                    <td>{data.ip}</td>
                                    <td>{data.w}</td>
                                    <td>{data.l}</td>
                                    <td>{data.sv}</td>
                                    <td>{data.so}</td>
                                    <td>{data.hra}</td>

                                    <td>
                                        {data.era.toFixed(2)}
                                    </td>

                                    <td>
                                        {data.fip.toFixed(2)}
                                    </td>

                                    <td>
                                        {data.war.toFixed(1)}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                )}

            </div>

        </div>
    );
}

export default Minibats;
