import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { SortNumericUp } from 'react-bootstrap-icons';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';
import './Statsheet.css';

function YearlyStats({ year }) {
  // ==========================================
  // STATE
  // ==========================================

  const [statType, setStatType] = useState('batting');
  const [player, setPlayer] = useState([]);

  const [sortConfig, setSortConfig] = useState({
    key: 'war',
    direction: 'desc',
  });

  const navigate = useNavigate();

  // ==========================================
  // LOAD CSV
  // ==========================================

  useEffect(() => {
    setPlayer([]);

    const file =
      statType === 'batting'
        ? `/Minibats/${year}-minibats.csv`
        : `/Minibats/${year}-pitching.csv`;

    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load ${file}`);
        }

        return response.text();
      })
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,

          complete: (result) => {
            if (statType === 'batting') {
              const playerData = result.data
                .filter((p) => Number(p.mbgames) > 0)
                .map((p) => ({
                  ...p,

                  mbgames: Number(p.mbgames) || 0,
                  ab: Number(p.ab) || 0,
                  hits: Number(p.hits) || 0,
                  doubles: Number(p.doubles) || 0,
                  triples: Number(p.triples) || 0,
                  homeruns: Number(p.homeruns) || 0,
                  rbi: Number(p.rbi) || 0,
                  runs: Number(p.runs) || 0,
                  k: Number(p.k) || 0,

                  average: Number(p.average) || 0,
                  obp: Number(p.obp) || 0,
                  slug: Number(p.slug) || 0,
                  ops: Number(p.ops) || 0,
                  war: Number(p.war) || 0,
                }));

              setPlayer(playerData);

              setSortConfig({
                key: 'war',
                direction: 'desc',
              });
            } else {
              const playerData = result.data
                .filter((p) => Number(p.ip) > 0)
                .map((p) => ({
                  ...p,

                  ip: Number(p.ip) || 0,
                  w: Number(p.w) || 0,
                  l: Number(p.l) || 0,
                  sv: Number(p.sv) || 0,
                  k: Number(p.k) || 0,
                  hr: Number(p.hr) || 0,

                  era: Number(p.era) || 0,
                  fip: Number(p.fip) || 0,
                  pWar: Number(p.pWar) || 0,
                }));

              setPlayer(playerData);

              setSortConfig({
                key: 'pWar',
                direction: 'desc',
              });
            }
          },
        });
      })
      .catch((error) => {
        console.error('Error loading stats:', error);
      });
  }, [year, statType]);

  // ==========================================
  // PLAYER CLICK
  // ==========================================

  const handlePlayerClick = (id1) => {
    navigate(`/BaseballCard/${id1}`);
  };

  // ==========================================
  // SORT
  // ==========================================

  const sortData = (key) => {
    let direction = 'asc';

    if (
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }

    setSortConfig({
      key,
      direction,
    });
  };

  // ==========================================
  // SORTED DATA
  // ==========================================

  const sortedPlayer = [...player].sort((a, b) => {
    const aValue = a[sortConfig.key] ?? 0;
    const bValue = b[sortConfig.key] ?? 0;

    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }

    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }

    return 0;
  });

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="minibats-container">

      <h1 className="minibats-title">
        {year}{' '}
        {statType === 'batting'
          ? 'Batting'
          : 'Pitching'}{' '}
        Stats
      </h1>

            <div className="stats-toggle">

        <button
          className={
            statType === 'batting'
              ? 'toggle-button active'
              : 'toggle-button'
          }
          onClick={() => {
            setPlayer([]);
            setStatType('batting');
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
            setPlayer([]);
            setStatType('pitching');
          }}
        >
          Pitching
        </button>

      </div>

      <div className="table-responsive">
        <table className="minibats-table">

          {statType === 'batting' && (
            <>
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
                      onClick={() => sortData('so')}
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
                {sortedPlayer.map((data) => (
                  <tr key={data.id1}>

                    <td
                      className="sticky-column"
                      style={{
                        cursor: 'pointer',
                        color: 'blue',
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
                    <td>{data.so}</td>

                    <td>
                      {data.average?.toFixed(3)}
                    </td>

                    <td>
                      {data.obp?.toFixed(3)}
                    </td>

                    <td>
                      {data.slug?.toFixed(3)}
                    </td>

                    <td>
                      {data.ops?.toFixed(3)}
                    </td>

                    <td>
                      {data.war?.toFixed(1)}
                    </td>

                  </tr>
                ))}
              </tbody>
            </>
          )}

          {statType === 'pitching' && (
            <>
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
                    IP
                    <Button
                      className="sort-button"
                      onClick={() => sortData('ip')}
                    >
                      <SortNumericUp />
                    </Button>
                  </th>

                  <th>
                    W
                    <Button
                      className="sort-button"
                      onClick={() => sortData('w')}
                    >
                      <SortNumericUp />
                    </Button>
                  </th>

                  <th>
                    L
                    <Button
                      className="sort-button"
                      onClick={() => sortData('l')}
                    >
                      <SortNumericUp />
                    </Button>
                  </th>

                  <th>
                    SV
                    <Button
                      className="sort-button"
                      onClick={() => sortData('sv')}
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
                    HR
                    <Button
                      className="sort-button"
                      onClick={() => sortData('hr')}
                    >
                      <SortNumericUp />
                    </Button>
                  </th>

                  <th>
                    ERA
                    <Button
                      className="sort-button"
                      onClick={() => sortData('era')}
                    >
                      <SortNumericUp />
                    </Button>
                  </th>

                  <th>
                    FIP
                    <Button
                      className="sort-button"
                      onClick={() => sortData('fip')}
                    >
                      <SortNumericUp />
                    </Button>
                  </th>

                  <th>
                    WAR
                    <Button
                      className="sort-button"
                      onClick={() => sortData('pWar')}
                    >
                      <SortNumericUp />
                    </Button>
                  </th>

                </tr>
              </thead>

              <tbody>
                {sortedPlayer.map((data) => (
                  <tr key={data.id1}>

                    <td
                      className="sticky-column"
                      style={{
                        cursor: 'pointer',
                        color: 'blue',
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
                    <td>{data.k}</td>
                    <td>{data.hr}</td>

                    <td>
                      {data.era?.toFixed(2)}
                    </td>

                    <td>
                      {data.fip?.toFixed(2)}
                    </td>

                    <td>
                      {data.pWar?.toFixed(1)}
                    </td>

                  </tr>
                ))}
              </tbody>
            </>
          )}

        </table>
      </div>
    </div>
  );
}

export default YearlyStats;