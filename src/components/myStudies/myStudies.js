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
                {console.log(this.props.user)}
                {this.props.user === null ?
                    <LoginForm
                        username={this.props.username}
                        password={this.props.password}
                        handleChange={this.props.handleLoginFieldChange}
                        handleSubmit={this.props.login}
                        loginMessage={this.props.loginMessage} /> :

                    <div style={{margin: 60}}>
                        <div style={{position: 'absolute', width: '90%', backgroundColor: 'lightblue', borderRadius: 5, padding: 10}}>
                            <h1 style={{position: 'relative', float: 'left', width: 300}}>
                                Tervetuloa, {this.props.user.username}
                            </h1>
                            <Logout style={{position: 'relative', float: 'right'}} logoutHandler={this.props.logout} /> {/* Admin log out */}
                            
                        </div>
                        
                    </div>
                }
            </div>
        )
    }
}

export default MyStudies