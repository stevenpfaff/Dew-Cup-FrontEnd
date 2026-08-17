import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Papa from 'papaparse';
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
      loadCSV('/Hockey/dewcup1.csv'),
      loadCSV('/Hockey/dewcup2.csv'),
      loadCSV('/Hockey/dewcup3.csv'),
      loadCSV('/Hockey/dewcup4.csv'),
      loadCSV('/Hockey/coderedclassic1.csv'),
      loadCSV('/Hockey/dewcup5.csv'),
      loadCSV('/Hockey/dewcup6.csv'),
      loadCSV('/Hockey/coderedclassic2.csv'),
    ])
      .then(
        ([
          infoData,
          dewcup1Data,
          dewcup2Data,
          dewcup3Data,
          dewcup4Data,
          crc1Data,
          dewcup5Data,
          dewcup6Data,
          crc2Data
        ]) => {
          const player = infoData.find(
            (player) => String(player.id) === String(id)
          );

          if (player) {
            player.championships = player.championships
              ? player.championships.split(',').map((c) => c.trim())
              : [];

            player.awards = player.awards
              ? player.awards.split(',').map((a) => a.trim())
              : [];
          }

          const dewcup1Stats = dewcup1Data.filter(
            (stats) => String(stats.id) === String(id)
          );

          const dewcup2Stats = dewcup2Data.filter(
            (stats) => String(stats.id) === String(id)
          );

          const dewcup3Stats = dewcup3Data.filter(
            (stats) => String(stats.id) === String(id)
          );

          const dewcup4Stats = dewcup4Data.filter(
            (stats) => String(stats.id) === String(id)
          );

          const crc1Stats = crc1Data.filter(
            (stats) => String(stats.id) === String(id)
          );

          const dewcup5Stats = dewcup5Data.filter(
            (stats) => String(stats.id) === String(id)
          );

          const dewcup6Stats = dewcup6Data.filter(
            (stats) => String(stats.id) === String(id)
          );
          const crc2Stats = crc2Data.filter(
            (stats) => String(stats.id) === String(id)
          );

          const allStats = [
            ...dewcup1Stats,
            ...dewcup2Stats,
            ...dewcup3Stats,
            ...dewcup4Stats,
            ...crc1Stats,
            ...dewcup5Stats,
            ...dewcup6Stats,
            ...crc2Stats
          ];

          setPlayerInfo(player);
          setDewcupStats(allStats);
          setLoading(false);
        }
      )
      .catch((error) => {
        console.error('Error loading hockey CSVs:', error);
        setLoading(false);
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
      hgames: totals.hgames + parseInt(season.hgames || 0, 10),
      goals: totals.goals + parseInt(season.goals || 0, 10),
      assists: totals.assists + parseInt(season.assists || 0, 10),
      points: totals.points + parseInt(season.points || 0, 10),
    }),
    {
      hgames: 0,
      goals: 0,
      assists: 0,
      points: 0,
    }
  );

  return (
    <div className="player-card-wrapper">
      <div className="player-card-container instagram-card">

        {/* LEFT SIDE - IMAGE + ACCOLADES */}
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

          <img
            src={playerInfo.image}
            className="player-image"
            alt={playerInfo.name}
          />

          {(playerInfo.championships.length > 0 ||
            playerInfo.awards.length > 0) && (
            <div className="player-accolades">

              {playerInfo.championships.length > 0 && (
                <div className="accolade-group">
                  <h4>Championships</h4>

                  {playerInfo.championships.map(
                    (championship, index) => (
                      <div
                        key={index}
                        className="accolade-item"
                      >
                        {championship}
                      </div>
                    )
                  )}
                </div>
              )}

              {playerInfo.awards.length > 0 && (
                <div className="accolade-group">
                  <h4>Awards</h4>

                  {playerInfo.awards.map((award, index) => (
                    <div
                      key={index}
                      className="accolade-item"
                    >
                      {award}
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}
        </div>

        {/* RIGHT SIDE - STATS */}
        <div className="stats-card">

          <h5 className="player-stat-headers">
            Hockey Stats
          </h5>

          <div className="table-responsive">
            <table className="player-stat-table">
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
                {dewcupStats.map((season, index) => (
                  <tr key={index}>
                    <td>{season.tourney}</td>
                    <td>{season.hgames}</td>
                    <td>{season.goals}</td>
                    <td>{season.assists}</td>
                    <td>{season.points}</td>
                  </tr>
                ))}

                <tr>
                  <td>
                    <strong>Career</strong>
                  </td>
                  <td>
                    <strong>{careerTotals.hgames}</strong>
                  </td>
                  <td>
                    <strong>{careerTotals.goals}</strong>
                  </td>
                  <td>
                    <strong>{careerTotals.assists}</strong>
                  </td>
                  <td>
                    <strong>{careerTotals.points}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HockeyCard;