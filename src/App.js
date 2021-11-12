import React, {Component} from 'react'
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
import Player from './components/Players/Player';
import jwtDecode from 'jwt-decode';



class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        user : "",
        teams : [],
        players : [],
      }
  }

  componentDidMount () {
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({user});
    } catch (err) {
      console.log("Error")
    }
  }

  createNewUser = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }

   userSignIn = async (userCredentials) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, userCredentials)
      localStorage.setItem('token', response.data.access)
       window.location = '/';
    }
    catch (err){
      console.log("Login Error")
    }
  }

  logOutUser =  () => {
    localStorage.removeItem('token');
    window.location = '/Login'
   }

   getAllTeams = async () => {
     try {
     let response = await axios.get('http://127.0.0.1:8000/api/teams/all/')
     this.setState({
       teams : response.data
     });} 
     catch (err){
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

    getPlayer = async () => {
      try {
      let response = await axios.get('http://127.0.0.1:8000/api/players/:name/profile')
      this.setState({
        players : response.data
      });} 
      catch (err){
    }
   }

   playerSearch = (searchTerm) => {
       const filteredList = this.state.allPlayers.filter(function(player){
        return player.name.toLowerCase() == searchTerm.toLowerCase()
        })
       this.setState({
         allPlayers : filteredList
       })
      }
    

     getAllPlayers = async () => {
       try {
      let response = await axios.get('http://127.0.0.1:8000/api/players/all/')
      this.setState({
        players : response.data
      })}
     catch (err){
    }
  }
   

  render () {
    var user = this.state.user;
    return(
      <div>
        <NavBar user={user} logOutUser={this.logOutUser}/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path = "/Register" render={props => <Register {...props} createNewUser={this.createNewUser}/>}/>
          <Route path="/Login" render={props => <Login {...props} userSignIn={this.userSignIn}/>}/>
          <Route path="/Teams" render={props => <Teams {...props} getAllTeams={this.getAllTeams}/>}/>
          <Route path="/CreateTeam" render={props => <CreateTeam {...props} createNewTeam={this.createNewTeam}/>}/>
          <Route path ="/CreatePlayer" render={props => <CreatePlayer {...props} createNewPlayer={this.createNewPlayer}/>}/>
          <Route path="/Players" render={props => <Players {...props} getAllPlayers={this.getAllPlayers}/>}exact/>
          <Route path="/Players/:name/profile" render={props => <Player {...props} getPlayer={this.getPlayer}/>}/>
        </Switch>
      </div>  
    )}
}

export default App;