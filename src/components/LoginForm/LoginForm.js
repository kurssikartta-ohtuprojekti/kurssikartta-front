import React from 'react'
import { ControlLabel, Button, FormGroup, FormControl } from 'react-bootstrap'
const LoginForm = ({ handleSubmit, handleChange, username, password }) => {
  return (
    <div>
      <h2>Log in to the application</h2>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <ControlLabel>Username: </ControlLabel>
          <FormControl
            value={username}
            onChange={handleChange}
            name="username"
            style={{ width: 350 }}
          />

          <ControlLabel>Password: </ControlLabel>
          <FormControl
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            style={{ width: 350 }}

          /><br />

          <Button type="submit" bsStyle="success">Login</Button>
        </FormGroup>
      </form>
    </div>
  )

}

export default LoginForm