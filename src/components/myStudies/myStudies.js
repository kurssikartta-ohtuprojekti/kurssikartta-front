import React from 'react'
import LoginForm from '.././LoginForm/LoginForm.js'
import Logout from '.././LoginForm/Logout.js'
// import './myStudies.css'

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
                {this.props.user === undefined ?
                    <LoginForm
                        username={this.props.username}
                        password={this.props.password}
                        handleChange={this.props.handleLoginFieldChange}
                        handleSubmit={this.props.login} /> :

                    <div>
                        <div>
                            Tervetuloa, {this.props.username}
                        </div>
                        <div className="userButtonGroup">
                            <Logout logoutHandler={this.props.logout} /> {/* Admin log out */}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default MyStudies