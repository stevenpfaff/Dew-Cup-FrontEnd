import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { SortNumericUp } from 'react-bootstrap-icons';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';
import './Statsheet.css';

function BattingStats({ year }) {
  const [player, setPlayer] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: 'homeruns',
    direction: 'desc',
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/Minibats/${year}-minibats.csv`)
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
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

            const sortedPlayerData = [...playerData].sort(
              (a, b) => b.war - a.war
            );

            setPlayer(sortedPlayerData);
          },
        });
      })
      .catch((error) => {
        console.error('Error loading batting data:', error);
      });
  }, [year]);

  const handlePlayerClick = (id1) => {
    navigate(`/BaseballCard/${id1}`);
  };

  const sortData = (key) => {
    let direction = 'asc';

    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortArray = (array) => {
      return [...array].sort((a, b) => {
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        return 0;
      });
    };

    const qualifierStats = ['average', 'obp', 'slug', 'ops'];

    if (qualifierStats.includes(key)) {
      const qualifiers = player.filter((p) => p.ab >= 40);
      const nonQualifiers = player.filter((p) => p.ab < 40);

      setPlayer([
        ...sortArray(qualifiers),
        ...sortArray(nonQualifiers),
      ]);
    } else {
      setPlayer(sortArray(player));
    }

    setSortConfig({ key, direction });
  };

  return (
    <div className="minibats-container">
      <h1 className="minibats-title">{year} Batting Stats</h1>

      <p>*Must have 40 AB's to qualify for slashing leaderboard.</p>

      <div className="table-responsive">
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
            {player.map((data) => (
              <tr key={data.id1}>
                <td
                  className="sticky-column"
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => handlePlayerClick(data.id1)}
                >
                  {data.name}
                </td>

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
                <td>{data.war}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BattingStats;

