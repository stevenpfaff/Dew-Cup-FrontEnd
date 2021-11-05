import React, {useState } from 'react'

export default function Register(props) {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleFirstNameChange = (event) =>{
        setFirstName(event.target.value);
        console.log("firstName", firstName)
      }
    
      const handleLastNameChange = (event) =>{
        setLastName(event.target.value);
        console.log("lastName", lastName)
      }
        
      const handleEmailChange = (event) =>{
        setEmail(event.target.value);
        console.log("email", email)
      }
        
      const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
        console.log("password", password)
      }
    
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            firstname : firstName,
            lastname : lastName,
            username : email,
            email : email,
            password : password,
        } 
        console.log("handleSubmit:", newUser)
        console.log("handleSubmit:", props)
        props.createNewUser(newUser);
      };

    return(
        <div className="App">
            <div className="register">
                <h1>Register</h1>
                <label>First Name</label>
                <input type="text" onChange={handleFirstNameChange}/>
            <label>Last Name</label>
            <input type="text" onChange={handleLastNameChange}/>
            <label>Email</label>
            <input type="text" onChange={handleEmailChange}/>
            <label>Password</label>
            <input type="text" onChange={handlePasswordChange}/>
            <button onClick={handleSubmit}> Register </button>
            </div>
        </div>
    )
}