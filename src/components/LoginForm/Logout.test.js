import React from 'react'
import { shallow } from 'enzyme'
import Logout from './Logout'

describe.only('<Logout />', () => {
  it('clicking the button calls event handler once', () => {

    const mockHandler = jest.fn()
    const logoutComponent = shallow(
      <Logout
        logoutHandler={mockHandler}
      />
    )

    const button = logoutComponent.find('Button')
    button.simulate('click')

    expect(mockHandler.mock.calls.length).toBe(1)
  })
})