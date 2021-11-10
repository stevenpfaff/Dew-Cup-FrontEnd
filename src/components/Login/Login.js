import React, {Component } from 'react'
import { render } from 'react-dom';
import "./Login.css"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.userSignIn(this.state)
    }

    render(){
        return(
            <div>
            <hgroup>
    <h1>Sign In</h1>
        </hgroup>
        <form>
        <div class="group">
            <input type="text" onChange={this.handleChange}/><span class="highlight"></span><span class="bar"></span>
            <label>Email</label>
        </div>
        <div class="group">
            <input type="password" onChange={this.handleChange}/><span class="highlight"></span><span class="bar"></span>
            <label>Password</label>
        </div>
        <button type="button" class="button buttonBlue" onClick={this.handleSubmit}>Login
            <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
        </button>
        </form>
        </div>
        )
    }
}
export default Login;