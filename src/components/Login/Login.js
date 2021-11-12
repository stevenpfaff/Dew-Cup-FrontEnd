import React, { Component } from 'react'
import { render } from 'react-dom';
import "./Login.css"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.userSignIn(this.state)
    }

    render() {
        return (
            <div>
                <hgroup>
                    <h1>Sign In</h1>
                </hgroup>
                <form>
                    <div class="group">
                        <input placeholder="Username" type="text" name="username" onChange={this.handleChange} /><span class="highlight"></span><span class="bar"></span>

                    </div>
                    <div class="group">
                        <input placeholder="Password" type="password" name="password" onChange={this.handleChange} /><span class="highlight"></span><span class="bar"></span>

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