import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'

const MatriceSelect = (props) => {
    return (
        <div>
            Valitse kartta:&nbsp;

            <Kartta matrices={props.matrices} matrice={props.matrice} names={props.names} selected={props.selected} matriceCallback={props.matriceCallback} />

        </div>
    )
}

const Kartta = (props) => {
    console.log(props.matrices)

    var matrices = props.matrices;
    var names = ['1', '2'];

    for (var matrice in matrices) {
        console.log(props.matrices.name);
        names.push(matrices.name);
    }
    console.log(names);

    return (
        <DropdownButton
            title={props.selected}
            id='1'
        >
            <MenuItem eventKey="0" name={names[0]} active={props.selected === names[0]} onClick={props.matriceCallback}>{names[0]}</MenuItem>
            <MenuItem eventKey="1" name={names[1]} active={props.selected === names[1]} onClick={props.matriceCallback}>{names[1]}</MenuItem>
        </DropdownButton>
    )
}


export default MatriceSelect