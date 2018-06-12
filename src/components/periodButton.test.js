import React from 'react'
import { shallow } from 'enzyme'
import PeriodButton from './periodButton'
//import ReactModal from 'react-modal'

describe.only('<PeriodButton />', () => {

    it('renders period button', () => {
        const mockHandler = jest.fn()
        const courseComponent = shallow(<PeriodButton />)
        const contentDiv = courseComponent.html()
        //console.log(contentDiv)
        //console.log(contentDiv.text())
        expect(contentDiv.toString().includes("Periodit"))
    })

    /*
    it('clicking button opens popup', () => {
        const mockHandler = jest.fn()
        const periodComponent = shallow(<PeriodButton />)
        const popup = periodComponent.find('Popup')
        console.log(popup.debug())
        popup.find('.trigger').simulate('click')
        //popup.simulate('trigger')
        console.log(popup.debug())
        expect(popup.open).toEqual(true)
        //expect(mockHandler.mock.calls.length).toBe(1)
    })
    */
})