
import React from 'react'
import { Button } from 'react-bootstrap'

const Course = ({ course }) => {
  console.log(course)
  console.log(course.name)

  return (
    <div className="wrapper">
      <p>{course.code} {course.name}</p>
     
    </div>
  )
}

export default Course