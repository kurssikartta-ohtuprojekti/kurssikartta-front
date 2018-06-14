import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import './addForm.css'
const AddForm = ({courseCode, handleSubmit, handleChange, yCoord, xCoord, formName }) => {
  return (
    <div>
      <form id={courseCode} name={formName} onSubmit={handleSubmit}>
        <FormGroup style={{padding: 0}}>
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