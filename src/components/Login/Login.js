import React, { useState } from 'react'
import { render } from 'react-dom';
import {Form} from "react-bootstrap"
import {Button, Grid} from '@material-ui/core';


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
                <form onSubmit={handleSubmit}>
                    <h2> Sign In </h2>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text" placeholder="Username" onChange={handleNameChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
                    </Form.Group>
                    <Button type="submit" variant="contained" class="btn btn-success">Sign In</Button>
                    <Grid style={{marginLeft: "850px"}}></Grid>
                </form>
            </div>
        )
    }