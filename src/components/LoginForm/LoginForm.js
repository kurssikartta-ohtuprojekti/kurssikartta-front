import React from 'react'
import { ControlLabel, Button, FormGroup, FormControl } from 'react-bootstrap'
import Reaptcha from 'reaptcha';

import './LoginForm.css'
const LoginForm = ({ handleSubmit, handleRegister, handleChange, username, password, reCaptcha, reCaptchaExpire, verified }) => {
  const reset = () => this.captcha.reset();
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

          <Reaptcha className="captcha"
            ref={e => (this.captcha = e)}
            sitekey="6LeUDGAUAAAAADuHhR9osYcaewMSKUGo5URI74il"
            onVerify={reCaptcha}
            // onExpire={reCaptchaExpire}
          />

          <Button className="loginSubmit" type="submit" bsStyle="success" disabled={!verified}>Login</Button>
          <Button className="registerSubmit" onClick={handleRegister} disabled={!verified}>Register</Button>
          {/* <Button onClick={reset}>Reset</Button> */}
        </FormGroup>
      </form>
    </div>
  )

}

export default LoginForm
