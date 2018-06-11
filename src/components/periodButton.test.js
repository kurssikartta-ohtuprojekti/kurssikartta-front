import React from 'react'
import { shallow } from 'enzyme'
import PeriodButton from './periodButton'
import Years from './periodButton'

describe.only('<PeriodButton />', () => {
    it('renders period button', () => {
        const mockHandler = jest.fn()
        const courseComponent = shallow(<PeriodButton/>)
        const contentDiv = courseComponent.html()
        //console.log(contentDiv)
        //console.log(contentDiv.text())
        expect(contentDiv.toString().includes("Periodit"))
    })
    /*
    it('clicking button opens stuff', () => {
        const mockHandler = jest.fn()
        const periodComponent = shallow(<PeriodButton/>)
        const contentDiv = periodComponent.html()
        console.log(contentDiv)
        //const button = contentDiv.('button')
        console.log(button)

    })*/
})

/*
describe.only('<Years />', () => {
    it('renders year menuitems', () => {
        const courseComponent2 = shallow(<Years />)
        const contentDiv2 = courseComponent2.html()

        //console.log(contentDiv2)
    })
})
*/