import React from 'react'
import { ControlLabel, Button, FormGroup, FormControl } from 'react-bootstrap'
import './LoginForm.css'

// Renders login form
const LoginForm = ({ handleSubmit, loginMessage, handleChange, username, password, reCaptcha, reCaptchaExpire, verified }) => {


  verified = true;

  return (
    <div className="loginWrapper">
      <h2 className="loginHeader">Kirjaudu sisään</h2>

      <form onSubmit={handleSubmit}>
        <FormGroup className="loginForm">
          <ControlLabel>Käyttäjätunnus: </ControlLabel>
          <FormControl
            className="loginInput"
            value={username}
            onChange={handleChange}
            name="username"
          />

          <ControlLabel>Salasana: </ControlLabel>
          <FormControl
            className="loginInput"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}

          />

          {/* <Reaptcha className="captcha"
            ref={e => (this.captcha = e)}
            sitekey="6LeUDGAUAAAAADuHhR9osYcaewMSKUGo5URI74il"
            onVerify={reCaptcha}
          // onExpire={reCaptchaExpire}
          /> */}

          <Button className="loginSubmit" type="submit" bsStyle="success" disabled={!verified} onClick={handleSubmit} id='login'>Kirjaudu</Button>

        </FormGroup>
      </form>

      <div className="message">
        {loginMessage}
      </div>
      <div className="registerText">
        Uusi käyttäjä? <a href="/register">Rekisteröidy</a>
      </div>
    </div>
  )

}


export default LoginForm

