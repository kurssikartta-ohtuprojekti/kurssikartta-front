import React from 'react'
import Popup from 'reactjs-popup'
import { Button } from 'react-bootstrap'
import './periodButton.css'

const PeriodButton = (props) => {

    const popupButton = () => {
        return (
            <Button id="myBtn">Periodit</Button>
        )
    }
    return (
        <div>
            <Popup
                trigger={popupButton()}
                modal
                closeOnDocumentClick>
                <span><Periods period={props.period} callbackFromParent={props.callbackFromParent} /></span>
            </Popup>
        </div>
    )
}

const Periods = (props) => {

    /*
    function klikHandle(arvo) {
        props.callbackFromParent(arvo)
    }*/
    
    return (
        <div>
            <Button onClick={() => props.callbackFromParent('one')}>Periodi 1</Button>
            <Button onClick={() => props.callbackFromParent('two')}>Periodi 2</Button>
            <Button onClick={() => props.callbackFromParent('three')}>Periodi 3</Button>
            <Button onClick={() => props.callbackFromParent('four')}>Periodi 4</Button>
            <Button onClick={() => props.callbackFromParent('christmas')}>Joulu</Button>
            <Button onClick={() => props.callbackFromParent('summer')}>Kesä</Button>
            <Button onClick={() => props.callbackFromParent('all')}>Kaikki</Button>
        </div>
    )
}

export default PeriodButton