import React from 'react';
import { SortNumericUp } from 'react-bootstrap-icons';
import Button from '@mui/material/Button';

const HockeyStatsTable = ({ teams, sortData, onTeamClick }) => (
  <div className="table-responsive">
    <table className="minibats-table">
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
            <td>
              <img src={team.mini} alt="N/A" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            </td>
            <td className="sticky-column">
              {team.name}
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
);

export default HockeyStatsTable;
