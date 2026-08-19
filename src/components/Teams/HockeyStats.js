import React from 'react';
import { SortNumericUp } from 'react-bootstrap-icons';
import Button from '@mui/material/Button';

const HockeyStatsTable = ({ teams, sortData, onTeamClick }) => (
  <div className="minibats-container">

  <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
  />
  <div className="table-responsive">
    <table className="minibats-table">
      <thead>
        <tr>
          <th>
            Team
            <Button onClick={() => sortData('name')} style={{ color: 'white' }}>
              <SortNumericUp />
            </Button>
          </th>
          <th>
            W
            <Button onClick={() => sortData('hockeywins')} style={{ color: 'white' }}>
              <SortNumericUp />
            </Button>
          </th>
          <th>
            L
            <Button onClick={() => sortData('hockeylosses')} style={{ color: 'white' }}>
              <SortNumericUp />
            </Button>
          </th>
          <th>
            GF
            <Button onClick={() => sortData('goals')} style={{ color: 'white' }}>
              <SortNumericUp />
            </Button>
          </th>
          <th>
            GA
            <Button onClick={() => sortData('goalsag')} style={{ color: 'white' }}>
              <SortNumericUp />
            </Button>
          </th>
          <th>
            Dew Cups
            <Button onClick={() => sortData('hockeychampionships')} style={{ color: 'white' }}>
              <SortNumericUp />
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
<tr key={team.id}>
<td className="team-column">
  <img
    src={team.mini}
    alt={team.name}
    className="team-logo"
  />
  <span>{team.name}</span>
</td>
            <td>{team.hockeywins}</td>
            <td>{team.hockeylosses}</td>
            <td>{team.goals}</td>
            <td>{team.goalsag}</td>
            <td>{team.hockeychampionships}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
);

export default HockeyStatsTable;
