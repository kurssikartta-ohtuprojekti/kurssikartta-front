import React from 'react'
import { ControlLabel, Button, FormGroup, FormControl } from 'react-bootstrap'
import Reaptcha from 'reaptcha';

import './RegisterForm.css'
const RegisterForm = ({ handleSubmit, loginMessage, handleChange, username, password, reCaptcha, reCaptchaExpire, verified }) => {

    // const reset = () => this.captcha.reset();

    // verified = true;

    if (verified === false && this.captcha !== null && this.captcha !== undefined) {
        this.captcha.reset();
    }

    return (
        <div className="loginWrapper">
            <h2 className="loginHeader">Register</h2>

            <form onSubmit={handleSubmit}>
                <FormGroup className="registerForm">
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
                        sitekey="6LcE2l8UAAAAALMqws8reJ6Okpv2IT6Z3DhVS8US"
                        onVerify={reCaptcha}
                    // onExpire={reCaptchaExpire}
                    />
                    <Button className="registerSubmit" disabled={!verified} onClick={handleSubmit} id='register'>Register</Button>

                </FormGroup>
            </form>

            <div className="message">
                {loginMessage}
            </div>
        </div>
    )

}


export default RegisterForm

