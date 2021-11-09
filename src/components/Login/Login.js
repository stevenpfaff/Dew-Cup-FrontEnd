import React, {useState } from 'react'

const Login = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {email : email, password : password}
        props.userSignIn(user)
    }

    return(
        <div>
        <hgroup>
  <h1>Sign In</h1>
    </hgroup>
    <form>
    <div class="group">
        <input type="text" placeholder="Email" onChange={handleEmailChange}/><span class="highlight"></span><span class="bar"></span>
        <label>Email</label>
    </div>
    <div class="group">
        <input type="password" placeholder="Password" onChange={handlePasswordChange}/><span class="highlight"></span><span class="bar"></span>
        <label>Password</label>
    </div>
    <button type="button" class="button buttonBlue" onClick={handleSubmit}>Login
        <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
    </button>
    </form>
    </div>
    )
}
export default Login;