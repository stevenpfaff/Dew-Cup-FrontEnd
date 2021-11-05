import React, {useState } from 'react'

export default function Register(props) {

    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(
        <div className="App">
            <div className="register">
                <h1>Register</h1>
                <label>First Name</label>
                <input type="text" onChange={(e) => {
                setFirstName(e.target.value);
            }}
            />
            <label>Last Name</label>
            <input type="text" onChange={(e) => {
                setLastName(e.target.value);
            }}
            />
            <label>Email</label>
            <input type="text" onChange={(e) => {
                setEmail(e.target.value);
            }}
            />
            <label>Password</label>
            <input type="text" onChange={(e) => {
                setPassword(e.target.value);
            }}
            />
            <button> Register </button>
            </div>
        </div>
    )
}