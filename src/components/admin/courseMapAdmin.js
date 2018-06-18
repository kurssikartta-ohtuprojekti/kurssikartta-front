import React from 'react'
import Course from '../course'
import MatriceSelect from '../matriceSelect'
import './courseMapAdmin.css'

import {
    cssGridStringify,
    removeUnmappedCourses,
    emptyNodeCoordinatesAsList
} from '../.././utils/courseMatrices.js'

import { courseCounter } from '../.././utils/tools.js'

//  Admin mapview
class CourseMapAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        let courseMapMatrice = []

        if (this.props.matrice === undefined) {
        } else {
            courseMapMatrice = this.props.matrice
        }

        let sideLength = 0
        if (this.props.sideLength === undefined) {
            sideLength = courseMapMatrice.length
        }

        // Turn the course matrice into the css property grid-template-areas
        const cssGridTemplateAreas = cssGridStringify(this.props.sideLength, courseMapMatrice)

        // Makes sure unmapped courses arenät rendered in the map
        const basic = removeUnmappedCourses(courseMapMatrice, this.props.basic)
        const inter = removeUnmappedCourses(courseMapMatrice, this.props.inter)
        const adv = removeUnmappedCourses(courseMapMatrice, this.props.adv)
        const math = removeUnmappedCourses(courseMapMatrice, this.props.math)
        const stats = removeUnmappedCourses(courseMapMatrice, this.props.stats)

        // Calculate the amount of empty divs to be rendered as (y, x)
        const courseCount = courseCounter(basic, inter, adv, math, stats)
        const matriceNodeCount = sideLength * sideLength
        const emptyNodeCount = matriceNodeCount - courseCount

        const emptyList = [] // Used to render empty matrice nodes
        for (let i = 0; i < emptyNodeCount; i++) {
            emptyList[i] = i;
        }

        const emptyNodeCoordinates = emptyNodeCoordinatesAsList(courseMapMatrice)
        return (
            <div style={{position: 'relative'}}>
                {this.props.matrices === undefined ?
                    <div /> :
                    <div className="matriceSelect" style={{left: 3}}>
                        <MatriceSelect selected={this.props.selectedMatrice} matrices={this.props.matrices} matriceCallback={this.props.matriceCallback} user={this.props.user} />
                    </div>
                }
                <div className="awrapper" style={{ gridTemplateAreas: cssGridTemplateAreas }}>
                    {/* perusopinnot */}
                    {basic === null ?
                        <null></null> :
                        basic.map(course =>
                            <div key={course.code} style={{ gridArea: course.code }}>
                                <Course
                                    courseMovementHandler={this.props.courseMovementHandler}
                                    deleteCourseHandler={this.props.deleteCourseHandler}
                                    key={course.code}
                                    course={course}
                                    scale={2}
                                    user={this.props.user} />
                            </div>
                        )
                    }
                    {/* Aineopinnot */}
                    {inter === null ?
                        <null></null> :
                        inter.map(course =>
                            <div key={course.code} style={{ gridArea: course.code }}>
                                <Course
                                    courseMovementHandler={this.props.courseMovementHandler}
                                    deleteCourseHandler={this.props.deleteCourseHandler}
                                    key={course.code}
                                    course={course}
                                    scale={2}
                                    user={this.props.user} />
                            </div>
                        )
                    }

                    {/* Syventävät opinnot */}
                    {adv === null ?
                        <null></null> :
                        adv.map(course =>
                            <div key={course.code} style={{ gridArea: course.code }}>
                                <Course
                                    courseMovementHandler={this.props.courseMovementHandler}
                                    deleteCourseHandler={this.props.deleteCourseHandler}
                                    key={course.code}
                                    course={course}
                                    scale={2}
                                    user={this.props.user} />
                            </div>
                        )
                    }

                    {/* Matematiikan opinnot */}
                    {this.props.math === null ?
                        <null></null> :
                        math.map(course =>
                            <div key={course.code} style={{ gridArea: course.code }}>
                                <Course
                                    courseMovementHandler={this.props.courseMovementHandler}
                                    deleteCourseHandler={this.props.deleteCourseHandler}
                                    key={course.code}
                                    course={course}
                                    scale={2}
                                    user={this.props.user} />
                            </div>
                        )
                    }
                    {/* Tilastotieteen opinnot */}
                    {this.props.stats === null ?
                        <null></null> :
                        stats.map(course =>
                            <div key={course.code} style={{ gridArea: course.code }}>
                                <Course
                                    courseMovementHandler={this.props.courseMovementHandler}
                                    deleteCourseHandler={this.props.deleteCourseHandler}
                                    key={course.code}
                                    course={course}
                                    scale={2}
                                    user={this.props.user} />
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
            </div>
        )
    }
}

export default CourseMapAdmin