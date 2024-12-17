import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Papa from 'papaparse';
import { Table } from 'react-bootstrap';
import './PlayerCard.css';

const HockeyCard = () => {
  const { id } = useParams();
  const [playerInfo, setPlayerInfo] = useState(null);
  const [dewcupStats, setDewcupStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCSV = (file) => {
      return new Promise((resolve, reject) => {
        Papa.parse(file, {
          download: true,
          header: true,
          skipEmptyLines: true,
          complete: (result) => resolve(result.data),
          error: (error) => reject(error),
        });
      });
    };

    Promise.all([
      loadCSV('/info.csv'),
      loadCSV('/dewcup1.csv'),
      loadCSV('/dewcup2.csv'),
      loadCSV('/dewcup3.csv'),
      loadCSV('/dewcup4.csv'),
      loadCSV('/coderedclassic1.csv'),
      loadCSV('/dewcup5.csv')
    ]).then(([infoData, dewcup1Data, dewcup2Data, dewcup3Data, dewcup4Data, crc1Data, dewcup5Data]) => {
      const playerInfo = infoData.find((player) => player.id === id);
      if (playerInfo) {
        playerInfo.championships = playerInfo.championships
          ? playerInfo.championships.split(',').map((c) => c.trim())
          : [];
      
        playerInfo.awards = playerInfo.awards
          ? playerInfo.awards.split(',').map((a) => a.trim())
          : [];
      }
      const dewcup1Stats = dewcup1Data.filter((stats) => stats.id === id);
      const dewcup2Stats = dewcup2Data.filter((stats) => stats.id === id);
      const dewcup3Stats = dewcup3Data.filter((stats) => stats.id === id);
      const dewcup4Stats = dewcup4Data.filter((stats) => stats.id === id);
      const crc1Stats = crc1Data.filter((stats) => stats.id === id);
      const dewcup5Stats = dewcup5Data.filter((stats) => stats.id === id);

      setPlayerInfo(playerInfo);
      setDewcupStats([...dewcup1Stats,...dewcup2Stats,...dewcup3Stats, ...dewcup4Stats, ...crc1Stats, ...dewcup5Stats]);
      setLoading(false);
      console.log(crc1Stats)
    });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!playerInfo || dewcupStats.length === 0) {
    return <div>Player not found</div>;
  }

  const careerTotals = dewcupStats.reduce(
    (totals, season) => ({
      hgames: totals.hgames + parseInt(season.hgames || 0),
      goals: totals.goals + parseInt(season.goals || 0),
      assists: totals.assists + parseInt(season.assists || 0),
      points: totals.points + parseInt(season.points || 0),
    }),
    { hgames: 0, goals: 0, assists: 0, points: 0 }
  );
  
  console.log(careerTotals.hgames)

  return (
    <div className="player-card-wrapper">
      <div className="player-card-container">
        <div className="player-image-section">
          <h1 className="player-name">
          {playerInfo.mini1 && (
            <img
              src={playerInfo.mini1}
              className="player-mini-logo"
              alt="mini logo 1"
            />
          )}
          {playerInfo.mini2 && (
            <img
              src={playerInfo.mini2}
              className="player-mini-logo"
              alt="mini logo 2"
            />
          )}
          {playerInfo.name}
        </h1>
        <img src={playerInfo.image} className="player-image" alt={`${playerInfo.name}`}/>
 {(playerInfo.championships.length > 0 || playerInfo.awards.length > 0) && (
          <Table className="player-accolades-table">
            <thead>
              <tr>
                {playerInfo.championships.length > 0 && <th>Championships</th>}
                {playerInfo.awards.length > 0 && <th>Awards</th>}
              </tr>
            </thead>
            <tbody>
              <tr>
                {playerInfo.championships.length > 0 && (
                  <td>
                    <ul>
                      {playerInfo.championships.map((championship, index) => (
                        <li key={index}>{championship}</li>
                      ))}
                    </ul>
                  </td>
                )}
                {playerInfo.awards.length > 0 && (
                  <td>
                    <ul>
                      {playerInfo.awards.map((award, index) => (
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
          <h5 className="player-stat-headers">Career Stats</h5>
          <Table bordered>
            <thead>
              <tr>
                <th>Tourney</th>
                <th>Games</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {/* Render individual season stats */}
              {dewcupStats.map((season, index) => (
                <tr key={index}>
                  <td>{season.tourney}</td>
                  <td>{season.hgames}</td>
                  <td>{season.goals}</td>
                  <td>{season.assists}</td>
                  <td>{season.points}</td>
                </tr>
              ))}
              {/* Render Career Totals row */}
              <tr>
                <td><strong>Career Totals</strong></td>
                <td><strong>{careerTotals.hgames}</strong></td>
                <td><strong>{careerTotals.goals}</strong></td>
                <td><strong>{careerTotals.assists}</strong></td>
                <td><strong>{careerTotals.points}</strong></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default HockeyCard;
