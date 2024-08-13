import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/playerstats.json';
import { Table } from 'react-bootstrap';
import './Card.css';

const PlayerCard = () => {
  const { id } = useParams();
  const player = data.find(obj => obj.id === parseInt(id));

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <div className="player-card-container">
      <div className="player-image-section">
        <h1 className="player-name">
          {player.name}
          {player.mini && (
            <img
              src={player.mini}
              className="player-mini-logo"
              style={{
                width: '50px',
                height: '50px',
                marginLeft: '10px',
                verticalAlign: 'middle'
              }}
            />
          )}
          {player.mini2 && (
            <img
              src={player.mini2}
              className="player-mini-logo"
              style={{
                width: '50px',
                height: '50px',
                marginLeft: '10px',
                verticalAlign: 'middle'
              }}
            />
          )}
        </h1>
        <img src={player.image} className="player-image" alt={`${player.name}`} />
      </div>
      <div className="player-stats-section">
        {player.mbgames > 0 && (
          <>
            <h2 className='player-stat-headers'>Batting</h2>
            <div className="table-responsive">
              <Table bordered>
                <thead>
                  <tr>
                    <th>GP</th>
                    <th>AB</th>
                    <th>H</th>
                    <th>AVG</th>
                    <th>2B</th>
                    <th>3B</th>
                    <th>HR</th>
                    <th>RBI</th>
                    <th>R</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{player.mbgames}</td>
                    <td>{player.ab}</td>
                    <td>{player.hits}</td>
                    <td>{player.average}</td>
                    <td>{player.doubles}</td>
                    <td>{player.triples}</td>
                    <td>{player.homeruns}</td>
                    <td>{player.rbi}</td>
                    <td>{player.runs}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </>
        )}
        {player.ip > 0 && (
          <>
            <h2 className="player-stat-headers">Pitching</h2>
            <div className="table-responsive">
              <Table bordered>
                <thead>
                  <tr>
                    <th>IP</th>
                    <th>W</th>
                    <th>L</th>
                    <th>SV</th>
                    <th>ERA</th>
                    <th>SO</th>
                    <th>HR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{player.ip}</td>
                    <td>{player.w}</td>
                    <td>{player.l}</td>
                    <td>{player.sv}</td>
                    <td>{player.era}</td>
                    <td>{player.so}</td>
                    <td>{player.hra}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </>
        )}
        {player.hgames > 0 && (
          <>
            <h2 className="player-stat-headers">Hockey</h2>
            <div className="table-responsive">
              <Table bordered>
                <thead>
                  <tr>
                    <th>GP</th>
                    <th>G</th>
                    <th>A</th>
                    <th>P</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{player.hgames}</td>
                    <td>{player.goals}</td>
                    <td>{player.assists}</td>
                    <td>{player.points}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
