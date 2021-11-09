import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import CreateTeam from './components/CreateTeam/CreateTeam';
import jwt_decode from 'jwt-decode';



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
    const user = jwt_decode(jwt);
    this.setState({user, isUserAuthenticated : true});
    } catch (err) {
      
    }
  }

  createNewUser = async(newUser)=>{
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, newUser)
    }
    catch(err){  
    }
   }

   userSignIn = async (userCredentials) =>{
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', userCredentials)
      localStorage.setItem('token', response.data.token)
       window.location = '/';
    }
    catch (err){
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
   

  render () {
    var user = this.state.user;
    return(
      <div>
        <NavBar user={user} logOutUser={this.logOutUser}/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path = "/Register" render={(props) => (<Register {...props} createNewUser={this.createNewUser}/>)}/>
          <Route path="/Login" render={(props) => (<Login {...props} userSignIn={this.userSignIn}/>)}/>
          <Route path="/Teams" render={(props) => (<CreateTeam {...props} getAllTeams={this.getAllTeams}/>)}/>
        </Switch>
      </div>  
    )}
}

export default App;