import React from 'react'
import LoginForm from './LoginForm/LoginForm.js'
import './admin/adminPage.css'
import MyStudies from './myStudies/myStudies'
import AdminPage from './admin/adminPage'

class StudiesPage extends React.Component {
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

                    this.displayAdminOrStudies()
                }
            </div>
        )
    }

    displayAdminOrStudies() {
        if (this.props.user.role === 'admin') {
            return <AdminPage
                username={this.props.username}
                password={this.props.password}
                handleLoginFieldChange={this.props.handleLoginFieldChange}
                reCaptcha={this.props.reCaptcha} verified={this.props.verified}
                login={this.props.login}
                loginMessage={this.state.loginMessage}
                logout={this.props.logout}
                courses={this.props.courses}
                matrices={this.props.matrices}
                matrice={this.props.matrice}
                handleNewSubmit={this.props.handleNewSubmit}
                basic={this.props.basic} inter={this.props.inter} adv={this.props.adv} math={this.props.math} stats={this.props.stats}
                user={this.props.user}
                admin={this.props.admin}
                deleteCourseHandler={this.props.deleteCourseHandler}
                courseMovementHandler={this.props.courseMovementHandler}
                matriceCallback={this.props.matriceCallback}
                selectedMatrice={this.props.selectedMatrice}
            />
        } else if (this.props.user.role !== 'admin') {
            return <MyStudies
                username={this.props.username}
                password={this.props.password}
                handleLoginFieldChange={this.props.handleLoginFieldChange}
                reCaptcha={this.props.reCaptcha} verified={this.props.verified}
                login={this.props.login}
                loginMessage={this.props.loginMessage}
                logout={this.props.logout}
                courses={this.props.courses}
                matrices={this.props.matrices}
                matrice={this.props.matrice}
                basic={this.props.basic} inter={this.props.inter} adv={this.props.adv} math={this.props.math} stats={this.props.stats}
                user={this.props.user}
                admin={this.props.admin}
            />
        }
    }

    displayLogin() {
        if (this.props.user === null) {
            return <LoginForm username={this.props.username} password={this.props.password} handleChange={this.props.handleLoginFieldChange} handleSubmit={this.props.login} loginMessage={this.props.loginMessage}
                reCaptcha={this.props.reCaptcha} verified={this.props.verified} />;
        }
    }
}

export default StudiesPage