import React from 'react'
import Course from './course'
import PeriodButton from './periodButton'
import './courseMap.css'
//import { klikHandle } from './periodButton'
// import CourseMapMatrice from './courseMapMatrice'
import {
    cssGridStringify,
    // defaultMatrix,
    mappedCourses,
    unmappedCourses
} from '.././utils/courseMatrices.js'
import {periodFilter} from '.././utils/tools.js'
//  Kartalla näkyväksi asetettujen kurssien renderointi kartalle
class CourseMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //checkbox values
            p1: false, 
            p2: false,
            p3: false,
            p4: false,
            pC: false,
            pS: false,
            year: (new Date()).getFullYear().toString()
        }
    }

    removeUnmappedCourses = (matrice, courses) => {
        const mapped = mappedCourses(matrice)
        const unmapped = unmappedCourses(courses, mapped)
        const returnList = []

        for (let i = 0; i < courses.length; i++) {
            if (!unmapped.includes(courses[i])) {
                returnList.push(courses[i])
            }
        }
        return returnList
    }

    periodCallback = (event) => {
        this.setState({[event.target.name] : event.target.checked})
    }

    yearCallback = (event) => {
        // console.log(event.target.name)
        this.setState({year : event.target.name})
    }

    render() {
        let courseMapMatrice = []
        if (this.props.courseMapMatrice === undefined) {
            courseMapMatrice = []
        } else {
            courseMapMatrice = this.props.courseMapMatrice
        }
        let sideLength = 0
        if (this.props.sideLength === undefined) {
            sideLength = courseMapMatrice.length
        }

        const perus = this.removeUnmappedCourses(courseMapMatrice, this.props.perus)
        const aine = this.removeUnmappedCourses(courseMapMatrice, this.props.aine)
        const syv = this.removeUnmappedCourses(courseMapMatrice, this.props.syv)
        const mat = this.removeUnmappedCourses(courseMapMatrice, this.props.mat)

        const cssGridTemplateAreas = cssGridStringify(sideLength, courseMapMatrice)
        return (
            <div>
                <div>
                    <PeriodButton p1={this.state.p1} p2={this.state.p2} p3={this.state.p3}
                    p4={this.state.p4} pC={this.state.pC} pS={this.state.pS} callback={this.periodCallback}
                    year={this.state.year} yearCallback={this.yearCallback} />
                </div>

                <div className="wrapper" style={{ gridTemplateAreas: cssGridTemplateAreas }}>
                    {/* perusopinnot */}

                    {perus === null ?
                        <div></div> :
                        perus.map(course =>
                                <div key={course.code} style={{ gridArea: course.code }}>
                                    {periodFilter({p1: this.state.p1, p2: this.state.p2, p3: this.state.p3, p4: this.state.p4, pC: this.state.pC, pS: this.state.pS, year: this.state.year}, course.periodyear) ? 
                                        <Course key={course.code} course={course} /> :
                                        <Course key={course.code} course={course}  style={{opacity: '0.3'}}/>
                                    }
                                </div> 
                        )
                    }
                    {/* Aineopinnot */}
                    {aine === null ?
                        <div></div> :
                        aine.map(course =>
                                <div key={course.code} style={{ gridArea: course.code }}>
                                        {periodFilter({p1: this.state.p1, p2: this.state.p2, p3: this.state.p3, p4: this.state.p4, pC: this.state.pC, pS: this.state.pS, year: this.state.year}, course.periodyear) ? 
                                            <Course key={course.code} course={course} /> :
                                            <Course key={course.code} course={course}  style={{opacity: '0.3'}}/>
                                        }
                                </div>
                        )
                    }
                    {/* Syventävät opinnot */}
                    {syv === null ?
                        <div></div> :
                        syv.map(course =>
                                <div key={course.code} style={{ gridArea: course.code }}>
                                        {periodFilter({p1: this.state.p1, p2: this.state.p2, p3: this.state.p3, p4: this.state.p4, pC: this.state.pC, pS: this.state.pS, year: this.state.year}, course.periodyear) ? 
                                            <Course key={course.code} course={course} /> :
                                            <Course key={course.code} course={course}  style={{opacity: '0.3'}}/>
                                        }
                                </div>
                        )
                    }

                    {/* Muut opinnot */}
                    {mat === null ?
                        <div></div> :
                        mat.map(course =>
                            <div key={course.code} style={{ gridArea: course.code }}>
                                    {periodFilter({p1: this.state.p1, p2: this.state.p2, p3: this.state.p3, p4: this.state.p4, pC: this.state.pC, pS: this.state.pS, year: this.state.year}, course.periodyear) ? 
                                        <Course key={course.code} course={course} /> :
                                        <Course key={course.code} course={course}  style={{opacity: '0.3'}}/>
                                    }
                            </div>
                        )
                    }

                </div>
            </div>
        )
    }
}

export default CourseMap