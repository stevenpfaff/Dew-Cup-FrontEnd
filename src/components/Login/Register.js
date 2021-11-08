import React, {useState } from 'react'

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
export default Register