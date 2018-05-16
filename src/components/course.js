
import React from 'react'
import { Button } from 'react-bootstrap'

const Course = ({ course }) => {
  console.log(course)
  console.log(course.name)

  return (
    <div className="wrapper" >
      <Button>{course.code}<br/>{course.name}</Button>
    
    </div>
  )
}

export default Course