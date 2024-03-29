import React from 'react'
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Teams from './components/Teams/Teams';
import Games from './components/Games/Games';
import AddGame from './components/AddGame/AddGame';
import CreateTeam from './components/CreateTeam/CreateTeam';
import Create from './components/CreatePlayer/AddPlayer';
import MBPlayers from './components/Players/MBPlayerStats';
import Tourneys from './components/Tournament/Tournaments';
import CreateTourney from './components/CreateTournament/CreateTournament';
import CoorsClash from './components/CoorsClash/CoorsClash';
import BudWoodStats from './components/BudWood/BudWoodIIStats';
import BudWoodIStats from './components/BudWood/BudWoodIStats';
import CoorsClashStats from './components/CoorsClash/CoorsClashStats';
import CRCI from './components/CodeRedClassic/CRCI';
import DCIV from './components/DewCup/DCIV';


function App() {
  return (
    <div>
      <NavBar />
      <Route path="/hockeystats" exact component={DCIV} />
      <Route path="/CreatePlayer" exact component={Create} />
      <Route path="/Teams" exact component={Teams} />
      <Route path="/CreateTeam" exact component={CreateTeam} />
      <Route path="/" exact component={Tourneys} />
      <Route path="/CreateTourney" exact component={CreateTourney} />
      <Route path="/Games" exact component={Games} />
      <Route path="/AddGame" exact component={AddGame} />
      <Route path="/mbstats" exact component={MBPlayers} />
      <Route path="/coorsclash" exact component={CoorsClash} />
      <Route path="/budwood2stats" exact component={BudWoodStats} />
      <Route path="/minibatstats" exact component={BudWoodIStats} />
      <Route path="/coorsclashstats" exact component={CoorsClashStats} />
      <Route path="/crci" exact component={CRCI} />
    </div>
  )
}


export default App;