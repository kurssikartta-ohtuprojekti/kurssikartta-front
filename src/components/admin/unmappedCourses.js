import React from 'react'
import './unmappedCourses.css'
import {mappedCourses, unmappedCourses} from '../.././utils/courseMatrices'
import UnmappedCourse from './unmappedCourse'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

// Renders courses that haven't yet been added to the current selected matrice
class UnmappedCourses extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          filter: ''
      }
    }
    // Handler for search filter
    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value })
    }
    render () {
        const mapped = mappedCourses(this.props.selectedMatrice.matrice)
        const unmapped = unmappedCourses(this.props.courses, mapped)
        const filtered = unmapped.filter(course => 
            course.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )

        return (
            <div>
                <h2 className="unmappedHeader"> Courses that can be added to {this.props.selectedMatrice.name} matrice </h2>
                    <div className="filter">
                        Search courses by name:
                        <input
                            style={{fontSize: 12}}
                            className="filterInput"
                            value ={this.state.filter}
                            onChange={this.handleFilterChange}
                        />
                    </div>
                <div className="unmappedList">
                    <ListGroup>
                    {filtered.map(course => 
                        <ListGroupItem key={course.code} className="unmappedCourseItem">
                            <UnmappedCourse key={course.code}
                                            course={course}
                                            handleSubmit={this.props.handleSubmit}
                                            />

                        </ListGroupItem>

                        )
                    }
                    </ListGroup>
                </div>
            </div>

        )

    }
}
export default UnmappedCourses