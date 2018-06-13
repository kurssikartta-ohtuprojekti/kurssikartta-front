import React from 'react'
import { shallow } from 'enzyme'
import CourseMapAdmin from './courseMapAdmin'
import {defaultMatrix} from '../../utils/courseMatrices'
import MatriceSelect from '../matriceSelect'

describe.only('<CourseMapAdmin />', () => {
  const defaultMatrice = defaultMatrix()

  const perus = [
      {
          code: "TKT10001",
          name: "Dummy1",
          level: "Perusopinnot",
          compulsory: true,
          prereqs: [],
          studytrack: ["ss"],
          ects: "1-10",
          url: "https://courses.helsinki.fi/fi/TKT21010"
      },
      {
          code: "TKT10002",
          name: "Dummy2",
          level: "Perusopinnot",
          compulsory: true,
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
  const mat = [
      {
          code: "MAT11001",
          name: "Dummy7",
          level: "Matematiikka",
          faculty: "math",
          compulsory: false,
          prereqs: [],
          studytrack: ["math"],
          ects: "1-10",
          url: "https://courses.helsinki.fi/fi/mat11001"
      },
      {
          code: "MAT11002",
          name: "Dummy8",
          level: "Matematiikka",
          faculty: "math",
          compulsory: false,
          prereqs: [],
          studytrack: ["math"],
          ects: "1-10",
          url: "https://courses.helsinki.fi/fi/mat11002/"
      }
  ]

  it('renders peruskurssit', () => {
      const mockHandler = jest.fn()
      const courseMapComponent = shallow(<CourseMapAdmin perus={perus} aine={null} syv={null} mat={null} courseMapMatrice={defaultMatrice} />)
      //console.log(courseMapComponent)
      const contentDiv = courseMapComponent.html().toString()
      expect(contentDiv.includes("Dummy1"))
      expect(contentDiv.includes("Dummy2"))

      expect(!contentDiv.includes("Dummy3"))
      expect(!contentDiv.includes("Dummy4"))
      expect(!contentDiv.includes("Dummy5"))
      expect(!contentDiv.includes("Dummy6"))
      expect(!contentDiv.includes("Dummy7"))
      expect(!contentDiv.includes("Dummy8"))
  })

  it('renders ainekurssit', () => {
      const mockHandler = jest.fn()
      const courseMapComponent = shallow(<CourseMapAdmin perus={null} aine={perus} syv={null} mat={null} courseMapMatrice={defaultMatrice} />)
      //console.log(courseMapComponent)
      const contentDiv = courseMapComponent.html().toString()
      expect(contentDiv.includes("Dummy3"))
      expect(contentDiv.includes("Dummy4"))

      expect(!contentDiv.includes("Dummy1"))
      expect(!contentDiv.includes("Dummy2"))
      expect(!contentDiv.includes("Dummy5"))
      expect(!contentDiv.includes("Dummy6"))
      expect(!contentDiv.includes("Dummy7"))
      expect(!contentDiv.includes("Dummy8"))
  })

  it('renders syventävät', () => {
      const mockHandler = jest.fn()
      const courseMapComponent = shallow(<CourseMapAdmin perus={null} aine={null} syv={syv} mat={null} courseMapMatrice={defaultMatrice} />)
      //console.log(courseMapComponent)
      const contentDiv = courseMapComponent.html().toString()
      expect(contentDiv.includes("Dummy5"))
      expect(contentDiv.includes("Dummy6"))

      expect(!contentDiv.includes("Dummy1"))
      expect(!contentDiv.includes("Dummy2"))
      expect(!contentDiv.includes("Dummy3"))
      expect(!contentDiv.includes("Dummy4"))
      expect(!contentDiv.includes("Dummy7"))
      expect(!contentDiv.includes("Dummy8"))
  })

  it('renders matematiikat', () => {
      const mockHandler = jest.fn()
      const courseMapComponent = shallow(<CourseMapAdmin perus={null} aine={null} syv={null} mat={mat} courseMapMatrice={defaultMatrice} />)
      //console.log(courseMapComponent)
      const contentDiv = courseMapComponent.html().toString()
      expect(contentDiv.includes("Dummy7"))
      expect(contentDiv.includes("Dummy8"))

      expect(!contentDiv.includes("Dummy1"))
      expect(!contentDiv.includes("Dummy2"))
      expect(!contentDiv.includes("Dummy3"))
      expect(!contentDiv.includes("Dummy4"))
      expect(!contentDiv.includes("Dummy5"))
      expect(!contentDiv.includes("Dummy6"))    
  })

  it('renders the page', () => {
      const mockHandler = jest.fn()
      const courseMapComponent = shallow(<CourseMapAdmin perus={perus} aine={aine} syv={syv} mat={mat} />)
      //console.log(courseMapComponent)
      const contentDiv = courseMapComponent.html().toString()
      //console.log(courseMapComponent.html())
      //console.log(contentDiv)
      expect(contentDiv.includes("Dummy1"))
      expect(contentDiv.includes("Dummy2"))
      expect(contentDiv.includes("Dummy3"))
      expect(contentDiv.includes("Dummy4"))
      expect(contentDiv.includes("Dummy5"))
      expect(contentDiv.includes("Dummy6"))
      expect(contentDiv.includes("Dummy7"))
      expect(contentDiv.includes("Dummy8"))
  })
})