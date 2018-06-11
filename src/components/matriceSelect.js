import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import './periodButton.css'

const MatriceSelect = (props) => {
    return (
        <div>
            <Kartta matrices={props.matrices} matrice={props.matrice} names={props.names} selected={props.selected} matriceCallback={props.matriceCallback} />
        </div>
    )
}

const Kartta = (props) => {
    console.log(props.matrices)

    var matrices = props.matrices;
    var names = [];
    console.log(matrices);

    for (var matrice in matrices) {
        names.push(matrice.name);
    }
    console.log(names);

    return (
        <DropdownButton id="myBtn"
            title={matrices[0].name}
            
        >
            {matrices === null ?
                <null></null> :
                props.matrices.map(matrice =>
                    <div>
                        <MenuItem eventKey={matrice.id} name={matrice.name} active={props.selected === matrice.id} onClick={props.matriceCallback}>{matrice.name}</MenuItem>
                    </div>
                )
            }
            {/* <MenuItem eventKey="0" name={names[0]} active={props.selected === names[0]} onClick={props.matriceCallback}>{names[0]}</MenuItem>
            <MenuItem eventKey="1" name={names[1]} active={props.selected === names[1]} onClick={props.matriceCallback}>{names[1]}</MenuItem> */}
        </DropdownButton>
    )
}


export default MatriceSelect