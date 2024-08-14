import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/tourneys.json';
import games from '../../data/games.json';
import './Card.css';

const TourneyCard = () => {
  const { tourney_id } = useParams();
  const tourney = data.find(obj => obj.tourney_id === parseInt(tourney_id));

  if (!tourney) {
    return <div>Tournament not found</div>;
  }

  // Filter the games by the current tournament ID
  const tourneyGames = games.filter(game => game.tourney_id === parseInt(tourney_id));

  return (
    <div className="tourney-card-container">
      <h1 className='title'>{tourney.tourney}</h1>
      <div className="tourney-image-section">
        <img src={tourney.image} className="tourney-image" alt={`${tourney.tourney}`} />
      </div>
      <div className="tourney-info-section">
        <table className="tourney-info-table">
          <thead>
            <tr>
              <th>Details</th>
              <th>{tourney.tourney}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Year</strong></td>
              <td>{tourney.year}</td>
            </tr>
            <tr>
              <td><strong>Winner</strong></td>
              <td>{tourney.winner}</td>
            </tr>
            <tr>
              <td><strong>Runner-up</strong></td>
              <td>{tourney.runnerup}</td>
            </tr>
            <tr>
              <td><strong>Players</strong></td>
              <td>{tourney.players}</td>
            </tr>
            <tr>
              <td><strong>MVP</strong></td>
              <td>{tourney.MVP}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tourney-games-section">
        <h3 className='title'>Games</h3>
        {tourneyGames.length > 0 ? (
          <table className="tourney-games-table">
            <thead>
              <tr>
                <th>Round</th>
                <th>Team</th>
                <th>Team</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {tourneyGames.map(game => (
                <tr key={game.game_id}>
                  <td>{game.round}</td>
                  <td>{game.team1}</td>
                  <td>{game.team2}</td>
                  <td>{game.team1score} - {game.team2score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No games found for this tournament.</p>
        )}
      </div>
    </div>
  );
};

export default TourneyCard;
