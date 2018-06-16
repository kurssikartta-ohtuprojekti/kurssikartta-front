import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import './matriceSelect.css'

// Used to render the button that controls the current selected matrice
const MatriceSelect = (props) => {
    return (
        <DropdownButton
            title={props.selected.name}
            id="matriceSelect"
        >
            {props.matrices === null ?
                <null></null> :
                props.matrices.map(matrice =>
                    <div key={matrice.id}>
                        <MenuItem name={matrice.id} active={props.selected === matrice.id} onClick={props.matriceCallback}>{matrice.name}</MenuItem>
                    </div>
                )
            }
            {props.user === undefined ?
                <null></null> :
                <div>
                    <MenuItem divider />
                    <MenuItem name="clone" onClick={props.matriceCallback}>Kopioi {props.selected.name}</MenuItem>
                    <MenuItem name="rename" onClick={props.matriceCallback}>Nimeä uudelleen {props.selected.name}</MenuItem>
                    <MenuItem name="delete" onClick={props.matriceCallback}>Poista {props.selected.name}</MenuItem>
                </div>
            }
        </DropdownButton>
    )

    

}
export default MatriceSelect