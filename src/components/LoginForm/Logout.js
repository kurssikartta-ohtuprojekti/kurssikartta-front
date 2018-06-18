import React from 'react'
import {Button} from 'react-bootstrap'
import './Logout.css'
const Logout = ({logoutHandler}) => {
    return (
        <Button className="logout" onClick={logoutHandler} bsStyle="danger">Logout</Button> 
    )
}

export default Logout