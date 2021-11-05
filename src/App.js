import React, {Component} from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import jwtDecode from 'jwt-decode';



class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        user: "",
        allPlayers : [],
        selectedPlayer : [],
        playerInfo :[]
      }
  }

  componentDidMount () {
    const jwt = localStorage.getItem('token');
    try{
    const user = jwtDecode(jwt);
    this.setState({user});
    this.getAllPlayers();
    } catch (err) {
      
    }
  }

  createNewUser = async(User)=>{
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, User)
    }
    catch(err){  
    }
   }

   userSignIn = async (userCredentials) =>{
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', userCredentials)
      localStorage.setItem('token', response.data.token)
       window.location = '/Home';
    }
    catch (err){
    }
  }

  logOutUser = async () =>{
    localStorage.removeItem('token');
    window.location = '/Login'
   }

  render () {
    var user = this.state.user;
    return(
        <div>
          <Home />
          <Register />
          <Login />
        </div>  
    )}
}

export default App;