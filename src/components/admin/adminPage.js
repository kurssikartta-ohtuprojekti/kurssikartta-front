import React from 'react'
import LoginForm from '.././LoginForm/LoginForm.js'

class AdminPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
    render() {
        return (
           
            <div>
                {this.props.user === null ? 
                    <LoginForm 
                    username={this.state.username}
                    password={this.state.password}
                    handleChange={this.handleLoginFieldChange}
                    handleSubmit={this.login}/> :
                    <div>
                        {this.props.courseUpdate}
                        {this.props.courseMapAdmin}
                        {this.props.unmappedCourses}
                    </div>
                 }
            </div>
        )
    }
}

export default AdminPage