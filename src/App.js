import React from 'react'
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Teams from './components/Teams/Teams';
import Minibats from './components/Players/Minibats';
import Pitching from './components/Players/Pitching';
import Hockey from './components/Players/Hockey';
import Tourneys from './components/Tournament/Tournaments';
import PlayerCard from './components/Players/PlayerCard';
import TeamCard from './components/Teams/TeamCard';
import TourneyCard from './components/Tournament/TourneyCard';
import Batting2024 from './components/Players/2024batting';
import Batting2023 from './components/Players/2023batting';
import Batting2022 from './components/Players/2022batting';
import Pitching2024 from './components/Players/2024pitching';
import Pitching2023 from './components/Players/2023pitching';
import Pitching2022 from './components/Players/2022pitching';



function App() {
  return (
    <div>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/Teams" exact component={Teams} />
      <Route path="/Tournaments" exact component={Tourneys} />
      <Route path="/Batting" exact component={Minibats} />
      <Route path="/Pitching" exact component={Pitching} />
      <Route path="/Hockey" exact component={Hockey} />
      <Route path="/player/:id" exact component={PlayerCard} />
      <Route path="/team/:id" exact component={TeamCard} />
      <Route path="/tourney/:tourney_id" exact component={TourneyCard} />
      <Route path="/Batting/2024" exact component={Batting2024} />
      <Route path="/Batting/2023" exact component={Batting2023} />
      <Route path="/Batting/2022" exact component={Batting2022} />
      <Route path="/Pitching/2024" exact component={Pitching2024} />
      <Route path="/Pitching/2023" exact component={Pitching2023} />
      <Route path="/Pitching/2022" exact component={Pitching2022} />
    </div>
  )
}


export default App;