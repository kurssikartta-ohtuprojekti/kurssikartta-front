import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoginForm from './LoginForm'
import Wrapper from './LoginForm'

describe('<LoginForm/>', () => {

  it('renders page', () => {
    const mockHandler = jest.fn()
    const loginComponent = shallow(<LoginForm />)
    console.log(loginComponent)
    const contentDiv = loginComponent.html()
    expect(contentDiv.toString().includes("Log in to the application"))
  })

  /*
  it('renders content', () => {
    
    const onSubmit = jest.fn()

    const wrapper = mount(
      <Wrapper onSubmit={onSubmit} />
    )

    const usernameInput = wrapper.find('formcontrol')
    console.log(usernameInput)
    const passwordInput = wrapper.find('formcontrol password')
    const button = wrapper.find('button')

    usernameInput.simulate('change', { target: { value: 'userrr' } })
    passwordInput.simulate('change', { target: { value: 'passworddd' } })
    button.simulate('submit')

    expect(wrapper.state().formUsernameInput).toBe('userrr')
    expect(wrapper.state().formPasswordInput).toBe('passworddd')
    expect(onSubmit.mock.calls.length).toBe(1)
  })
  */
 
})
