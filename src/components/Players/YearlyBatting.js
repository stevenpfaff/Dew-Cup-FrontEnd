import React, { useState, useEffect } from 'react';
import { SortNumericUp } from 'react-bootstrap-icons';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';
import './Statsheet.css';

function BattingStats({ year }) {
  const [player, setPlayer] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'homeruns', direction: 'desc' });
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
              .filter((player) => player.mbgames > 0)
              .map((player) => ({
                ...player,
                average: parseFloat(player.average),
                obp: parseFloat(player.obp),
                slug: parseFloat(player.slug),
                ops: parseFloat(player.ops),
                mbgames: parseInt(player.mbgames, 10),
                ab: parseInt(player.ab, 10),
                hits: parseInt(player.hits, 10),
                doubles: parseInt(player.doubles, 10),
                triples: parseInt(player.triples, 10),
                homeruns: parseInt(player.homeruns, 10),
                rbi: parseInt(player.rbi, 10),
                runs: parseInt(player.runs, 10),
                k: parseInt(player.k, 10),
              }));

            const sortedPlayerData = [...playerData].sort((a, b) => b.homeruns - a.homeruns);
            setPlayer(sortedPlayerData);
          },
        });
      });
  }, [year]);

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const qualifiesForFilter = ['average', 'slug', 'obp', 'ops'].includes(key);
    const qualifiers = qualifiesForFilter ? player.filter((p) => p.ab >= 40) : player;
    const nonQualifiers = qualifiesForFilter ? player.filter((p) => p.ab < 40) : [];

    const sorted = [...qualifiers].sort((a, b) => {
      if (a[key] > b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] < b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setPlayer([...sorted, ...nonQualifiers]);
    setSortConfig({ key, direction });
  };

  const handlePlayerClick = (id1) => {
    navigate(`/BaseballCard/${id1}`);
  };

  return (
    <div className="minibats-container">
      <h1 className="minibats-title">{year} Batting Stats</h1>
      <div className="table-responsive">
        <table className="minibats-table">
          <thead>
            <tr>
              {[
                { key: 'name', label: 'Player' },
                { key: 'ab', label: 'AB' },
                { key: 'hits', label: 'H' },
                { key: 'doubles', label: '2B' },
                { key: 'triples', label: '3B' },
                { key: 'homeruns', label: 'HR' },
                { key: 'rbi', label: 'RBI' },
                { key: 'runs', label: 'R' },
                { key: 'average', label: 'AVG' },
                { key: 'obp', label: 'OBP' },
                { key: 'slug', label: 'SLG' },
                { key: 'ops', label: 'OPS' },
              ].map(({ key, label }) => (
                <th key={key} scope="col">
                  {label}
                  <button
                    onClick={() => sortData(key)}
                    className="sort-button"
                    aria-label={`Sort by ${label}`}
                  >
                    <SortNumericUp />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {player.map((data) => (
              <tr key={data.id1}>
                <td
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => handlePlayerClick(data.id1)}
                >
                  {data.name}
                </td>
                <td>{data.ab}</td>
                <td>{data.hits}</td>
                <td>{data.doubles}</td>
                <td>{data.triples}</td>
                <td>{data.homeruns}</td>
                <td>{data.rbi}</td>
                <td>{data.runs}</td>
                <td>{data.average.toFixed(3)}</td>
                <td>{data.obp.toFixed(3)}</td>
                <td>{data.slug.toFixed(3)}</td>
                <td>{data.ops.toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BattingStats;