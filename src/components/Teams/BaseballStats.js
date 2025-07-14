import React from 'react';
import { SortNumericUp } from 'react-bootstrap-icons';
import Button from '@mui/material/Button';

const BaseballStatsTable = ({ teams, sortData, onTeamClick }) => (
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
            <Button onClick={() => sortData('batswins')} style={{ color: 'white' }}>
              <SortNumericUp />
            </Button>
          </th>
          <th>
            L
            <Button onClick={() => sortData('batslosses')} style={{ color: 'white' }}>
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
            RA
            <Button onClick={() => sortData('runsag')} style={{ color: 'white' }}>
              <SortNumericUp />
            </Button>
          </th>
        <th>
            HR
            <Button onClick={() => sortData('hr')} style={{ color: 'white' }}>
              <SortNumericUp />
            </Button>
          </th>
          <th>
            Bud Wood Memorials
            <Button onClick={() => sortData('batschampionships')} style={{ color: 'white' }}>
              <SortNumericUp />
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
          <tr key={team.id}>
            <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={team.mini}
              alt="N/A"
              style={{ width: '30px', height: '30px' }}
            />
            </td>
            <td className="sticky-column">
              {team.name}
            </td>
            <td>{team.batswins}</td>
            <td>{team.batslosses}</td>
            <td>{team.runs}</td>
            <td>{team.runsag}</td>
            <td>{team.hr}</td>
            <td>{team.batschampionships}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BaseballStatsTable;
