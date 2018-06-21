import React from 'react'
import { ControlLabel, Button, FormGroup, FormControl } from 'react-bootstrap'
import './LoginForm.css'
const LoginForm = ({ handleSubmit, handleRegister, handleChange, username, password }) => {
  return (
    <div className="loginWrapper">
      <h2 className="loginHeader">Login</h2>

      <form onSubmit={handleSubmit}>
        <FormGroup className="loginForm">
          <ControlLabel>Username: </ControlLabel>
          <FormControl
            className="loginInput"
            value={username}
            onChange={handleChange}
            name="username"
          />

          <ControlLabel>Password: </ControlLabel>
          <FormControl
            className="loginInput"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}

          />

          <Button className="loginSubmit" type="submit" bsStyle="success">Login</Button>
          &nbsp; <Button className="registerSubmit" onClick={handleRegister}>Register</Button>

        </FormGroup>
        {/* &nbsp; <Button className="register" type="submit">Register</Button> */}
      </form>
    </div>
  )

}

export default LoginForm