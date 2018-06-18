import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import './addForm.css'

// Render a form for new coordinates on map for a course
const AddForm = ({courseCode, handleSubmit, handleChange, yCoord, xCoord, formName }) => {
  return (
    <div>
      <form id={courseCode} name={formName} onSubmit={handleSubmit}>
        <FormGroup className="coordFormGroup">
          <ControlLabel className="coordText">Y:</ControlLabel>

          <FormControl
            value={yCoord}
            onChange={handleChange}
            name="yCoord"
            className="coordInput"
          />
        
          <ControlLabel className="coordText">X:</ControlLabel>

          <FormControl
            name="xCoord"
            value={xCoord}
            onChange={handleChange}
            className="coordInput"            
          />

          <Button className="submitButton" type="submit" bsStyle="success">Add</Button> 
        </FormGroup>
      </form>
    </div>
  )
    
}

export default AddForm