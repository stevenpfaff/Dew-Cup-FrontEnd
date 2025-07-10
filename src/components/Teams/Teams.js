import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { SortNumericUp } from 'react-bootstrap-icons';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import teamData from '../../data/teams.json';
import '../Players/Statsheet.css';

const Teams = () => {
  const navigate = useNavigate();

  const [team, setTeam] = useState([...teamData].sort((a, b) => b.hockeychampionships - a.hockeychampionships));
  const [sortConfig, setSortConfig] = useState({ key: 'hockeychampionships', direction: 'desc' });

  const sortData = (key) => {
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

    setTeam(sortedData);
    setSortConfig({ key, direction });
  };

  const handleTeamClick = (id) => {
    navigate(`/team/${id}`);
  };

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
                <Button onClick={() => sortData('name')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Hockey W
                <Button onClick={() => sortData('hockeywins')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Hockey L
                <Button onClick={() => sortData('hockeylosses')} style={{ color: 'white' }}>
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
                Goals Ag
                <Button onClick={() => sortData('goalsag')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Bats W
                <Button onClick={() => sortData('batswins')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Bats L
                <Button onClick={() => sortData('batslosses')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Runs
                <Button onClick={() => sortData('runs')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Runs Ag
                <Button onClick={() => sortData('runsag')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Hockey Titles
                <Button onClick={() => sortData('hockeychampionships')} style={{ color: 'white' }}>
                  <SortNumericUp />
                </Button>
              </th>
              <th>
                Bats Titles
                <Button onClick={() => sortData('batschampionships')} style={{ color: 'white' }}>
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
                    alt="N/A"
                  />
                </td>
                <td
                  className="sticky-column"
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => handleTeamClick(team.id)}
                >
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
};

export default Teams;