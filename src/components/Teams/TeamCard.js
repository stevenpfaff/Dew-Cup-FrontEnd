import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/teams.json';
import { Table } from 'react-bootstrap'
import './Card.css'

const TeamCard = () => {
  const { id } = useParams();
  const team = data.find(obj => obj.id === parseInt(id));

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
<div className="player-card-container">
      <div className="player-image-section">
        <h1 className="player-name">{team.name}</h1>
        <p>Captian: {team.captain}</p>
        <img src={team.image} className="player-image" alt={`${team.name}`} />
      </div>
      <div className="player-stats-section">
        <Table>
          <tbody>
              <>
              <h2 className='player-stat-headers'>Minibats</h2>
                <tr>
                  <td colSpan="2">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>W</th>
                          <th>L</th>
                          <th>R</th>
                          <th>RA</th>
                          <th>Titles</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{team.batswins}</td>
                          <td>{team.batslosses}</td>
                          <td>{team.runs}</td>
                          <td>{team.runsag}</td>
                          <td>{team.batschampionships}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
              </>
              <>
                <tr>
                  <td colSpan="2">
                    <h2 className="player-stat-headers">Hockey</h2>
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>W</th>
                          <th>L</th>
                          <th>G</th>
                          <th>GA</th>
                          <th>Titles</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{team.hockeywins}</td>
                          <td>{team.hockeylosses}</td>
                          <td>{team.goals}</td>
                          <td>{team.goalsag}</td>
                          <td>{team.hockeychampionships}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
              </>
          </tbody>
        </Table>
      </div>
    </div>
    // <div>
    //   <h1>{team.name}</h1>
      
    //   <p>{team.hockeychampionships}</p>
    //   <img src={team.image} alt={team.name} />
    // </div>
  );
};

export default TeamCard;