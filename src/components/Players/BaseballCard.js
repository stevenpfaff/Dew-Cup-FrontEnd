import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Papa from 'papaparse';
import './PlayerCard.css';

const BaseballCard = () => {
  const { id1 } = useParams();
  const [playerInfo, setPlayerInfo] = useState(null);
  const [baseballStats, setBaseballStats] = useState([]);
  const [pitchingStats, setPitchingStats] = useState([]);
  const [careerTotals, setCareerTotals] = useState(null);
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

    Promise.all([loadCSV('/Minibats/minibat-info.csv'), loadCSV('/Minibats/2026-minibats.csv'), loadCSV('/Minibats/2025-minibats.csv'), loadCSV('/Minibats/2024-minibats.csv'), loadCSV('/Minibats/2023-minibats.csv'), loadCSV('/Minibats/2022-minibats.csv'), loadCSV('/Minibats/2021-minibats.csv')
      , loadCSV('/Minibats/batting.csv'), loadCSV('/Minibats/pitching.csv') 
    ])
      .then(([infoData, stats2026, stats2025, stats2024, stats2023, stats2022, stats2021, career, pitching]) => {
        const playerInfo = infoData.find((player) => String(player.id1) === String(id1));

        if (playerInfo) {
          playerInfo.championships = playerInfo.championships
            ? playerInfo.championships.split(',').map((c) => c.trim())
            : [];

          playerInfo.awards = playerInfo.awards
            ? playerInfo.awards.split(',').map((a) => a.trim())
            : [];
        }

        const allStats = [...stats2021, ...stats2022, ...stats2023, ...stats2024, ...stats2025, ...stats2026, ...career];
        const playerStats = allStats.filter((stats) => String(stats.id1) === String(id1));
        const pitchingStats = (pitching ?? []).filter((stats) => String(stats.id1) === String(id1));

        const careerStats = playerStats.find((stats) => stats.year === "Career");
        const seasonStats = playerStats.filter((stats) => stats.year !== "Career");

        setPlayerInfo(playerInfo);
        setBaseballStats(seasonStats);
        setCareerTotals(careerStats);
        setPitchingStats(pitchingStats);
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

const oWAR = parseFloat(careerTotals?.oWar) || 0;
const pWAR = parseFloat(pitchingStats[0]?.war) || 0;
const totalWAR = oWAR + pWAR;

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
<div className="total-war">
  <div className="total-war-stat">
    <span className="total-war-label">WAR</span>
    <span className="total-war-value">{totalWAR.toFixed(1)}</span>
  </div>

  <div className="total-war-stat">
    <span className="total-war-label">HR</span>
    <span className="total-war-value">{careerTotals?.homeruns}</span>
  </div>

  <div className="total-war-stat">
    <span className="total-war-label">AVG</span>
    <span className="total-war-value">{careerTotals?.average}</span>
  </div>
</div>
{(playerInfo.championships.length > 0 || playerInfo.awards.length > 0) && (
  <div className="player-accolades">

    {playerInfo.championships.length > 0 && (
      <div className="accolade-group">
        <h4>Championships</h4>

        {playerInfo.championships.map((championship, index) => (
          <div key={index} className="accolade-item">
            {championship}
          </div>
        ))}
      </div>
    )}

    {playerInfo.awards.length > 0 && (
      <div className="accolade-group">
        <h4>Awards</h4>

        {playerInfo.awards.map((award, index) => (
          <div key={index} className="accolade-item">
            {award}
          </div>
        ))}
      </div>
    )}

  </div>
)}
        </div>

        <div className="stats-card">
          <h5 className="player-stat-headers">Batting</h5>
          <div className="table-responsive">
          <table striped bordered hover className='player-stat-table'>
            <thead>
              <tr>
                <th>Year</th>
                <th>GP</th>
                <th>AB</th>
                <th>H</th>
                <th>2B</th>
                <th>3B</th>
                <th>HR</th>
                <th>RBI</th>
                <th>R</th>
                <th>K</th>
                <th>AVG</th>
                {/* <th>OBP</th> */}
                <th>SLG</th>
                {/* <th>OPS</th> */}
                <th>WAR</th>
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
                  <td>{season.doubles}</td>
                  <td>{season.triples}</td>
                  <td>{season.homeruns}</td>
                  <td>{season.rbi}</td>
                  <td>{season.runs}</td>
                  <td>{season.so}</td>
                  <td>{season.average}</td>
                  {/* <td>{season.obp}</td> */}
                  <td>{season.slug}</td>
                  {/* <td>{season.ops}</td> */}
                  <td>{season.war}</td>
                </tr>
              ))}

              {/* Render Career Totals row */}
              {careerTotals && (
                <tr>
                  <td>Career</td>
                  <td>{careerTotals.mbgames}</td>
                  <td>{careerTotals.ab}</td>
                  <td>{careerTotals.hits}</td>
                  <td>{careerTotals.doubles}</td>
                  <td>{careerTotals.triples}</td>
                  <td>{careerTotals.homeruns}</td>
                  <td>{careerTotals.rbi}</td>
                  <td>{careerTotals.runs}</td>
                  <td>{careerTotals.k}</td>
                  <td>{careerTotals.average}</td>
                  {/* <td>{careerTotals.obp}</td> */}
                  <td>{careerTotals.slug}</td>
                  {/* <td>{careerTotals.ops}</td> */}
                  <td>{careerTotals.oWar}</td>
                </tr>
              )}
            </tbody>
          </table>
          </div>
          <h5 className="player-stat-headers">Pitching</h5>
          <div className="table-responsive">
          <table striped bordered hover className="player-stat-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>IP</th>
                <th>W</th>
                <th>L</th>
                <th>SV</th>      
                <th>K</th>
                <th>HR</th>
                <th>ERA</th>
                <th>FIP</th>
                <th>WAR</th>
              </tr>
            </thead>
            <tbody>
              {pitchingStats.length > 0 ? (
                pitchingStats.map((stat, index) => (
                  <tr key={index}>
                    <td>Career</td>
                    <td>{stat.ip}</td>
                    <td>{stat.w}</td>
                    <td>{stat.l}</td>
                    <td>{stat.sv}</td>
                    <td>{stat.so}</td>
                    <td>{stat.hra}</td>
                    <td>{parseFloat(stat.era).toFixed(2)}</td>
                    <td>{parseFloat(stat.fip).toFixed(2)}</td>  
                    <td>{parseFloat(stat.war).toFixed(1)}</td>  
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7"><strong>No Pitching Stats Available</strong></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        </div>
        </div>
        </div>
  );
};

export default BaseballCard;
