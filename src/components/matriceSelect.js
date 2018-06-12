import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
// import './matriceSelect.css'

const MatriceSelect = (props) => {
    return (
        
        <Kartta matrices={props.matrices} matrice={props.matrice} names={props.names} selected={props.selected} matriceCallback={props.matriceCallback} />
        
    )
}

const Kartta = (props) => {
    console.log(props.matrices)
    console.log(props.selected)
    console.log("selected")

    var matrices = props.matrices;

    return (
        <DropdownButton id="matriceSelect"
            title={matrices[0].name}
            
        >
            {matrices === null ?
                <null></null> :
                props.matrices.map(matrice =>
                    <div>
                        {console.log(matrice)}
                        <MenuItem name={matrice.id} active={props.selected === matrice.id} onClick={props.matriceCallback}>{matrice.name}</MenuItem>
                    </div>
                )
            }
            {/* <MenuItem eventKey="0" name={names[0]} active={props.selected === names[0]} onClick={props.matriceCallback}>{names[0]}</MenuItem>
            <MenuItem eventKey="1" name={names[1]} active={props.selected === names[1]} onClick={props.matriceCallback}>{names[1]}</MenuItem> */}
        </DropdownButton>
    )
}


export default MatriceSelect