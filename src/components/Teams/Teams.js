import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import HockeyStatsTable from './HockeyStats';
import BaseballStatsTable from './BaseballStats';
import '../Players/Statsheet.css';

const Teams = () => {
  const [team, setTeam] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'hockeychampionships', direction: 'desc' });

  useEffect(() => {
    fetch('/Team/teamdata.csv')
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true });
        const dataWithNumbers = parsed.data.map((row) => ({
          ...row,
          id: row.id,
          name: row.name,
          mini: row.mini,
          hockeywins: Number(row.h_wins),
          hockeylosses: Number(row.h_loss),
          goals: Number(row.goals),
          goalsag: Number(row.goalsag),
          batswins: Number(row.bats_wins),
          batslosses: Number(row.bats_loss),
          runs: Number(row.runs),
          runsag: Number(row.runsag),
          hockeychampionships: Number(row.dewcup),
          batschampionships: row.budwood && row.budwood.trim() !== '' ? Number(row.budwood) : NaN,
        }));

        setTeam(dataWithNumbers.sort((a, b) => b.hockeychampionships - a.hockeychampionships));
      });
  }, []);

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedData = [...team].sort((a, b) => {
      if (a[key] > b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] < b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setTeam(sortedData);
    setSortConfig({ key, direction });
  };


  return (
    <div className="teams-container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <h1 className="minibats-title">All-Time Team Stats</h1>

      <h2 className="minibats-subtitle">Hockey Stats</h2>
      <HockeyStatsTable teams={team} sortData={sortData} />

      {team.some(t => !isNaN(t.batschampionships)) && (
        <>
          <h2 className="minibats-subtitle">Baseball Stats</h2>
          <BaseballStatsTable
            teams={team.filter(t => !isNaN(t.batschampionships))}
            sortData={sortData}
          />
        </>
      )}
    </div>
  );
};

export default Teams;
