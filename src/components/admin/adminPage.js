import React from 'react'


class AdminPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
    render() {
        return (
            <div>
                {this.props.courseUpdate}
                {this.props.courseMapAdmin}
                {this.props.unmappedCourses}
            </div>
        )
    }
}

export default AdminPage