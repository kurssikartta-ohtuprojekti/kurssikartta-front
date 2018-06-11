import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const AddForm = ({courseCode, handleSubmit, handleChange, yCoord, xCoord, formName }) => {
  return (
    <div>
      <form id={courseCode} name={formName} onSubmit={handleSubmit}>
        <FormGroup>
          <ControlLabel style={{float: 'left'}}>Y:</ControlLabel>

          <FormControl
            value={yCoord}
            onChange={handleChange}
            name="yCoord"
            style={{width: 50, float: 'left'}}
          />
        
          <ControlLabel style={{float: 'left'}}>X:</ControlLabel>

          <FormControl
            name="xCoord"
            value={xCoord}
            onChange={handleChange}
            style={{width: 50, float: 'left'}}
            
          />

          <Button style={{float: 'left'}} type="submit" bsStyle="success">add</Button> 
        </FormGroup>
      </form>
    </div>
  )
    
}

export default AddForm