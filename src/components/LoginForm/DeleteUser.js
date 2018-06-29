import React from 'react'
import { ControlLabel, Button, FormGroup, FormControl, Checkbox } from 'react-bootstrap'
import './LoginForm.css'

// Renders user deletion form
const DeleteUser = ({ deleteAccount, checkboxVerify, checkboxVerified, loginMessage, handleChange, username, password, passwordAgain, user }) => {

    return (
        <div>
            {user !== null ?
                userDeletion(user, deleteAccount, username, handleChange, password, passwordAgain, checkboxVerify, checkboxVerified, loginMessage, user)
                :
                <null></null>
            }
        </div>
    )

}


export default DeleteUser

function userDeletion(user, deleteAccount, username, handleChange, password, passwordAgain, checkboxVerify, checkboxVerified, loginMessage) {
    if (user.role !== 'admin') {
        return (<div className="loginWrapper">
            <h2 className="loginHeader">Poista käyttäjätunnus {user.username}</h2>

            <form onSubmit={deleteAccount}>
                <FormGroup className="loginForm">
                    <ControlLabel>Käyttäjätunnus: </ControlLabel>
                    <FormControl className="loginInput" value={username} onChange={handleChange} name="username" />

                    <ControlLabel>Salasana: </ControlLabel>
                    <FormControl className="loginInput" type="password" name="password" value={password} onChange={handleChange} />
                    <ControlLabel>Salasana uudelleen: </ControlLabel>
                    <FormControl className="loginInput" type="password" name="passwordAgain" value={passwordAgain} onChange={handleChange} />

                    <Checkbox onClick={checkboxVerify}>
                        Olen varma, että haluan poistaa käyttäjätunnukseni.
                </Checkbox>

                    <Button bsStyle="danger" className="loginSubmit" disabled={(!checkboxVerified)} onClick={deleteAccount} id='register'>Poista</Button>

                </FormGroup>
            </form>

            <div className="message">
                {loginMessage}
            </div>
        </div>)
    } else {
        return
    }
}

