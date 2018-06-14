import React from 'react'
import LoginForm from '.././LoginForm/LoginForm.js'
import CourseUpdate from './courseUpdate'
import CourseMapAdmin from './courseMapAdmin'
import UnmappedCourses from './unmappedCourses'
import Logout from '.././LoginForm/Logout.js'
import './adminPage.css'
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
                        <div className="adminButtonGroup">
                            <Logout logoutHandler={this.props.logout}/>
                            <CourseUpdate/>
                        </div>
                        <CourseMapAdmin 
                                        courseMovementHandler={this.props.courseMovementHandler} 
                                        deleteCourseHandler={this.props.deleteCourseHandler}
                                        matrices={this.props.matrices}
                                        matrice={this.props.matrice} user={this.props.user}
                                        perus={this.props.perus} 
                                        aine={this.props.aine} 
                                        syv={this.props.syv} 
                                        mat={this.props.mat}
                                        matriceCallback={this.props.matriceCallback}
                                        selectedMatrice={this.props.selectedMatrice}/>
                                       
                        <UnmappedCourses 
                                        selectedMatrice={this.props.selectedMatrice} 
                                        courses={this.props.courses} 
                                        handleSubmit={this.props.handleNewSubmit}/>
                    </div>
                 }
            </div>
        )
    }
}

export default AdminPage