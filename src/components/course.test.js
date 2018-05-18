import React from 'react'
import { shallow } from 'enzyme'
import Course from './course'



describe.only('<Course course={noncompulsory course}/>', () => {
    it('renders popup button', () => {
        const course = {
            code: "TKT21010",
            name: "Full Stack -websovelluskehitys harjoitustyö",
            level: "Aineopinnot",
            compulsory: false,
            prereqs: [],
            studytrack: ["ss"],
            ects: "1-10",
            url: "https://courses.helsinki.fi/fi/TKT21010"
        }
        const mockHandler = jest.fn()
        const courseComponent = shallow(<Course course ={course}/>)
        const contentDiv = courseComponent.find('.noncompulsory')
        console.log(courseComponent)
        console.log(contentDiv.text())
            // console.log(contentDiv.text())
        expect(contentDiv.text()).toContain("<Popup />")
    })

})