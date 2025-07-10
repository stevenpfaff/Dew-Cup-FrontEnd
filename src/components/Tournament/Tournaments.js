import React from 'react';
import tourney from '../../data/tourneys.json';
import { useNavigate } from 'react-router-dom';
import './Table.css';

function Tourneys() {
  const navigate = useNavigate();

  const handleTourneyClick = (tourney_id) => {
    navigate(`/tourney/${tourney_id}`);
  };

  return (
    <div className="tourney-container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <h1 className="title">Tournaments</h1>
      <div className="table-responsive">
        <table className="minibats-table">
          <thead>
            <tr>
              <th>Series</th>
              <th>Year</th>
              <th>Winner</th>
              <th>MVP</th>
            </tr>
          </thead>
          <tbody>
            {tourney.map((tourney) => (
              <tr key={tourney.tourney_id}>
                <td
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => handleTourneyClick(tourney.tourney_id)}
                >
                  {tourney.tourney}
                </td>
                <td>{tourney.year}</td>
                <td>{tourney.winner}</td>
                <td>{tourney.MVP}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tourneys;
