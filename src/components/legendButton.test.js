import React from 'react'
import { shallow } from 'enzyme'
import LegendButton from './legendButton'
//import ReactModal from 'react-modal'

describe.only('<LegendButton />', () => {

  it('renders info button', () => {
    const mockHandler = jest.fn()
    const component = shallow(<LegendButton />)
    const contentDiv = component.html()
    //console.log(contentDiv)
    //console.log(contentDiv.text())
    expect(contentDiv.toString().includes("Info"))
  })


  it('clicking button opens popup', () => {
    /*
    const mockHandler = jest.fn()
    const component = shallow(<LegendButton />)
    const popup = component.find('Popup')
    console.log(popup.debug())
    popup.find('.trigger').simulate('click')
    //popup.simulate('trigger')
    console.log(popup.debug())
    expect(popup.open).toEqual(true)
    //expect(mockHandler.mock.calls.length).toBe(1)
    */
  })

})