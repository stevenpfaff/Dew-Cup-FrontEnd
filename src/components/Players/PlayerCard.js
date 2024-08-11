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
                <tr>
                  <th colSpan="2" className="stats-header">Minibat Batting Stats</th>
                </tr>
                <tr>
                  <th>Minibat Games</th>
                  <td>{player.mbgames}</td>
                </tr>
                <tr>
                  <th>At Bats</th>
                  <td>{player.ab}</td>
                </tr>
                <tr>
                  <th>Hits</th>
                  <td>{player.hits}</td>
                </tr>
                <tr>
                  <th>Batting Average</th>
                  <td>{player.average}</td>
                </tr>
                <tr>
                  <th>Slugging Percentage</th>
                  <td>{player.slug}</td>
                </tr>
                <tr>
                  <th>Doubles</th>
                  <td>{player.doubles}</td>
                </tr>
                <tr>
                  <th>Triples</th>
                  <td>{player.triples}</td>
                </tr>
                <tr>
                  <th>Homeruns</th>
                  <td>{player.homeruns}</td>
                </tr>
                <tr>
                  <th>RBI's</th>
                  <td>{player.rbi}</td>
                </tr>
              </>
            )}
            {player.ip > 0 && (
              <>
                <tr>
                  <th colSpan="2" className="stats-header">Minibat Pitching Stats</th>
                </tr>
                <tr>
                  <th>Innings Pitched</th>
                  <td>{player.ip}</td>
                </tr>
                <tr>
                  <th>Wins</th>
                  <td>{player.w}</td>
                </tr>
                <tr>
                  <th>Losses</th>
                  <td>{player.l}</td>
                </tr>
                <tr>
                  <th>Saves</th>
                  <td>{player.sv}</td>
                </tr>
                <tr>
                  <th>Earned Run Average</th>
                  <td>{player.era}</td>
                </tr>
                <tr>
                  <th>Strikeouts</th>
                  <td>{player.so}</td>
                </tr>
                <tr>
                  <th>Homeruns Allowed</th>
                  <td>{player.hra}</td>
                </tr>
              </>
            )}
            {player.hgames > 0 && (
              <>
                <tr>
                  <th colSpan="2" className="stats-header">Hockey Stats</th>
                </tr>
                <tr>
                  <th>Hockey Games</th>
                  <td>{player.hgames}</td>
                </tr>
                <tr>
                  <th>Goals</th>
                  <td>{player.goals}</td>
                </tr>
                <tr>
                  <th>Assists</th>
                  <td>{player.assists}</td>
                </tr>
                <tr>
                  <th>Points</th>
                  <td>{player.points}</td>
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
