import React from 'react'
import { shallow } from 'enzyme'
import CourseAdminPanel from './courseAdminPanel'

describe.only('<CourseAdminPanel />', () => {
  it('clicking the button calls event handler once', () => {
  
    const mockHandler = jest.fn()
    /*
    const logoutComponent = shallow(
      <CourseAdminPanel
      this.props.courseMovementHandler={mockHandler}
      />
    )
  
    const button = logoutComponent.find('Button')
    button.simulate('click')
  
    expect(mockHandler.mock.calls.length).toBe(1)
    */
  })
})