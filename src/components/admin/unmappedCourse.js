import React from 'react'
import AddForm from './addForm'
import './unmappedCourse.css'
export default class UnmappedCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: props.course,
            xCoord: '',
            yCoord: ''

        }
    }
    // Handler for add to map form
    handleCoordFieldChange = (event) => {
        if (event.target.value.length < 4) {
            this.setState({ [event.target.name]: event.target.value })
        }
      }

    // Render a single unmapped course's code, name and AddForm
    render() {
        return(
            <div className="unmappedCourse">
                <AddForm 
                            style={{float: 'left'}}
                            courseCode={this.state.course.code}
                            yCoord={this.state.yCoord}
                            xCoord={this.state.xCoord} 
                            handleChange={this.handleCoordFieldChange}
                            handleSubmit={this.props.handleSubmit}
                />
                <div className="unmappedCourseText">
                    {this.state.course.code} {this.state.course.name}
                </div>
            </div>
        )
    }

}