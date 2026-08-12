import React from 'react';
import { SortNumericUp } from 'react-bootstrap-icons';
import Button from '@mui/material/Button';
import "../Players/Statsheet.css"

const BaseballStatsTable = ({ teams, sortData, onTeamClick }) => (
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
            BWM
            <Button onClick={() => sortData('batschampionships')} style={{ color: 'white' }}>
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
