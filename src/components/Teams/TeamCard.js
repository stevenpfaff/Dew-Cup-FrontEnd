import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/teams.json';
import { Table } from 'react-bootstrap';
import './Card.css';

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
        <p>Captain: {team.captain}</p>
        <img src={team.image} className="player-image" alt={`${team.name}`} />
        {team.titles && team.titles.length > 0 && (
          <Table className="player-accolades-table">
            <thead>
              <tr>
                <th>Championships</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    {team.titles.map((championship, index) => (
                      <li key={index}>{championship}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
        )}
      </div>
      <div className="player-stats-section">
        <h1 className="player-name">Team Stats</h1>
        <Table>
          <tbody>
            {team.batswins && team.batslosses && (
              <>
                <h2 className="player-stat-headers">Minibats</h2>
                <tr>
                  <td colSpan="2">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>W</th>
                          <th>L</th>
                          <th>R</th>
                          <th>RA</th>
                          <th>AVG</th>
                          <th>HR</th>
                          <th>Titles</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{team.batswins}</td>
                          <td>{team.batslosses}</td>
                          <td>{team.runs}</td>
                          <td>{team.runsag}</td>
                          <td>{team.average}</td>
                          <td>{team.homeruns}</td>
                          <td>{team.batschampionships}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
              </>
            )}
            {team.hockeywins && team.hockeylosses && (
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
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TeamCard;
