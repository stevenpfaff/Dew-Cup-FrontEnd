import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import Teams from './components/Teams/Teams';
import Players from './components/Players/Players';
import CreateTeam from './components/Teams/CreateTeam';
import CreatePlayer from './components/Players/CreatePlayer';
import jwtDecode from 'jwt-decode';



class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        user : "",
        allTeams : [],
        allPlayers : [],
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
    }
    catch(err){  
    }
   }

   userSignIn = async (userCredentials) => {
    const response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, userCredentials)
    try{
      localStorage.setItem('token', response.data.access)
      console.log("Token", response.data.access)
       window.location = '/login';
    }
    catch (err){
      console.log("Login Error")
    }
  }

  logOutUser = async () =>{
    localStorage.removeItem('token');
    window.location = '/Login'
   }

   getAllTeams = async () => {
     let response = await axios.get('http://127.0.0.1:8000/api/teams/all')
     this.setState({
       allTeams : response.data
     })
   }

    createNewTeam = async (team) => {
      let response = await axios.post(`http://127.0.0.1:8000/api/teams/`, team)
      this.getAllTeams();
      window.location = '/Teams'
      return response.status
    }

    createNewPlayer = async (player) => {
      let response = await axios.post(`http://127.0.0.1:8000/api/teams/`, player)
      this.getAllPlayers();
      window.location = "/Players"
      return response.status
    }

   playerSearch = async (searchTerm) => {
     try{
       const filteredList = [];
       const filter = this.state.allPlayers.filter(function(player){
         if(
         player.name.toLowerCase() == searchTerm.toLowerCase())
         {
           filteredList.push(player)
         }
       })
       this.setState({
         allPlayers : filteredList
       })}
       catch{
       }
     }

     getAllPlayers = async () => {
      let response = await axios.get('http://127.0.0.1:8000/api/players/all')
      this.setState({
        allPlayers : response.data
      })
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
          <Route path="/Players" render={props => <Players {...props} getAllPlayers={this.getAllPlayers}/>}/>
        </Switch>
      </div>  
    )}
}

export default App;