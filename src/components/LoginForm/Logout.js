import React from 'react'
import {Button} from 'react-bootstrap'

const Logout = ({logoutHandler}) => {
    return (
        <Button onClick={logoutHandler} bsStyle="success">Logout</Button> 
    )
}

export default Logout