import React from 'react'
import Popup from 'reactjs-popup'
import { Button } from 'react-bootstrap'
import './periodButton.css'

const PeriodButton = () => {

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
                <span><Periods /></span>
            </Popup>
        </div>
    )
}

const Periods = () => {

    function klikHandle(arvo) {
        return () => {
            const period = arvo
            console.log('klikattiin periodia', period)
        }
    }
    return (
        <div>
            <Button onClick={klikHandle('one')}>Periodi 1</Button>
            <Button onClick={klikHandle('two')}>Periodi 2</Button>
            <Button onClick={klikHandle('three')}>Periodi 3</Button>
            <Button onClick={klikHandle('four')}>Periodi 4</Button>
            <Button onClick={klikHandle('christmas')}>Joulu</Button>
            <Button onClick={klikHandle('summer')}>Kesä</Button>
        </div>
    )
}

export default PeriodButton