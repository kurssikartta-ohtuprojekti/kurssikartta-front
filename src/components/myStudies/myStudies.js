import React from 'react'
import LoginForm from '.././LoginForm/LoginForm.js'
import Logout from '.././LoginForm/Logout.js'
import './myStudies.css'

class MyStudies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                {/* Render login page if user isn't logged in */}
                {/* {console.log(this.props.user)} */}
                {this.props.user === null ?
                    <LoginForm
                        username={this.props.username}
                        password={this.props.password}
                        handleChange={this.props.handleLoginFieldChange}
                        handleSubmit={this.props.login}
                        loginMessage={this.props.loginMessage} /> :

                    <div className="studyWrapper">
                        <div style={{ borderRadius: 5, padding: 10 }}>
                            <h2>
                                Tervetuloa, {this.props.user.username}
                            </h2>
                            <Logout style={{ position: 'relative', float: 'right' }} logoutHandler={this.props.logout} /> {/* Admin log out */}

                            {this.listCourses()}

                            <div className="deleteText">
                                Käyttäjätunnuksen <a href="/deleteuser">poistaminen</a>
                            </div>
                        </div>

                    </div>
                }
            </div>
        )
    }

    listCourses() {
        if (this.props.user !== undefined) {
            if (this.props.user.courses !== undefined) {
                return (<div className="studyList">Lista käymistäsi kursseista:
                {this.props.user.courses.map(course =>
                        <div key={course} style={{ display: 'block' }}>
                            <div>{course}</div>
                        </div>

                    )}
                </div>
                )
            } else {
                return (
                    <div className="studyList">
                        Tänne tulee lista käymistäsi kursseista"
                </div>
                )
            }
        }
        else {
            return
        }
    }

}

export default MyStudies