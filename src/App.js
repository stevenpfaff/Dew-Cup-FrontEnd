import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import Teams from './components/Teams/Teams';
import Players from './components/Players/Players';
import CreateTeam from './components/CreateTeam/CreateTeam';
import CreatePlayer from './components/CreatePlayer/CreatePlayer';
import CreateGame from './components/CreateGame/CreateGame';
import Player from './components/Players/Player';
import Team from './components/Teams/Team';
import Tourney from './components/Tournament/Tournament';
import SingleGame from './components/Tournament/GameDetails';
import CreateTourney from './components/CreateTournament/CreateTournament';
import jwtDecode from 'jwt-decode';
import { Grid } from '@material-ui/core'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      teams: [],
      players: [],
      tourneys: [],
      games: []
    }
  }

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try {
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (err) {
      console.log("Error")
    }
  }

  userSignIn = async (userCredentials) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, userCredentials)
      localStorage.setItem('token', response.data.access)
      window.location = '/';
    }
    catch (err) {
      console.log("Login Error")
    }
  }

  logOutUser = () => {
    localStorage.removeItem('token');
    window.location = '/Login'
  }

  createNewUser = async (newUser) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, newUser)
      newUser = response
      window.location = '/login'
    }
    catch (err) {
    }
  }

  getAllTeams = async () => {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/teams/all/')
      this.setState({
        teams: response.data
      });
    }
    catch (err) {
    }
  }

  getAllPlayers = async () => {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/players/all/')
      this.setState({
        players: response.data
      })
    }
    catch (err) {
    }
  }

  getAllTourneys = async () => {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/tournaments/all/')
      this.setState({
        tourneys: response.data
      })
    }
    catch (err) {
    }
  }

  getAllGames = async () => {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/games/all/')
      this.setState({
        games: response.data
      })
    }
    catch (err) {
    }
  }

  createNewTeam = async (team) => {
    let response = await axios.post(`http://127.0.0.1:8000/api/teams/`, team)
    this.getAllTeams();
    window.location = '/Teams'
    return response.status
  }

  createNewPlayer = async (player) => {
    let response = await axios.post(`http://127.0.0.1:8000/api/players/`, player)
    this.getAllPlayers();
    window.location = "/Players"
    return response.status
  }

  createNewTourney = async (tourney) => {
    let response = await axios.post(`http://127.0.0.1:8000/api/tournament/`, tourney)
    this.getAllTourneys();
    window.location = "/"
    return response.status
  }

  createNewGame = async (game) => {
    let response = await axios.post(`http://127.0.0.1:8000/api/games/`, game)
    this.getAllGames();
    window.location = "/"
    return response.status
  }

  getPlayer = async (name) => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/players/${name}/`)
      this.setState({
        players: response.data
      });
    }
    catch (err) {
    }
  }

  getTeam = async (name) => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/teams/${name}/`)
      this.setState({
        teams: response.data
      });
    }
    catch (err) {
    }
  }


  getTourney = async (game) => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/games/${game}/`)
      this.setState({
        games: response.data
      })
    }
    catch (err) {
    }
  }

  getGame = async (games_id) => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/games/single/${games_id}/`)
      this.setState({
        game: response.data
      })
    }
    catch (err) {
    }
  }

  playerSearch = (searchTerm) => {
    const filteredList = this.state.players.filter(function (player) {
      return player.name.toLowerCase() === searchTerm.toLowerCase()
    })
    this.setState({
      players: filteredList
    })
  }

  render() {
    var user = this.state.user;
    return (
      <Grid>
        <NavBar user={user} logOutUser={this.logOutUser} />
        <div className="App">
          <Switch>
            <Route path="/Home" exact render={props => {
              if (!user) {
                return <Redirect to="/Login" />
              }
              else {
                return <Home {...props} user={user} />
              }
            }
            } />
            <Route path="/" exact component={Home} />
            <Route path="/Register" render={props => <Register {...props} createNewUser={this.createNewUser} />} />
            <Route path="/Login" render={props => <Login {...props} userSignIn={this.userSignIn} />} />
            <Route path="/Teams" render={props => <Teams {...props} getAllTeams={this.getAllTeams} />} exact />
            <Route path="/CreateTeam" render={props => <CreateTeam {...props} createNewTeam={this.createNewTeam} />} />
            <Route path="/CreatePlayer" render={props => <CreatePlayer {...props} createNewPlayer={this.createNewPlayer} />} />
            <Route path="/CreateTourney" render={props => <CreateTourney {...props} createNewTourney={this.createNewTourney} />} />
            <Route path="/CreateGame" render={props => <CreateGame {...props} createNewGame={this.createNewGame} />} />
            <Route path="/Players" render={props => <Players {...props} getAllPlayers={this.getAllPlayers} />} exact />
            <Route path="/Players/:name/profile" render={props => <Player {...props} getPlayer={this.getPlayer} />} />
            <Route path="/Teams/:name/profile" render={props => <Team {...props} getTeam={this.getTeam} />} />
            <Route path="/:game" render={props => <Tourney {...props} getTourney={this.getTourney} />} />
            <Route path="/single/:games_id" render={props => <SingleGame {...props} getGame={this.getGame} />} />
          </Switch>
        </div>
      </Grid>
    )
  }
}

export default App;