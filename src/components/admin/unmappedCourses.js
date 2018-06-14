import React from 'react'
import './unmappedCourses.css'
import {mappedCourses, unmappedCourses} from '../.././utils/courseMatrices'
import UnmappedCourse from './unmappedCourse'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class UnmappedCourses extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
// const UnmappedCourses = ({courses, matrice, handleSubmit}) => {
    render () {
        const mapped = mappedCourses(this.props.selectedMatrice.matrice)

        const unmapped = unmappedCourses(this.props.courses, mapped)
        // console.log(this.props.matrice)
        // console.log(unmapped)
        return (
            <div>
                <h1 className="unmappedHeader"> Courses that can be added to {this.props.selectedMatrice.name} </h1>
                <ListGroup>
                {unmapped.map(course => 
                    <ListGroupItem className="unmappedCourseItem">
                        <UnmappedCourse key={course.code}
                                        course={course}
                                        handleSubmit={this.props.handleSubmit}
                                        />

                    </ListGroupItem>

                    )
                }
                </ListGroup>
            </div>

        )

    }
}
export default UnmappedCourses