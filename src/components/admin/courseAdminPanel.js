import React from 'react'

export default class CourseAdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return(
            <div>
                {this.props.course.name}
            </div>
        )
    }
    
}