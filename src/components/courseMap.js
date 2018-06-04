import React from 'react'
import Course from './course'
import PeriodButton from './periodButton'
import './courseMap.css'
// import CourseMapMatrice from './courseMapMatrice'
import {
    cssGridStringify,
    // defaultMatrix,
    mappedCourses,
    unmappedCourses
} from '.././utils/courseMatrices.js'




//  Kartalla näkyväksi asetettujen kurssien renderointi kartalle
//const CourseMap = ({perus, aine, syv, mat, sideLength, courseMapMatrice }) => {
class CourseMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            period: 'all'
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
    // courseMapMatrice = moveCourseToNewCoordinates('TKT10001', courseMapMatrice, 1, 1)
    // courseMapMatrice = removeCourse('TKT10001', courseMapMatrice)
    // courseMapMatrice = addNewCourse('TKT10001', courseMapMatrice, 1, 1)


    // console.log(matrixFindCourseByCode('TKT10001', courseMapMatrice))
    // console.log(cssGridTemplateAreas)
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
                    <PeriodButton />
                </div>
                <div className="wrapper" style={{ gridTemplateAreas: cssGridTemplateAreas }}>
                    {/* perusopinnot */}

                    {perus === null ?
                        <div></div> :
                        perus.map(course =>
                            course.visible ?
                                <div style={{ gridArea: course.code }}>
                                    <Course key={course.code} course={course} />
                                </div> :
                                <div>{course.visible}</div>
                        )
                    }
                    {/* Aineopinnot */}
                    {aine === null ?
                        <div></div> :
                        aine.map(course => course.visible ?
                            <div style={{ gridArea: course.code }}>
                                <Course key={course.code} course={course} />
                            </div> :
                            <div>{course.visible}</div>
                        )
                    }

                            <div style={{ gridArea: course.code }}>
                                <Course key={course.code} course={course} />
                            </div> :
                            <div>{course.visible}</div>
                        )
                    }

                </div>
            </div>
        )
    }
}

export default CourseMap