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
    matriceCallback = (event) => {
        console.log(event.target.name)
        console.log("eventtarget")
        var newMatrice = this.props.matrices[event.target.name]
        this.setState({ courseMapMatrice : newMatrice })
    }
    render() {
        let courseMapMatrice = []
        console.log(this.props.matrice);
        console.log('1');
        console.log(this.props.matrices[0]);
        if (this.props.matrice === undefined) {
        } else {
            courseMapMatrice = this.props.matrice
        }

        let sideLength = 0
        if (this.props.sideLength === undefined) {
            sideLength = courseMapMatrice.length
        }

        const cssGridTemplateAreas = cssGridStringify(this.props.sideLength, courseMapMatrice)

        const perus = removeUnmappedCourses(courseMapMatrice, this.props.perus)
        const aine = removeUnmappedCourses(courseMapMatrice, this.props.aine)
        const syv = removeUnmappedCourses(courseMapMatrice, this.props.syv)
        const mat = removeUnmappedCourses(courseMapMatrice, this.props.mat)
        const courseCount = courseCounter(perus, aine, syv, mat)
        const matriceNodeCount = sideLength * sideLength
        const emptyNodeCount = matriceNodeCount - courseCount

        const emptyList = [] // Used to render empty matrice nodes
        for (let i = 0; i < emptyNodeCount; i++) {
            emptyList[i] = i;
        }

        const emptyNodeCoordinates = emptyNodeCoordinatesAsList(courseMapMatrice)
        return (
            <div>
                <div>
                    <MatriceSelect selected={courseMapMatrice.name} matrices={this.props.matrices} matrice={this.props.matrice} matriceCallback={this.props.matriceCallback} />
                </div>
                <div className="awrapper" style={{ gridTemplateAreas: cssGridTemplateAreas }}>
                    {/* perusopinnot */}
                    {perus === null ?
                        <null></null> :
                        perus.map(course =>
                            <div key={course.code} style={{ gridArea: course.code }}>
                                <Course
                                    courseMovementHandler={this.props.courseMovementHandler}
                                    deleteCourseHandler={this.props.deleteCourseHandler}
                                    key={course.code}
                                    course={course}
                                    user={this.props.user} />
                            </div>
                        )
                    }
                    {/* Aineopinnot */}
                    {aine === null ?
                        <null></null> :
                        aine.map(course =>
                            <div key={course.code} style={{ gridArea: course.code }}>
                                <Course
                                    courseMovementHandler={this.props.courseMovementHandler}
                                    deleteCourseHandler={this.props.deleteCourseHandler}
                                    key={course.code}
                                    course={course}
                                    user={this.props.user} />
                            </div>
                        )
                    }

                    {/* Syventävät opinnot */}
                    {syv === null ?
                        <null></null> :
                        syv.map(course =>
                            <div key={course.code} style={{ gridArea: course.code }}>
                                <Course
                                    courseMovementHandler={this.props.courseMovementHandler}
                                    deleteCourseHandler={this.props.deleteCourseHandler}
                                    key={course.code}
                                    course={course}
                                    user={this.props.user} />
                            </div>
                        )
                    }

                    {/* Muut opinnot */}
                    {this.props.mat === null ?
                        <null></null> :
                        mat.map(course =>
                            <div key={course.code} style={{ gridArea: course.code }}>
                                <Course
                                    courseMovementHandler={this.props.courseMovementHandler}
                                    deleteCourseHandler={this.props.deleteCourseHandler}
                                    key={course.code}
                                    course={course}
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