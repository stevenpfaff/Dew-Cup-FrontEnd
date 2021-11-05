import React, {useState } from 'react'

export default function Login(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(
        <div className="App">
            <div className="login">
                <h1>Login</h1>
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
            <button> Login </button>
            </div>
        </div>
    )
}