import React from 'react'
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Teams from './components/Teams/Teams';
import Games from './components/Games/Games';
import AddGame from './components/AddGame/AddGame';
import CreateTeam from './components/CreateTeam/CreateTeam';
import Create from './components/CreatePlayer/AddPlayer';
import MBPlayers from './components/Players/MBPlayerStats';
import Players from './components/Players/Players';
import Tourneys from './components/Tournament/Tournaments';
import CreateTourney from './components/CreateTournament/CreateTournament';



function App() {
  return (
    <div>
      <NavBar />
      <Route path="/CreatePlayer" exact component={Create} />
      <Route path="/Teams" exact component={Teams} />
      <Route path="/CreateTeam" exact component={CreateTeam} />
      <Route path="/" exact component={Tourneys} />
      <Route path="/CreateTourney" exact component={CreateTourney} />
      <Route path="/Games" exact component={Games} />
      <Route path="/AddGame" exact component={AddGame} />
      <Route path="/minibatstats" exact component={MBPlayers} />
      <Route path="/hockeystats" exact component={Players} />
    </div>
  )
}


export default App;