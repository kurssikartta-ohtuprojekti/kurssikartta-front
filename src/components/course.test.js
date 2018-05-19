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

describe.only('Course buttons get coloring based on study track', () => {
    const softwareSystems = {
        code: "TKT21010",
        name: "Full Stack -websovelluskehitys harjoitustyö",
        level: "Aineopinnot",
        compulsory: false,
        prereqs: [],
        studytrack: ["ss"],
        ects: "1-10",
        url: "https://courses.helsinki.fi/fi/TKT21010"
    }
    const algorithms = {
        code: "TKT20001",
        name: "Tietorakenteet ja algoritmit",
        level: "Aineopinnot",
        compulsory: true,
        prereqs: [],
        studytrack: ["adm"],
        ects: "10",
        url: "https://courses.helsinki.fi/fi/TKT20001"
    }
    const networking = {
        code: "TKT20004",
        name: "Tietoliikenteen perusteet",
        level: "Aineopinnot",
        compulsory: true,
        prereqs: [],
        studytrack: ["ns"],
        ects: "5",
        url: "https://courses.helsinki.fi/fi/TKT20004"

    }
    const datascience = {
        code: "DATA11001",
        name: "Introduction to Data Science",
        level: "Syventävät",
        compulsory: false,
        prereqs: [],
        studytrack: ["ds"],
        ects: "5",
        url: "https://courses.helsinki.fi/fi/DATA1101"

    }
    it('software systems', () => {
        
        const mockHandler = jest.fn()
        const courseComponent = shallow(<Course course ={softwareSystems}/>)
        const contentDiv = courseComponent.find('.noncompulsory')
        // console.log(courseComponent.html())
        // console.log(contentDiv.html())
        // console.log(contentDiv.text())
        expect(contentDiv.html()).toContain("background-color:yellow")
    })
    it('algorithms', () => {
        
        const mockHandler = jest.fn()
        const courseComponent = shallow(<Course course ={algorithms}/>)
        const contentDiv = courseComponent.find('.compulsory')
        // console.log(courseComponent.html())
        // console.log(contentDiv.html())
        // console.log(contentDiv.text())
        expect(contentDiv.html()).toContain("background-color:lightblue")
    })
    it('networking', () => {
        
        const mockHandler = jest.fn()
        const courseComponent = shallow(<Course course ={networking}/>)
        const contentDiv = courseComponent.find('.compulsory')
        // console.log(courseComponent.html())
        // console.log(contentDiv.html())
        // console.log(contentDiv.text())
        expect(contentDiv.html()).toContain("background-color:bisque")
    })
    it('data science', () => {
        
        const mockHandler = jest.fn()
        const courseComponent = shallow(<Course course ={datascience}/>)
        const contentDiv = courseComponent.find('.noncompulsory')
        // console.log(courseComponent.html())
        // console.log(contentDiv.html())
        // console.log(contentDiv.text())
        expect(contentDiv.html()).toContain("background-color:red")
    })
})

