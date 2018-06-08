import React from 'react'
import AddForm from './addForm'

export default class UnmappedCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: props.course,
            xCoord: '',
            yCoord: ''

        }
    }
    handleCoordFieldChange = (event) => {
        if (event.target.value.length < 4) {
            this.setState({ [event.target.name]: event.target.value })
        }
      }

    render() {
        return(
            <div>
                <p style={{float: 'left'}}> {this.state.course.code} {this.state.course.name}: </p>
                <br/>
                <AddForm 
                            style={{float: 'left'}}
                            courseCode={this.state.course.code}
                            yCoord={this.state.yCoord}
                            xCoord={this.state.xCoord} 
                            handleChange={this.handleCoordFieldChange}
                            handleSubmit={this.props.handleSubmit}
                />
                <br/>
                <br/>
                <p>__________________________________________________</p>
            </div>
        )
    }

}