import React from 'react'
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Teams from './components/Teams/Teams';
import Minibats from './components/Players/Minibats';
import Pitching from './components/Players/Pitching';
import Hockey from './components/Players/Hockey';
import Tourneys from './components/Tournament/Tournaments';
import HockeyCard from './components/Players/HockeyCard';
import BaseballCard from './components/Players/BaseballCard';
import TeamCard from './components/Teams/TeamCard';
import TourneyCard from './components/Tournament/TourneyCard';
import Batting2025 from './components/Players/2025batting';
import Batting2024 from './components/Players/2024batting';
import Batting2023 from './components/Players/2023batting';
import Batting2022 from './components/Players/2022batting';
import Batting2021 from './components/Players/2021batting';
import Pitching2024 from './components/Players/2024pitching';
import Pitching2023 from './components/Players/2023pitching';
import Pitching2022 from './components/Players/2022pitching';
import Pitching2021 from './components/Players/2021pitching';
import Test from './components/Test/Test';



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
      <Route path="/HockeyCard/:id" exact component={HockeyCard} />
      <Route path="/BaseballCard/:id1" exact component={BaseballCard} />
      <Route path="/team/:id" exact component={TeamCard} />
      <Route path="/tourney/:tourney_id" exact component={TourneyCard} />
      <Route path="/test" exact component={Test} />
      <Route path="/Batting/2025" exact component={Batting2025} />
      <Route path="/Batting/2024" exact component={Batting2024} />
      <Route path="/Batting/2023" exact component={Batting2023} />
      <Route path="/Batting/2022" exact component={Batting2022} />
      <Route path="/Batting/2021" exact component={Batting2021} />
      <Route path="/Pitching/2024" exact component={Pitching2024} />
      <Route path="/Pitching/2023" exact component={Pitching2023} />
      <Route path="/Pitching/2022" exact component={Pitching2022} />
      <Route path="/Pitching/2021" exact component={Pitching2021} />
    </div>
  )
}


export default App;