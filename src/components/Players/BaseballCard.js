import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Papa from 'papaparse';
import { Table } from 'react-bootstrap';
import './PlayerCard.css';

const BaseballCard = () => {
  const { id1 } = useParams();
  const [playerInfo, setPlayerInfo] = useState(null);
  const [baseballStats, setBaseballStats] = useState([]);
  const [pitchingStats, setPitchingStats] = useState([]);
  const [careerTotals, setCareerTotals] = useState(null); // Separate state for career totals
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCSV = (file) => {
      return new Promise((resolve, reject) => {
        Papa.parse(file, {
          download: true,
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            resolve(result.data);
          },
          error: (error) => {
            reject(error);
          },
        });
      });
    };

    Promise.all([loadCSV('/minibat-info.csv'), loadCSV('/2024-minibats.csv'), loadCSV('/2023-minibats.csv'), loadCSV('/2022-minibats.csv'), loadCSV('/2021-minibats.csv')
      , loadCSV('/minibats.csv'), loadCSV('/pitching.csv') 
    ])
      .then(([infoData, stats2024, stats2023, stats2022, stats2021,  career, pitching]) => {
        const playerInfo = infoData.find((player) => player.id1 === id1);
        if (playerInfo) {
          playerInfo.championships = playerInfo.championships
            ? playerInfo.championships.split(',').map((c) => c.trim())
            : [];
        
          playerInfo.awards = playerInfo.awards
            ? playerInfo.awards.split(',').map((a) => a.trim())
            : [];
        }

        const playerStats = [...stats2021, ...stats2022, ...stats2023, ...stats2024, ...career].filter((stats) => String(stats.id1) === String(id1));
        const pitchingStats = [...pitching].filter((stats) => String(stats.id1) === String(id1));
        const careerStats = playerStats.find((stats) => stats.year === "Career");    
        const seasonStats = playerStats.filter((stats) => stats.year !== "Career");

        setPlayerInfo(playerInfo);
        setBaseballStats(seasonStats);
        setCareerTotals(careerStats);
        setPitchingStats(pitchingStats)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading CSVs:", error);
        setLoading(false);
      });
  }, [id1]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!playerInfo || baseballStats.length === 0) {
    return <div>Player not found</div>;
  }

  return (
    <div className="player-card-wrapper">
      <div className="player-card-container">
        <div className="player-image-section">
          <h1 className="player-name">
          {playerInfo.mini && (
            <img
              src={playerInfo.mini}
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
              {/* Render individual season stats */}
              {baseballStats.map((season, index) => (
                <tr key={index}>
                  <td>{season.year}</td>
                  <td>{season.mbgames}</td>
                  <td>{season.ab}</td>
                  <td>{season.hits}</td>
                  <td>{season.average}</td>
                  <td>{season.obp}</td>
                  <td>{season.slug}</td>
                  <td>{season.ops}</td>
                  <td>{season.doubles}</td>
                  <td>{season.triples}</td>
                  <td>{season.homeruns}</td>
                  <td>{season.rbi}</td>
                  <td>{season.runs}</td>
                  <td>{season.so}</td>
                </tr>
              ))}

              {/* Render Career Totals row */}
              {careerTotals && (
                <tr>
                  <td><strong>Career</strong></td>
                  <td><strong>{careerTotals.mbgames}</strong></td>
                  <td><strong>{careerTotals.ab}</strong></td>
                  <td><strong>{careerTotals.hits}</strong></td>
                  <td><strong>{careerTotals.average}</strong></td>
                  <td><strong>{careerTotals.obp}</strong></td>
                  <td><strong>{careerTotals.slug}</strong></td>
                  <td><strong>{careerTotals.ops}</strong></td>
                  <td><strong>{careerTotals.doubles}</strong></td>
                  <td><strong>{careerTotals.triples}</strong></td>
                  <td><strong>{careerTotals.homeruns}</strong></td>
                  <td><strong>{careerTotals.rbi}</strong></td>
                  <td><strong>{careerTotals.runs}</strong></td>
                  <td><strong>{careerTotals.k}</strong></td>
                </tr>
              )}
            </tbody>
          </Table>
          </div>
          <h5 className="player-stat-headers">Pitching</h5>
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
              {pitchingStats.length > 0 ? (
                pitchingStats.map((stat, index) => (
                  <tr key={index}>
                    <td>{stat.ip}</td>
                    <td>{stat.w}</td>
                    <td>{stat.l}</td>
                    <td>{stat.sv}</td>
                    <td>{parseFloat(stat.era).toFixed(2)}</td>
                    <td>{stat.so}</td>
                    <td>{stat.hra}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7"><strong>No Pitching Stats Available</strong></td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        </div>
        </div>
  );
};

export default BaseballCard;
