import React from 'react'
import './unmappedCourses.css'
import {mappedCourses, unmappedCourses} from '../.././utils/courseMatrices'
import UnmappedCourse from './unmappedCourse'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class UnmappedCourses extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          filter: ''
      }
    }
    handleFilterChange = (event) => {
        console.log(event.target.value)
        this.setState({ filter: event.target.value })
        console.log(this.state.filter)
    }
// const UnmappedCourses = ({courses, matrice, handleSubmit}) => {
    render () {
        const mapped = mappedCourses(this.props.selectedMatrice.matrice)

        const unmapped = unmappedCourses(this.props.courses, mapped)
        // console.log(this.props.matrice)
        // console.log(unmapped)
        const filtered = unmapped.filter(course => course.name.toLowerCase().includes(this.state.filter.toLowerCase()))

        return (
            <div>
                <h1 className="unmappedHeader"> Courses that can be added to {this.props.selectedMatrice.name} </h1>
                    <div className="filter">
                        Search courses by name:
                        <input
                            style={{fontSize: 12}}
                            className="filterInput"
                            value ={this.state.filter}
                            onChange={this.handleFilterChange}
                        />
                    </div>
                <ListGroup>
                {filtered.map(course => 
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