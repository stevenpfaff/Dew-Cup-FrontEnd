import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Papa from 'papaparse';
import { SortNumericUp } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import './Statsheet.css';

function Hockey() {
  const [hockey, setHockey] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'points', direction: 'desc' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/Hockey/hockey.csv')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const parsedData = result.data.map((row) => ({
              ...row,
              hgames: parseInt(row.hgames, 10) || 0,
              goals: parseInt(row.goals, 10) || 0,
              assists: parseInt(row.assists, 10) || 0,
              points: parseInt(row.points, 10) || 0,
            }));

            const sortedHockeyData = [...parsedData].sort((a, b) => b.points - a.points);
            setHockey(sortedHockeyData);
            setLoading(false);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
            setLoading(false);
          },
        });
      })
      .catch((error) => {
        console.error('Error fetching CSV:', error);
        setLoading(false);
      });
  }, []);

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedData = [...hockey].sort((a, b) => {
      if (a[key] > b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] < b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setHockey(sortedData);
    setSortConfig({ key, direction });
  };

  const handlePlayerClick = (id) => {
    navigate(`/HockeyCard/${id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredHockey = hockey.filter((data) => data.hgames !== 0);

  return (
    <div className="hockey-container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <h1 className="minibats-title">Hockey All-Time Stats</h1>
      <p>*incomplete records for goals, assists, and points</p>
      <div className="table-responsive">
        <Table striped bordered hover className="hockey-table">
          <thead>
            <tr>
              <th>
                Player
                <Button onClick={() => sortData('name')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Games
                <Button onClick={() => sortData('hgames')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Goals
                <Button onClick={() => sortData('goals')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Assists
                <Button onClick={() => sortData('assists')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Points
                <Button onClick={() => sortData('points')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredHockey.map((data) => (
              <tr key={data.id}>
                <td
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => handlePlayerClick(data.id)}
                >
                  {data.name}
                </td>
                <td>{data.hgames}</td>
                <td>{data.goals}</td>
                <td>{data.assists}</td>
                <td>{data.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Hockey;
