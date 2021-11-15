import React, { useState } from 'react'
import {Form} from "react-bootstrap"
import {Button, Grid} from '@material-ui/core';

const Register = (props) => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      password: password,
    }
    props.createNewUser(newUser);
  };

  return (
    <div>
      <hgroup>
      </hgroup>
      <form onSubmit={handleSubmit}>
                    <h2> Register </h2>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text" placeholder="First Name" onChange={handleFirstNameChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text" placeholder="Last Name" onChange={handleLastNameChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Email" onChange={handleEmailChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text" placeholder="Username" onChange={handleUsernameChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDescription">
                        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
                    </Form.Group>
                    <Button type="submit" variant="contained" className="btn btn-success">Sign In</Button>
                    <Grid style={{marginLeft: "850px"}}></Grid>
                </form>
    </div>
  )
}
export default Register