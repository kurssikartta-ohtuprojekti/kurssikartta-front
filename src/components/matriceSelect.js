import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import './matriceSelect.css'

// Used to render the button that controls the current selected matrice
const MatriceSelect = (props) => {

    var divStyle = {
        // fontSize: 15, textOverflow: 'ellipsis', overflow: 'hidden',
        textAlign: 'left',
        position: 'relative',
    }

    var divStyle2 = {
        // fontSize: 15, textOverflow: 'ellipsis', overflow: 'hidden',
        
    }

    return (
        <DropdownButton
            title={'Matrice: ' + props.selected.name}
            id="matriceSelect"
        >
            {props.matrices === null ?
                <null></null> :
                props.matrices.map(matrice =>
                    <div style={divStyle}>
                        <MenuItem style={divStyle} name={matrice.id} active={props.selected === matrice.id} onClick={props.matriceCallback}>{matrice.name}</MenuItem>
                    </div>
                )
            }
            {props.admin === undefined ?
                <null></null> :
                <div style={divStyle2}>
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