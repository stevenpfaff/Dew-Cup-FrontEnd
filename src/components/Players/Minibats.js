import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';
import { SortNumericUp } from 'react-bootstrap-icons';
import './Statsheet.css';

function Minibats() {
  const [player, setPlayer] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'homeruns', direction: 'desc' });
  const navigate = useNavigate();

  // Load CSV on mount
  useEffect(() => {
    fetch('/Minibats/minibats.csv')
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
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
            }));

            const combinedData = csvPlayerData.sort((a, b) => b.homeruns - a.homeruns);
            setPlayer(combinedData);
            setSortConfig({ key: 'homeruns', direction: 'desc' }); // default sort
          },
          error: (error) => {
            console.error('Error loading CSV data:', error);
          },
        });
      });
  }, []);

  const handlePlayerClick = (id1) => {
    navigate(`/BaseballCard/${id1}`);
  };

  const sortData = (key) => {
    let direction = 'asc';

    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const qualifiers = player.filter((p) => p.ab >= 70);
    const nonQualifiers = player.filter((p) => p.ab < 70);

    const sortArray = (array) => {
      return [...array].sort((a, b) => {
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        return 0;
      });
    };

    const sortedQualifiers = sortArray(qualifiers);
    const sortedNonQualifiers = sortArray(nonQualifiers);

    setPlayer([...sortedQualifiers, ...sortedNonQualifiers]);
    setSortConfig({ key, direction });
  };

  const filteredBats = player.filter((data) => data.mbgames !== 0);

  return (
    <div className="minibats-container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <h1 className="minibats-title">Minibat All-Time Batting Stats</h1>
      <p>*Must have 70 AB's to qualify for slashing leaderboard.</p>
      <div className="table-responsive">
        <Table striped bordered hover className="minibats-table">
          <thead>
            <tr>
              <th className="sticky-column">
                Player
                <Button onClick={() => sortData('name')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                H
                <Button onClick={() => sortData('hits')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                2B
                <Button onClick={() => sortData('doubles')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                3B
                <Button onClick={() => sortData('triples')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                HR
                <Button onClick={() => sortData('homeruns')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                RBI
                <Button onClick={() => sortData('rbi')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                R
                <Button onClick={() => sortData('runs')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                AVG
                <Button onClick={() => sortData('average')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                OBP
                <Button onClick={() => sortData('obp')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                SLG
                <Button onClick={() => sortData('slug')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                OPS
                <Button onClick={() => sortData('ops')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBats.map((data) => (
              <tr key={data.id}>
                <td
                  className="sticky-column"
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => handlePlayerClick(data.id1)}
                >
                  {data.name}
                </td>
                <td>{data.hits}</td>
                <td>{data.doubles}</td>
                <td>{data.triples}</td>
                <td>{data.homeruns}</td>
                <td>{data.rbi}</td>
                <td>{data.runs}</td>
                <td>{parseFloat(data.average).toFixed(3)}</td>
                <td>{parseFloat(data.obp).toFixed(3)}</td>
                <td>{parseFloat(data.slug).toFixed(3)}</td>
                <td>{parseFloat(data.ops).toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Minibats;
