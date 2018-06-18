import React from 'react'
import Popup from 'reactjs-popup'
import { Button, Checkbox, DropdownButton, MenuItem } from 'react-bootstrap'
import './periodButton.css'

// Used to render the button and modal for period selection
const PeriodButton = (props) => {
    return (
        <div>
            <Popup
                trigger={<Button id="periodSelect">Periodit</Button>}
                modal
                closeOnDocumentClick>
                <span>
                    <Years year={props.year} yearCallback={props.yearCallback} />
                    <Periods p1={props.p1} p2={props.p2} p3={props.p3}
                        p4={props.p4} pC={props.pC} pS={props.pS} callback={props.callback}
                    />
                </span>
            </Popup>
        </div>
    )
}
// Renders the dropdown menu for years
const Years = (props) => {
    return (
        <DropdownButton
            title={props.year + "-" + (parseInt(props.year, 10) + 1)}
            id='1'
        >
            <MenuItem eventKey="2017" name="2017" active={props.year === '2017'} onClick={props.yearCallback}>2017-2018</MenuItem>
            <MenuItem eventKey="2018" name="2018" active={props.year === '2018'} onClick={props.yearCallback}>2018-2019</MenuItem>
            <MenuItem eventKey="2019" name="2019" active={props.year === '2019'} onClick={props.yearCallback}>2019-2020</MenuItem>
            <MenuItem eventKey="2020" name="2020" active={props.year === '2020'} onClick={props.yearCallback}>2020-2021</MenuItem>
            <MenuItem eventKey="2021" name="2021" active={props.year === '2021'} onClick={props.yearCallback}>2021-2022</MenuItem>
        </DropdownButton>
    )
}

// Renders the checkboxes for periods in a year
const Periods = (props) => {
    return (
        <div>
            <Checkbox checked={props.p1} onChange={props.callback} name="p1">Syksy (I periodi)</Checkbox>
            <Checkbox checked={props.p2} onChange={props.callback} name='p2'>Syksy (II periodi)</Checkbox>
            <Checkbox checked={props.pC} onChange={props.callback} name='pC'>Joulu</Checkbox>
            <Checkbox checked={props.p3} onChange={props.callback} name='p3'>Kevät (III periodi)</Checkbox>
            <Checkbox checked={props.p4} onChange={props.callback} name='p4'>Kevät (IV periodi)</Checkbox>
            <Checkbox checked={props.pS} onChange={props.callback} name='pS'>Kesä</Checkbox>
        </div>
    )
}

export default PeriodButton