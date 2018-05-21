import React from 'react'
import { shallow } from 'enzyme'
import CourseInfo from './courseInfo'

describe.only('<CourseInfo />', () => {
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
    it('renders course info, no prerequirements', () => {
        
        const mockHandler = jest.fn()
        const courseComponent = shallow(<CourseInfo course ={course}/>)
        const contentDiv = courseComponent.find('.noncompulsory')
        console.log(courseComponent.html())
        // console.log(contentDiv.html())
            // console.log(contentDiv.text())
        expect(courseComponent.html()).toContain("Full Stack -websovelluskehitys harjoitustyö")
        expect(courseComponent.html()).toContain("TKT21010 (1-10 op)")
        expect(courseComponent.html()).toContain("Ei esitietoja")


    })
    it('renders course info, with prerequirements', () => {
        
        const mockHandler = jest.fn()
        const courseComponent = shallow(<CourseInfo course ={course}/>)
        const contentDiv = courseComponent.find('.noncompulsory')
        console.log(courseComponent.html())
        // console.log(contentDiv.html())
            // console.log(contentDiv.text())
        expect(courseComponent.html()).toContain("Full Stack -websovelluskehitys harjoitustyö")
        expect(courseComponent.html()).toContain("TKT21010 (1-10 op)")
        expect(courseComponent.html()).toContain("noPrereqs")


    })
})