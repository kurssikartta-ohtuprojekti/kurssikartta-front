import React from 'react';
import LoginForm from './LoginForm'

//Component to test loginform, not quite working
class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formUsernameInput: '',
      formPasswordInput: ''
    }
  }
  onChange = (e) => {
    this.setState({ formUsernameInput: e.target.value })
    this.setState({ formPasswordInput: e.target.value })
  }
  render() {
    return (
      <LoginForm
        value={this.state.formUsernameInput}
        value={this.state.formPasswordInput}
        onSubmit={this.props.onSubmit}
        handleChange={this.onChange}
      />
  )}
}