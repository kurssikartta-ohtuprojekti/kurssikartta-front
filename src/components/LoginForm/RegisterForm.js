import React from 'react'
import { ControlLabel, Button, FormGroup, FormControl, HelpBlock } from 'react-bootstrap'
import Reaptcha from 'reaptcha';

import './RegisterForm.css'
const RegisterForm = ({ handleSubmit, loginMessage, handleChange, username, password, reCaptcha, reCaptchaExpire, verified }) => {

    // const reset = () => this.captcha.reset();

    // verified = true;

    if (verified === false && this.captcha !== null && this.captcha !== undefined) {
        this.captcha.reset();
    }

    // const popoverTop = (
    //     <Popover id="popover-positioned-scrolling-top" title="Popover top">
    //         <strong>Popover testi</strong>
    //     </Popover>
    // );


    return (
        <div className="loginWrapper">
            <h2 className="loginHeader">Rekisteröidy</h2>

            <form onSubmit={handleSubmit}>
                <FormGroup className="registerForm">
                    <ControlLabel>Käyttäjätunnus: </ControlLabel>
                    {/* <OverlayTrigger
                        container={this}
                        trigger="click"
                        placement="top"
                        overlay={popoverTop}
                    > */}
                    <FormControl
                        className="loginInput"
                        value={username}
                        onChange={handleChange}
                        name="username"
                    />
                    <HelpBlock>Käyttäjätunnuksen tulee olla 3-10 merkkiä pitkä.</HelpBlock>
                    {/* </OverlayTrigger> */}
                    <ControlLabel>Salasana: </ControlLabel>
                    <FormControl
                        className="loginInput"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}

                    />
                    <HelpBlock>Salasanan tulee olla 6-20 merkkiä ja sisältää vähintään yhden numeron.</HelpBlock>
                    <Reaptcha className="captcha"
                        ref={e => (this.captcha = e)}
                        sitekey="6LcE2l8UAAAAALMqws8reJ6Okpv2IT6Z3DhVS8US"
                        onVerify={reCaptcha}
                    // onExpire={reCaptchaExpire}
                    />

                    {/* <Checkbox onChange={verified = true}>
                        Olen lukenut
                    </Checkbox> */}

                    <Button className="registerSubmit" disabled={!verified} onClick={handleSubmit} id='register'>Rekisteröidy</Button>

                </FormGroup>
            </form>

            <div className="message">
                {loginMessage}
            </div>
        </div>
    )

}


export default RegisterForm

