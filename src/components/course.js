
import React from 'react'
import { Button } from 'react-bootstrap'

const Course = ({ course }) => {
    // console.log(course)
    // console.log(course.name)

    const compulsory = {
        border: 'solid',
        borderWidth: 3,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold'
    }

    // const peruskurssi = {

    // }
    if (course.compulsory) { 
        return (
    
            <div className="compulsory" style={{padding:3}}> 
                <Button style={compulsory}>{course.code}<br/>{course.name}</Button>
    
            </div>
        )
    }
    return (
        <div className="compulsory" style={{padding:3}}> 
            <Button >{course.code}<br/>{course.name}</Button>
        </div>
    )
}

export default Course