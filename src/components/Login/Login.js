import React, { useState } from 'react'
import { render } from 'react-dom';
import "./Login.css"

export default function Login(props){

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleNameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userCredentials = {
            username : username,
            password : password,
        }
        props.userSignIn(userCredentials);
    }

        return (
            <div>
                <hgroup>
                    <h1>Sign In</h1>
                </hgroup>
                <form>
                    <div class="group">
                        <input placeholder="Username" type="text" name="username" onChange={handleNameChange} /><span class="highlight"></span><span class="bar"></span>

                    </div>
                    <div class="group">
                        <input placeholder="Password" type="password" name="password" onChange={handlePasswordChange} /><span class="highlight"></span><span class="bar"></span>

                    </div>
                    <button type="button" class="button buttonBlue" onClick={handleSubmit}>Login
                        <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
                    </button>
                </form>
            </div>
        )
    }