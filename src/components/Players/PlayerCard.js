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

  const yearlyStats = Object.keys(player)
    .filter(key => key.endsWith('_stats'))
    .map(key => ({
      year: key.split('_')[0],
      stats: player[key]
    }))
    .sort((a, b) => parseInt(a.year) - parseInt(b.year));


  // Directly use player's career totals
  const careerTotals = {
    mbgames: player.mbgames,
    ab: player.ab,
    hits: player.hits,
    average: player.average,
    obp: player.obp,
    slug: player.slug,
    ops: player.ops,
    doubles: player.doubles,
    triples: player.triples,
    homeruns: player.homeruns,
    rbi: player.rbi,
    runs: player.runs,
    k: player.k,
    ip: player.ip,
    w: player.w,
    l: player.l,
    sv: player.sv,
    so: player.so,
    era: player.era,
    hra: player.hra,
    hgames: player.hgames,
    goals: player.goals,
    assists: player.assists,
    points: player.points,
  };

  return (
    <div class="player-card-wrapper">
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

        {yearlyStats.length > 0 && (
          <>
            <h5 className="player-stat-headers">Batting</h5>
            <div className="table-responsive">
              <Table bordered>
                <thead>
                  <tr>
                    <th>Year</th>
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
                  {yearlyStats.map(({ year, stats }, index) => (
                    <tr key={index}>
                      <td>{year}</td>
                      <td>{stats.mbgames}</td>
                      <td>{stats.ab}</td>
                      <td>{stats.hits}</td>
                      <td>{parseFloat(stats.average).toFixed(3)}</td>
                      <td>{parseFloat(stats.obp).toFixed(3)}</td>
                      <td>{parseFloat(stats.slug).toFixed(3)}</td>
                      <td>{parseFloat(stats.ops).toFixed(3)}</td>
                      <td>{stats.doubles}</td>
                      <td>{stats.triples}</td>
                      <td>{stats.homeruns}</td>
                      <td>{stats.rbi}</td>
                      <td>{stats.runs}</td>
                      <td>{stats.k}</td>
                    </tr>
                  ))}
                  <tr>
                    <td><strong>Career</strong></td>
                    <td><strong>{careerTotals.mbgames}</strong></td>
                    <td><strong>{careerTotals.ab}</strong></td>
                    <td><strong>{careerTotals.hits}</strong></td>
                    <td><strong>{careerTotals.average.toFixed(3)}</strong></td>
                    <td><strong>{careerTotals.obp.toFixed(3)}</strong></td>
                    <td><strong>{careerTotals.slug.toFixed(3)}</strong></td>
                    <td><strong>{careerTotals.ops.toFixed(3)}</strong></td>
                    <td><strong>{careerTotals.doubles}</strong></td>
                    <td><strong>{careerTotals.triples}</strong></td>
                    <td><strong>{careerTotals.homeruns}</strong></td>
                    <td><strong>{careerTotals.rbi}</strong></td>
                    <td><strong>{careerTotals.runs}</strong></td>
                    <td><strong>{careerTotals.k}</strong></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </>
        )}

{yearlyStats.some(({ stats }) => stats.ip > 0) && (
          <>
            <h5 className="player-stat-headers">Pitching</h5>
            <div className="table-responsive">
              <Table bordered>
                <thead>
                  <tr>
                    <th>Year</th>
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
                  {yearlyStats.map(({ year, stats }, index) => (
                    stats.ip > 0 && (
                      <tr key={index}>
                        <td>{year}</td>
                        <td>{stats.ip}</td>
                        <td>{stats.w}</td>
                        <td>{stats.l}</td>
                        <td>{stats.sv}</td>
                        <td>{parseFloat(stats.era).toFixed(2)}</td>
                        <td>{stats.so}</td>
                        <td>{stats.hra}</td>
                      </tr>
                    )
                  ))}
                  <tr>
                    <td><strong>Career</strong></td>
                    <td><strong>{careerTotals.ip}</strong></td>
                    <td><strong>{careerTotals.w}</strong></td>
                    <td><strong>{careerTotals.l}</strong></td>
                    <td><strong>{careerTotals.sv}</strong></td>
                    <td><strong>{careerTotals.era.toFixed(2)}</strong></td>
                    <td><strong>{careerTotals.so}</strong></td>
                    <td><strong>{careerTotals.hra}</strong></td>
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
    </div>
  );
};

export default PlayerCard;
