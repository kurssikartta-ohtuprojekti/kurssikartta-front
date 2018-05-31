import React from 'react'
import './unmappedCourses.css'
import {mappedCourses} from '../.././utils/courseMatrices'
const UnmappedCourses = ({courses, matrice}) => {

    const mapped = mappedCourses(matrice)

    const unmappedCourses = (courses, mapped) => {
        const list = []
        for (let i = 0; i < courses.length; i++) {
            if (!mapped.includes(courses[i].code)) {
                list.push(courses[i])
            }
        }
        return list
    }
    
    const unmapped = unmappedCourses(courses, mapped)

    return (
        <div>
            <h1> Courses that can be added to map </h1>
            {unmapped.map(course => 
                    <p>{course.code} {course.name}</p>
                )
            }
        </div>

    )

}

export default UnmappedCourses