import React from 'react'
import './unmappedCourses.css'
import {mappedCourses, unmappedCourses} from '../.././utils/courseMatrices'
import UnmappedCourse from './unmappedCourse'

class UnmappedCourses extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
// const UnmappedCourses = ({courses, matrice, handleSubmit}) => {
    render () {
        const mapped = mappedCourses(this.props.matrice)

        const unmapped = unmappedCourses(this.props.courses, mapped)
        // console.log(this.props.matrice)
        console.log(unmapped)
        return (
            <div>
                <h1> Courses that can be added to map </h1>
                {unmapped.map(course => 
                    <UnmappedCourse course={course} handleSubmit={this.props.handleSubmit}/>
                    )
                }
            </div>

        )

    }
}
export default UnmappedCourses