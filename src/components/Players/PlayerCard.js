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
        <h1 className="player-name">{player.name}</h1>
        <img src={player.image} className="player-image" alt={`${player.name}`} />
      </div>
      <div className="player-stats-section">
        <Table>
          <tbody>
            {player.mbgames > 0 && (
              <>
              <h2 className='player-stat-headers'>Batting</h2>
                <tr>
                  <td colSpan="2">
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
                          <td>{player.average}</td>
                          <td>{player.obp}</td>
                          <td>{player.slug}</td>
                          <td>{player.ops}</td>
                          <td>{player.doubles}</td>
                          <td>{player.triples}</td>
                          <td>{player.homeruns}</td>
                          <td>{player.rbi}</td>
                          <td>{player.runs}</td>
                          <td>{player.k}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
              </>
            )}
            {player.ip > 0 && (
              <>
                <tr>
                  <td colSpan="2">
                    <h2 className="player-stat-headers">Pitching</h2>
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
                  </td>
                </tr>
              </>
            )}
            {player.hgames > 0 && (
              <>
                <tr>
                  <td colSpan="2">
                    <h2 className="player-stat-headers">Hockey</h2>
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

export default PlayerCard;
