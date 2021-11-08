import React, {Component} from 'react'
import { Route, Routes, BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios'
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import jwtDecode from 'jwt-decode';



class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        isUserAuthenticated: false,
        user: {},
      }
  }

  componentDidMount () {
    const jwt = localStorage.getItem('token');
    try{
    const user = jwtDecode(jwt);
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

  render () {
    const user = this.state.user;
    return(
      <div>
        <NavBar/>
        <Routes>
            <Route path='/home' component={Home} />
            <Route path='/register' render={props => <Register {...props} createNewUser={this.createNewUser} />} />
            <Route path='/login'  render ={props => <Login {...props} userSignIn={this.userSignIn}/>}/>
        </Routes>
      </div>  
    )}
}

export default App;