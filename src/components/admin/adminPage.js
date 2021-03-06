import React from 'react'
import LoginForm from '.././LoginForm/LoginForm.js'
import CourseUpdate from './courseUpdate'
import ExcelUpdate from './excelUpdate'
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
                {/* Render login page if admin isn't logged in */}
                {this.props.user === null ?
                    this.displayLogin() :

                    this.adminDisplay()
                }
            </div>
        )
    }

    // render all admin control tools
    adminDisplay() {
        if (this.props.user.role === 'admin') {
            return <div className="adminPage">
                <div className="adminButtonGroup">
                    <Logout logoutHandler={this.props.logout} />
                    <CourseUpdate user={this.props.user}/>
                </div>

                <CourseMapAdmin adminFuncts={true} courseMovementHandler={this.props.courseMovementHandler} deleteCourseHandler={this.props.deleteCourseHandler} matrices={this.props.matrices} matrice={this.props.matrice} user={this.props.user} basic={this.props.basic} inter={this.props.inter} adv={this.props.adv} math={this.props.math} stats={this.props.stats} matriceCallback={this.props.matriceCallback} selectedMatrice={this.props.selectedMatrice} />

                <UnmappedCourses selectedMatrice={this.props.selectedMatrice} courses={this.props.courses} handleSubmit={this.props.handleNewSubmit} />
                
                <div className="excelUpdate">
                    <ExcelUpdate user={this.props.user} />
                </div>
            </div>;
        } else if (this.props.user.role !== 'admin') {
            return <div> Käyttäjä ei ole admin.
                        <Logout logoutHandler={this.props.logout} />
            </div>
        }
    }

    // render login page
    displayLogin() {
        if (this.props.user === null) {
            return <LoginForm username={this.props.username} password={this.props.password} handleChange={this.props.handleLoginFieldChange} handleSubmit={this.props.login} handleRegister={this.props.register}
                reCaptcha={this.props.reCaptcha} verified={this.props.verified} />;
        }
    }
}

export default AdminPage