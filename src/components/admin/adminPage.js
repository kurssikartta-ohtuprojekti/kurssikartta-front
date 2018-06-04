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
                {this.props.courseMapAdmin}
                {this.props.unmappedCourses}
                {this.props.courseUpdate}
            </div>
        )
    }
}

export default AdminPage