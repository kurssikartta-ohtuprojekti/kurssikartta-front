import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
// import './matriceSelect.css'

const MatriceSelect = (props) => {
    return (
        <div>
            <Kartta matrices={props.matrices} matrice={props.matrice} names={props.names} selected={props.selected} matriceCallback={props.matriceCallback} />
        </div>
    )
}

const Kartta = (props) => {
    // console.log(props.matrices)
    // console.log(props.selected)
    // console.log("selected")

    var matrices = props.matrices;

    return (
        <DropdownButton
            title={props.selected.name}
            
        >
            {matrices === null ?
                <null></null> :
                props.matrices.map(matrice =>
                    <div>
                        {/* {console.log(matrice)} */}
                        <MenuItem name={matrice.id} active={props.selected === matrice.id} onClick={props.matriceCallback}>{matrice.name}</MenuItem>
                    </div>
                )
            }
        </DropdownButton>
    )
}


export default MatriceSelect