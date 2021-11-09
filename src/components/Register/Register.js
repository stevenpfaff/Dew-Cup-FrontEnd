import React, {useState } from 'react'
import "./Register.css"

const Register = (props) => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleFirstNameChange = (event) =>{
        setFirstName(event.target.value);
      }
    
      const handleLastNameChange = (event) =>{
        setLastName(event.target.value);
      }
        
      const handleEmailChange = (event) =>{
        setEmail(event.target.value);
      }
        
      const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
      }
    
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            first_name : firstName,
            last_name : lastName,
            username : email,
            email : email,
            password : password,
        }
        props.createNewUser(newUser);
      };

    return(
        <div>
        <hgroup>
  <h1>Register</h1>
    </hgroup>
    <form>
    <div class="group">
        <input type="text" onChange={handleFirstNameChange}/><span class="highlight"></span><span class="bar"></span>
        <label>First Name</label>
    </div>
    <div class="group">
        <input type="text" onChange={handleLastNameChange}/><span class="highlight"></span><span class="bar"></span>
        <label>Last Name</label>
    </div>
    <div class="group">
        <input type="text" onChange={handleEmailChange}/><span class="highlight"></span><span class="bar"></span>
        <label>Email</label>
    </div>
    <div class="group">
        <input type="password" onChange={handlePasswordChange}/><span class="highlight"></span><span class="bar"></span>
        <label>Password</label>
    </div>
    <button type="button" class="button buttonBlue" onClick={handleSubmit}>Register
        <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
    </button>
    </form>
    </div>
    )
}
export default Register