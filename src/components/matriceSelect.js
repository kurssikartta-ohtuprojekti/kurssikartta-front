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
                    <div key={matrice.id} style={divStyle}>
                        <MenuItem style={divStyle} name={matrice.id} active={props.selected === matrice.id} onClick={props.matriceCallback}>{matrice.name}</MenuItem>
                    </div>
                )
            }
            {props.user === undefined ?
                <null></null> :
                isAdmin(divStyle2, props)
            }
        </DropdownButton>
    )
}

function isAdmin(divStyle2, props) {
    if (props.user.role === 'admin') {
        return <div style={divStyle2}>
            <MenuItem divider />
            <MenuItem key="clone" name="clone" onClick={props.matriceCallback}>Kopioi {props.selected.name}</MenuItem>
            <MenuItem key="rename" name="rename" onClick={props.matriceCallback}>Nimeä uudelleen {props.selected.name}</MenuItem>
            <MenuItem key="delete" name="delete" onClick={props.matriceCallback}>Poista {props.selected.name}</MenuItem>
        </div>;
    } else {
        return
    }
}

export default MatriceSelect
