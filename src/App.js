import React from 'react'
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Teams from './components/Teams/Teams';
import Minibats from './components/Players/Minibats';
import Pitching from './components/Players/Pitching';
import Hockey from './components/Players/Hockey';
import Tourneys from './components/Tournament/Tournaments';
import PlayerCard from './components/Players/PlayerCard';
import TeamCard from './components/Teams/TeamCard';



function App() {
  return (
    <div>
      <NavBar />
      <Route path="/Teams" exact component={Teams} />
      <Route path="/" exact component={Tourneys} />
      <Route path="/minibatstats" exact component={Minibats} />
      <Route path="/minibatpitching" exact component={Pitching} />
      <Route path="/hockeystats" exact component={Hockey} />
      <Route path="/player/:id" exact component={PlayerCard} />
      <Route path="/team/:id" exact component={TeamCard} />
    </div>
  )
}


export default App;