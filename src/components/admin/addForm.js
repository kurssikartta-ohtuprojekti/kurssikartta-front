import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const AddForm = ({courseCode, handleSubmit, handleChange, yCoord, xCoord, formName }) => {
  return (
    <div>
      <form id={courseCode} name={formName} onSubmit={handleSubmit}>
        <FormGroup>
          <ControlLabel style={{marginLeft: 2, float: 'left'}}>Y:</ControlLabel>

          <FormControl
            value={yCoord}
            onChange={handleChange}
            name="yCoord"
            style={{marginLeft: 4, width: 45, float: 'left'}}
          />
        
          <ControlLabel style={{marginLeft: 4, float: 'left'}}>X:</ControlLabel>

          <FormControl
            name="xCoord"
            value={xCoord}
            onChange={handleChange}
            style={{marginLeft: 4, width: 45, float: 'left'}}
            
          />

          <Button style={{marginLeft: 4, float: 'left'}} type="submit" bsStyle="success">add</Button> 
        </FormGroup>
      </form>
    </div>
  )
    
}

export default AddForm