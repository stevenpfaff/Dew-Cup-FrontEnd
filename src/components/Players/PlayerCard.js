import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/playerstats.json';
import { Table } from 'react-bootstrap';
import './PlayerCard.css';

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
          {player.mini && (
            <img
              src={player.mini}
              className="player-mini-logo"
              alt="mini logo 1"
            />
          )}
          {player.mini2 && (
            <img
              src={player.mini2}
              className="player-mini-logo"
              alt="mini logo 2"
            />
          )}
          {player.name}
        </h1>
        <img src={player.image} className="player-image" alt={`${player.name}`} />
        {(player.championships || player.awards) && (
          <Table className="player-accolades-table">
            <thead>
              <tr>
                {player.championships && <th>Championships</th>}
                {player.awards && <th>Awards</th>}
              </tr>
            </thead>
            <tbody>
              <tr>
                {player.championships && (
                  <td>
                    <ul>
                      {player.championships.map((championship, index) => (
                        <li key={index}>{championship}</li>
                      ))}
                    </ul>
                  </td>
                )}
                {player.awards && (
                  <td>
                    <ul>
                      {player.awards.map((award, index) => (
                        <li key={index}>{award}</li>
                      ))}
                    </ul>
                  </td>
                )}
              </tr>
            </tbody>
          </Table>
        )}
      </div>
      <div className="player-stats-section">
        <h1 className='player-name'>Career Stats</h1>
        {player.mbgames > 0 && (
          <>
          <h5 className="player-stat-headers">Batting</h5>
            <div className="table-responsive">
              <Table bordered>
                <thead>
                  <tr>
                    <th>GP</th>
                    <th>AB</th>
                    <th>H</th>
                    <th>AVG</th>
                    <th>OBP</th>
                    <th>SLG</th>
                    <th>OPS</th>
                    <th>2B</th>
                    <th>3B</th>
                    <th>HR</th>
                    <th>RBI</th>
                    <th>R</th>
                    <th>K</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{player.mbgames}</td>
                    <td>{player.ab}</td>
                    <td>{player.hits}</td>
                    <td>{parseFloat(player.average).toFixed(3)}</td>
                    <td>{parseFloat(player.obp).toFixed(3)}</td>
                    <td>{parseFloat(player.slug).toFixed(3)}</td>
                    <td>{parseFloat(player.ops).toFixed(3)}</td>
                    <td>{player.doubles}</td>
                    <td>{player.triples}</td>
                    <td>{player.homeruns}</td>
                    <td>{player.rbi}</td>
                    <td>{player.runs}</td>
                    <td>{player.k}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </>
        )}
        {player.ip > 0 && (
          <>
          <h5 className='player-stat-headers'>Pitching</h5>
            <div className="table-responsive">
              <Table bordered>
                <thead>
                  <tr>
                    <th>IP</th>
                    <th>W</th>
                    <th>L</th>
                    <th>SV</th>
                    <th>ERA</th>
                    <th>K</th>
                    <th>HR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{player.ip}</td>
                    <td>{player.w}</td>
                    <td>{player.l}</td>
                    <td>{player.sv}</td>
                    <td>{parseFloat(player.era).toFixed(2)}</td>
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
          <h5 className='player-stat-headers'>Hockey</h5>
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
