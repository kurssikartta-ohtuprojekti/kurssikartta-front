import React from 'react'
import LoginForm from '.././LoginForm/LoginForm.js'
import CourseUpdate from './courseUpdate'
import CourseMapAdmin from './courseMapAdmin'
import UnmappedCourses from './unmappedCourses'
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
                        username={this.props.username}
                        password={this.props.password}
                        handleChange={this.props.handleLoginFieldChange}
                        handleSubmit={this.props.login}/> :

                    <div>
                        <CourseUpdate/>
                        <CourseMapAdmin matrice={this.props.matrice} user={this.props.user} perus={this.props.perus} aine={this.props.aine} syv={this.props.syv} mat={this.props.mat}/>
                        <UnmappedCourses matrice={this.props.matrice} courses={this.props.courses} handleSubmit={this.props.handleSubmit}/>
                    </div>
                 }
            </div>
        )
    }
}

export default AdminPage