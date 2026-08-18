import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';
import './Table.css';

function Tourneys() {
  const [tourneys, setTourneys] = useState([]);
  const [sport, setSport] = useState('minibats');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/Tourney/tourneydata.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setTourneys(results.data);
          },
        });
      });
  }, []);

  const handleTourneyClick = (tourney_id) => {
    navigate(`/tourney/${tourney_id}`);
  };

  const handleSportChange = (newSport) => {
    setSport(newSport);
  };

  const filteredTourneys = tourneys.filter(
    (tourney) => tourney.sport?.toLowerCase() === sport
  );

  return (
    <div className="tourney-container">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <h1 className="title">Tournaments</h1>

<div className="stats-toggle">
  <button
    className={
      sport === 'minibats'
        ? 'toggle-button active'
        : 'toggle-button'
    }
    onClick={() => handleSportChange('minibats')}
  >
    MiniBats
  </button>

  <button
    className={
      sport === 'hockey'
        ? 'toggle-button active'
        : 'toggle-button'
    }
    onClick={() => handleSportChange('hockey')}
  >
    Hockey
  </button>

  <button
    className={
      sport === 'homerun'
        ? 'toggle-button active'
        : 'toggle-button'
    }
    onClick={() => handleSportChange('homerun')}
  >
    Home Run Derby
  </button>
</div>

<h2 className="minibats-subtitle">
  {sport === 'hockey'
    ? 'Hockey Tournaments'
    : sport === 'homerun'
      ? 'Home Run Derbies'
      : 'MiniBat Tournaments'}
</h2>

      <div className="table-responsive">
        <table className="minibats-table">
          <thead>
            <tr>
              <th>Series</th>
              <th>Year</th>
              <th>Venue</th>
              <th>Winner</th>
              <th>Runner Up</th>
              <th>MVP</th>
            </tr>
          </thead>

          <tbody>
            {filteredTourneys.map((tourney) => (
              <tr key={tourney.id}>
                <td
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() =>
                    handleTourneyClick(tourney.id)
                  }
                >
                  {tourney.name}
                </td>

                <td>{tourney.year}</td>
                <td>{tourney.venue}</td>
                <td>{tourney.winner}</td>
                <td>{tourney.runnerup}</td>
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