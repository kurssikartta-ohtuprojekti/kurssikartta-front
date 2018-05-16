
import React from 'react'
import { Button } from 'react-bootstrap'

const Course = ({ course }) => {
    // console.log(course)
    // console.log(course.name)

    const compul = {
        border: 'solid',
        borderWidth: 3,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold'
    }

    // const peruskurssi = {

    // }
    return (
        <div> 
            {course.compulsory ?
                <div className="compulsory" style={{padding:3}}> 
                    <Button style={compul}>{course.code}<br/>{course.name}</Button>
                </div> :
                
                <div className="compulsory" style={{padding:3}}> 
                    <Button >{course.code}<br/>{course.name}</Button>
                </div>
            }
        </div>
    )
}


export default Course