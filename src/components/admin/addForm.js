import React from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'

const AddForm = ({courseCode, handleSubmit, handleChange, yCoord, xCoord }) => {
  return (
    <div>
      <form id={courseCode} onSubmit={handleSubmit}>
        <FormGroup>
          y: 
          <FormControl
            value={yCoord}
            onChange={handleChange}
            name="yCoord"
            style={{width: 50}}
          />
        
          x:
          <FormControl
            name="xCoord"
            value={xCoord}
            onChange={handleChange}
            style={{width: 50}}

          /><br/>

          <Button type="submit" bsStyle="success">add</Button> 
        </FormGroup>
      </form>
    </div>
  )
    
}

export default AddForm