import React from 'react'
import Course from '../course'
import './courseMapAdmin.css'

import {cssGridStringify,
        defaultMatrix,
        emptyMatrix,
        matrixFindCourseByCode,
        moveCourseToNewCoordinates,
        moveCourseByXAndY,
        moveCourseEast,
        moveCourseWest,
        moveCourseSouth,
        moveCourseNorth,
        moveCourseNorthEast,
        moveCourseNorthWest,
        moveCourseSouthEast,
        moveCourseSouthWest,
        addNewCourse,
        removeCourse,
        emptyNodeCoordinatesAsList
            } from '../.././utils/courseMatrices.js'

import {courseCounter, visibleFalseCounter} from '../.././utils/tools.js'

//  Admin mapview
    const CourseMapAdmin = ({perus, aine, syv, mat, sideLength, courseMapMatrice }) => {
        if (sideLength === undefined) {
            sideLength = 38
        }
        if (courseMapMatrice === undefined) {
            courseMapMatrice = defaultMatrix()
        }
        const cssGridTemplateAreas = cssGridStringify(sideLength, courseMapMatrice)

        const courseCount = courseCounter(perus, aine, syv, mat)
        const matriceNodeCount = sideLength * sideLength
        const visibleFalseCount = visibleFalseCounter(perus, aine, syv, mat) 
        const emptyNodeCount = matriceNodeCount - courseCount + visibleFalseCount 
        
        const emptyList = [] // Used to render empty matrice nodes
        for (let i = 0; i < emptyNodeCount; i++) {
            emptyList[i] = i;
        }

        const emptyNodeCoordinates = emptyNodeCoordinatesAsList(courseMapMatrice)
        console.log(emptyNodeCoordinates)
        return (
            <div className="awrapper" style={{gridTemplateAreas: cssGridTemplateAreas}}>
{/* perusopinnot */}
                {perus === null ?
                    <null></null>:
                    perus.map(course => 
                        course.visible ?
                            <div style={{gridArea: course.code}}>
                                <Course key={course.code} course={course}/>
                            </div> :
                            <null></null>
                    ) 
                }
{/* Aineopinnot */}
                {aine === null ?
                    <null></null> :
                    aine.map(course => course.visible ?
                                            <div style={{gridArea: course.code}}>
                                                <Course key={course.code} course={course}/>
                                            </div> :
                                            <null></null>
                    )
                }

{/* Syventävät opinnot */}
                {syv === null ?
                    <null></null> :
                    syv.map(course => course.visible ?
                                            <div style={{gridArea: course.code}}>
                                                <Course key={course.code} course={course}/>
                                            </div> :
                                            <null></null>
                    )
                }

{/* Muut opinnot */}
                {mat === null ?
                    <null></null> :
                    mat.map(course => course.visible ?
                                            <div style={{gridArea: course.code}}>
                                                <Course key={course.code} course={course}/>
                                            </div> :
                                            <null></null>
                    )
                }
{/* Admin empty grids */}
                {emptyList.map(i => 
                        <div><p>{emptyNodeCoordinates[i]}</p></div>
                    )

                }           

            </div>
    )}


export default CourseMapAdmin