import React from 'react'
import { shallow } from 'enzyme'
import CourseInfo from './courseInfo'

describe.only('<CourseInfo />', () => {
    const course = {
        code: "TKT21010",
        name: "Full Stack -websovelluskehitys harjoitustyö",
        level: "intermediate",
        compulsory: false,
        prereqs: [],
        studytrack: ["ss"],
        ects: "1-10",
        url: "https://courses.helsinki.fi/fi/TKT21010"
    }

    const dummyCourseInfoData =
        [
            {
                key: 0,
                studyObjectCode: "AYTKT10001",
                instructionEvents: [{
                    key: 0,
                    name: "Avoin yo: Johdatus tietojenkäsittelytieteeseen kesä 2018, Ryhmä 1",
                    begings: 1525208400000,
                    ends: 1529960400000,
                    type: "Kurssi"
                }]
            }

        ]


    const dummyCourseInfoService = {
        'getCourseInfo': (id) => {
            return new Promise((resolve, reject) => {
                resolve(dummyCourseInfoData)
            })
        }
    }

    it('renders course info, no prerequirements', async () => {

        const mockHandler = jest.fn()
        const courseComponent = await shallow(<CourseInfo course={course} courseInfoService={dummyCourseInfoService} />)
        const contentDiv = courseComponent.find('.noncompulsory')
        console.log(courseComponent.html())
        // console.log(contentDiv.html())
        // console.log(contentDiv.text())
        expect(courseComponent.html()).toContain("Full Stack -websovelluskehitys harjoitustyö")
        expect(courseComponent.html()).toContain("TKT21010 (1-10 op)")
        expect(courseComponent.html()).toContain("Ei esitietoja")
        
          //expect(courseComponent.html()).toContain("Avoin yo: Johdatus tietojenkäsittelytieteeseen kesä 2018, Ryhmä 1")



    })
    it('renders course info, with prerequirements', () => {

        const mockHandler = jest.fn()
        const courseComponent = shallow(<CourseInfo course={course} courseInfoService={dummyCourseInfoService} />)
        const contentDiv = courseComponent.find('.noncompulsory')
        // console.log(courseComponent.html())
        // console.log(contentDiv.html())
        // console.log(contentDiv.text())
        expect(courseComponent.html()).toContain("Full Stack -websovelluskehitys harjoitustyö")
        expect(courseComponent.html()).toContain("TKT21010 (1-10 op)")
        expect(courseComponent.html()).toContain("noPrereqs")


    })
})