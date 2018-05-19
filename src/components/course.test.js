import React from 'react'
import { shallow } from 'enzyme'
import Course from './course'

describe.only('<Course course={noncompulsory course}/>', () => {
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
    it('renders popup button', () => {
        
        const mockHandler = jest.fn()
        const courseComponent = shallow(<Course course ={course}/>)
        const contentDiv = courseComponent.find('.noncompulsory')
        // console.log(courseComponent.html())
        // console.log(contentDiv.html())
            // console.log(contentDiv.text())
        expect(contentDiv.html()).toContain("Full Stack -websovelluskehitys harjoitustyö")
    })
    it('renders as noncompulsory', () => {
        
        const mockHandler = jest.fn()
        const courseComponent = shallow(<Course course ={course}/>)
        const contentDiv = courseComponent.find('.compulsory')
        // console.log(contentDiv)
        // console.log(courseComponent.html())
        expect(contentDiv.length === 0)
    })
})

describe.only('<Course course={compulsory course}/>', () => {
    const course = {
        code: "TKT20001",
        name: "Tietorakenteet ja algoritmit",
        level: "Aineopinnot",
        compulsory: true,
        prereqs: [],
        studytrack: ["adm"],
        ects: "10",
        url: "https://courses.helsinki.fi/fi/TKT20001"
    }
    it('renders popup button', () => {
        
        const mockHandler = jest.fn()
        const courseComponent = shallow(<Course course ={course}/>)
        const contentDiv = courseComponent.find('.compulsory')
        // console.log(courseComponent.html())
        // console.log(contentDiv.html())
        // console.log(contentDiv.text())
        expect(contentDiv.html()).toContain("Tietorakenteet ja algoritmit")
    })
    it('renders as compulsory', () => {
        
        const mockHandler = jest.fn()
        const courseComponent = shallow(<Course course ={course}/>)
        const contentDiv = courseComponent.find('.noncompulsory')
        // console.log(contentDiv)
        // console.log(courseComponent.html())
        expect(contentDiv.length === 0)
    })


})

