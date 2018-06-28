import React from 'react'
import { ControlLabel, Button, FormGroup, FormControl, HelpBlock, Checkbox } from 'react-bootstrap'
import Reaptcha from 'reaptcha';

import './RegisterForm.css'
const RegisterForm = ({ handleSubmit, checkboxVerify, checkboxVerified, loginMessage, handleChange, username, password, passwordAgain, reCaptcha, reCaptchaExpire, verified }) => {

    // const reset = () => this.captcha.reset();
    // verified = true;

    if (verified === false && this.captcha !== null && this.captcha !== undefined) {
        this.captcha.reset();
    }


    return (
        <div className="loginWrapper">
            <h2 className="loginHeader">Rekisteröidy</h2>

            <form onSubmit={handleSubmit}>
                <FormGroup className="registerForm">
                    <ControlLabel>Käyttäjätunnus: </ControlLabel>
                    <FormControl
                        className="loginInput"
                        value={username}
                        onChange={handleChange}
                        name="username"
                    />
                    <HelpBlock>Käyttäjätunnuksen tulee olla 3-10 merkkiä pitkä.</HelpBlock>
                    <ControlLabel>Salasana: </ControlLabel>
                    <FormControl
                        className="loginInput"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}

                    />
                    <HelpBlock>Salasanan tulee olla 6-20 merkkiä ja sisältää vähintään yhden numeron.</HelpBlock>
                    <ControlLabel>Salasana uudelleen: </ControlLabel>
                    <FormControl
                        className="loginInput"
                        type="password"
                        name="passwordAgain"
                        value={passwordAgain}
                        onChange={handleChange}

                    />

                    <Reaptcha className="captcha"
                        ref={e => (this.captcha = e)}
                        sitekey="6LcE2l8UAAAAALMqws8reJ6Okpv2IT6Z3DhVS8US"
                        onVerify={reCaptcha}
                    // onExpire={reCaptchaExpire}
                    />

                    <Checkbox onClick={checkboxVerify}>
                        Hyväksyn, että antamani henkilötiedot tallennetaan kurssikarttasovellukseen.
                    </Checkbox>
                    <HelpBlock>Lisätietoja kurssikartan <a href="https://www.tko-aly.fi/coursemap_privacy" target="popup">tietosuojaselosteesta</a>.</HelpBlock>

                    <Button className="registerSubmit" disabled={(!verified || !checkboxVerified)} onClick={handleSubmit} id='register'>Rekisteröidy</Button>

                </FormGroup>
            </form>
            <div className="message">
                {loginMessage}
            </div>
        </div>
    )

}


export default RegisterForm

