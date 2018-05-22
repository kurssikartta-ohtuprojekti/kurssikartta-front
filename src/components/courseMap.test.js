import React from 'react'
import { shallow } from 'enzyme'
import CourseMap from './courseMap'

describe.only('<CourseMap />', () => {
    const perus = [
        {
            code: "TKT21010",
            name: "Dummy",
            level: "Perusopinnot",
            compulsory: false,
            prereqs: [],
            studytrack: ["ss"],
            ects: "1-10",
            url: "https://courses.helsinki.fi/fi/TKT21010"
        },
        {
            code: "TKT21011",
            name: "Dummy2",
            level: "Perusopinnot",
            compulsory: false,
            prereqs: [],
            studytrack: ["ss"],
            ects: "1-10",
            url: "https://courses.helsinki.fi/fi/TKT21010"
        }
    ]
    const aine = [
        {
            code: "TKT21010",
            name: "Dummy3",
            level: "Aineopinnot",
            compulsory: false,
            prereqs: [],
            studytrack: ["ss"],
            ects: "1-10",
            url: "https://courses.helsinki.fi/fi/TKT21010"
        },
        {
            code: "TKT21011",
            name: "Dummy4",
            level: "Aineopinnot",
            compulsory: false,
            prereqs: [],
            studytrack: ["ss"],
            ects: "1-10",
            url: "https://courses.helsinki.fi/fi/TKT21010"
        }
    ]
    const syv = [
        {
            code: "TKT21010",
            name: "Dummy5",
            level: "Syventävät",
            compulsory: false,
            prereqs: [],
            studytrack: ["ss"],
            ects: "1-10",
            url: "https://courses.helsinki.fi/fi/TKT21010"
        },
        {
            code: "TKT21011",
            name: "Dummy6",
            level: "Syventävät",
            compulsory: false,
            prereqs: [],
            studytrack: ["ss"],
            ects: "1-10",
            url: "https://courses.helsinki.fi/fi/TKT21010"
        }
    ]
    // it('renders container for course map', () => {
    //     const mockHandler = jest.fn()
    //     const courseMapComponent = shallow(<CourseMap perus={null} aine={null} syv={null}/>)
    //     const contentDiv = courseMapComponent.find('.mappi')
    //     // console.log(courseMapComponent.html())
    //     // console.log(contentDiv.html())

    //     expect(contentDiv.html()).toContain("nullPerus")
    //     expect(contentDiv.html()).toContain("nullAine")
    //     expect(contentDiv.html()).toContain("nullSyv")

    // })
    // it ('renders peruskurssit', () => {
    //     const mockHandler = jest.fn()
    //     const courseMapComponent = shallow(<CourseMap perus={perus} aine={null} syv={null}/>)
    //     const contentDiv = courseMapComponent.find('.mappi')
    //     // console.log(courseMapComponent.html())
    //     // console.log(contentDiv.html())
    //     expect(contentDiv.html()).toContain("nullAine")
    //     expect(contentDiv.html()).toContain("nullSyv")
    //     const perusDiv = contentDiv.find('.perus')
    //     // console.log(perusDiv.html())
    //     expect(perusDiv.html()).toContain("Dummy")
    //     expect(perusDiv.html()).toContain("Dummy2")
        
    // })
    // it ('renders ainekurssit', () => {
    //     const mockHandler = jest.fn()
    //     const courseMapComponent = shallow(<CourseMap perus={null} aine={aine} syv={null}/>)
    //     const contentDiv = courseMapComponent.find('.mappi')
    //     // console.log(courseMapComponent.html())
    //     // console.log(contentDiv.html())
    //     expect(contentDiv.html()).toContain("nullPerus")
    //     expect(contentDiv.html()).toContain("nullSyv")
    //     const aineDiv = contentDiv.find('.aine')
    //     // console.log(perusDiv.html())
    //     expect(aineDiv.html()).toContain("Dummy3")
    //     expect(aineDiv.html()).toContain("Dummy4")
        
    // })
    // it ('renders syventavat kurssit', () => {
    //     const mockHandler = jest.fn()
    //     const courseMapComponent = shallow(<CourseMap perus={null} aine={null} syv={syv}/>)
    //     const contentDiv = courseMapComponent.find('.mappi')
    //     // console.log(courseMapComponent.html())
    //     // console.log(contentDiv.html())
    //     expect(contentDiv.html()).toContain("nullPerus")
    //     expect(contentDiv.html()).toContain("nullAine")
    //     const syvDiv = contentDiv.find('.syventavat')
    //     // console.log(perusDiv.html())
    //     expect(syvDiv.html()).toContain("Dummy5")
    //     expect(syvDiv.html()).toContain("Dummy6")
        
    // })
    it ('renders all courses', () => {
        const mockHandler = jest.fn()
        const courseMapComponent = shallow(<CourseMap perus={perus} aine={aine} syv={syv}/>)
        const contentDiv = courseMapComponent.find('.mappi')
        // console.log(courseMapComponent.html())
        // console.log(contentDiv.html())
        expect(contentDiv.html()).toContain("Dummy")
        expect(contentDiv.html()).toContain("Dummy2")
        expect(contentDiv.html()).toContain("Dummy3")
        expect(contentDiv.html()).toContain("Dummy4")
        expect(contentDiv.html()).toContain("Dummy5")
        expect(contentDiv.html()).toContain("Dummy6")
        
    })
})