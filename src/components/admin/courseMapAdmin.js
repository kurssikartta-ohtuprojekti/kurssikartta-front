import React from 'react'
import Course from '../course'
import './courseMapAdmin.css'

import {cssGridStringify,
        // defaultMatrix,
        // emptyMatrix,
        // matrixFindCourseByCode,
        // moveCourseToNewCoordinates,
        // moveCourseByXAndY,
        // moveCourseEast,
        // moveCourseWest,
        // moveCourseSouth,
        // moveCourseNorth,
        // moveCourseNorthEast,
        // moveCourseNorthWest,
        // moveCourseSouthEast,
        // moveCourseSouthWest,
        // addNewCourse,
        // removeCourse,
        mappedCourses,
        unmappedCourses,
        emptyNodeCoordinatesAsList
            } from '../.././utils/courseMatrices.js'

import {courseCounter} from '../.././utils/tools.js'

//  Admin mapview
class CourseMapAdmin extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
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
    // const CourseMapAdmin = ({perus, aine, syv, mat, sideLength, courseMapMatrice }) => {
        render () {
            // console.log(this.props.matrice)
            let courseMapMatrice = []
            if (this.props.matrice === undefined) {
                // courseMapMatrice = defaultMatrix()
            } else {
                courseMapMatrice = this.props.matrice
            }

            let sideLength = 0
            if (this.props.sideLength === undefined) {
                sideLength = courseMapMatrice.length
            }
            
            const cssGridTemplateAreas = cssGridStringify(this.props.sideLength, courseMapMatrice)

            const perus = this.removeUnmappedCourses(courseMapMatrice, this.props.perus)
            const aine = this.removeUnmappedCourses(courseMapMatrice, this.props.aine)
            const syv = this.removeUnmappedCourses(courseMapMatrice, this.props.syv)
            const mat = this.removeUnmappedCourses(courseMapMatrice, this.props.mat)
            const courseCount = courseCounter(perus, aine, syv, mat)
            const matriceNodeCount = sideLength * sideLength
            const emptyNodeCount = matriceNodeCount - courseCount
            
            const emptyList = [] // Used to render empty matrice nodes
            for (let i = 0; i < emptyNodeCount; i++) {
                emptyList[i] = i;
            }

            const emptyNodeCoordinates = emptyNodeCoordinatesAsList(courseMapMatrice)
            // console.log(emptyNodeCoordinates)
            return (
                <div className="awrapper" style={{gridTemplateAreas: cssGridTemplateAreas}}>
    {/* perusopinnot */}
                    {perus === null ?
                        <null></null>:
                        perus.map(course => 
                                <div key={course.code} style={{gridArea: course.code}}>
                                    <Course key={course.code} course={course}/>
                                </div> 
                        ) 
                    }
    {/* Aineopinnot */}
                    {aine === null ?
                        <null></null> :
                        aine.map(course =>
                                    <div key={course.code} style={{gridArea: course.code}}>
                                        <Course key={course.code} course={course}/>
                                    </div>
                        )
                    }

    {/* Syventävät opinnot */}
                    {syv === null ?
                        <null></null> :
                        syv.map(course =>
                                    <div key={course.code} style={{gridArea: course.code}}>
                                        <Course key={course.code} course={course}/>
                                    </div>
                        )
                    }

    {/* Muut opinnot */}
                    {this.props.mat === null ?
                        <null></null> :
                        mat.map(course =>
                                    <div key={course.code} style={{gridArea: course.code}}>
                                        <Course key={course.code} course={course}/>
                                    </div>
                        )
                    }
    {/* Admin empty grids */}
                    {emptyList.map(i => 
                            <div key={emptyNodeCoordinates[i]}>
                                <p>{emptyNodeCoordinates[i]}</p>
                            </div>
                        )

                    }           

                </div>
    )}
}

export default CourseMapAdmin