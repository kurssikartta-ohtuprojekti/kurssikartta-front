import React from 'react'
import { shallow } from 'enzyme'
import Logout from './Logout'

describe.only('<Logout />', () => {
  it('clicking the button calls event handler once', () => {
    const note = {
      content: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
      important: true
    }
  
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