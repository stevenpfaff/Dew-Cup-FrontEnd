import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Teams from './components/Teams/Teams';
import Minibats from './components/Players/Minibats';
import Pitching from './components/Players/Pitching';
import Hockey from './components/Players/Hockey';
import Tourneys from './components/Tournament/Tournaments';
import HockeyCard from './components/Players/HockeyCard';
import BaseballCard from './components/Players/BaseballCard';
import TourneyCard from './components/Tournament/TourneyCard';
import YearlyStats from './components/Players/YearlyStats';
import Venues from './components/Misc/Venues';
import SeasonRecords from './components/Misc/SeasonRecords';
import { useParams } from 'react-router-dom';

function StatsWrapper() {
  const { year } = useParams();

  return <YearlyStats year={year} />;
}


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/tournaments" element={<Tourneys />} />
        <Route path="/batting" element={<Minibats />} />
        <Route path="/pitching" element={<Pitching />} />
        <Route path="/hockey" element={<Hockey />} />
        <Route path="/hockeycard/:id" element={<HockeyCard />} />
        <Route path="/baseballcard/:id1" element={<BaseballCard />} />
        {/* <Route path="/team/:id" element={<TeamCard />} /> */}
        <Route path="/tourney/:tourney_id" element={<TourneyCard />} />
        <Route path="/yearly/:year" element={<StatsWrapper />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/records" element={<SeasonRecords/>} />
      </Routes>
    </>
  );
}

export default App;
