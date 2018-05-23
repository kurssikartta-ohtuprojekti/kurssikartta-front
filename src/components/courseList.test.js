import React from 'react'
import { shallow } from 'enzyme'
import CourseList from './courseList'

describe.only('<CourseList />', () => {
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
    it ('renders all courses', () => {
        const mockHandler = jest.fn()
        const courseListComponent = shallow(<CourseList perus={perus} aine={aine} syv={syv}/>)
        const contentDiv = courseListComponent.find('.mappi')
        console.log(courseListComponent.html())
        // console.log(contentDiv.html())
        expect(contentDiv.html()).toContain("Dummy")
        expect(contentDiv.html()).toContain("Dummy2")
        expect(contentDiv.html()).toContain("Dummy3")
        expect(contentDiv.html()).toContain("Dummy4")
        expect(contentDiv.html()).toContain("Dummy5")
        expect(contentDiv.html()).toContain("Dummy6")
        
    })
})