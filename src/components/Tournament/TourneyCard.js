import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/tourneys.json';
import './Card.css';

const TourneyCard = () => {
  const { id } = useParams();
  const tourney = data.find(obj => obj.id === parseInt(id));

  if (!tourney) {
    return <div>Tournament not found</div>;
  }

  return (
    <div className="tourney-card-container">
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
    </div>
  );
};

export default TourneyCard;
