import React from 'react'
import Course from './course'
import PeriodButton from './periodButton'
import './courseMap.css'
// import CourseMapMatrice from './courseMapMatrice'
import {cssGridStringify,
        // defaultMatrix,
        mappedCourses,
        unmappedCourses
            } from '.././utils/courseMatrices.js'




//  Kartalla näkyväksi asetettujen kurssien renderointi kartalle
    const CourseMap = ({perus, aine, syv, mat, sideLength, courseMapMatrice }) => {

        const removeUnmappedCourses = (matrice, courses) => {
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

        if (courseMapMatrice === undefined) {
            courseMapMatrice = []
        }
        if (sideLength === undefined) {
            sideLength = courseMapMatrice.length
        }


    // courseMapMatrice = moveCourseToNewCoordinates('TKT10001', courseMapMatrice, 1, 1)
    // courseMapMatrice = removeCourse('TKT10001', courseMapMatrice)
    // courseMapMatrice = addNewCourse('TKT10001', courseMapMatrice, 1, 1)

    const cssGridTemplateAreas = cssGridStringify(sideLength, courseMapMatrice)
    // console.log(matrixFindCourseByCode('TKT10001', courseMapMatrice))
    // console.log(cssGridTemplateAreas)
    return (
        <div>
            <div>
                <PeriodButton />
            </div>
            <div className="wrapper" style={{ gridTemplateAreas: cssGridTemplateAreas }}>

        perus = removeUnmappedCourses(courseMapMatrice, perus)
        aine = removeUnmappedCourses(courseMapMatrice, aine)
        syv = removeUnmappedCourses(courseMapMatrice, syv)
        mat = removeUnmappedCourses(courseMapMatrice, mat)


        const cssGridTemplateAreas = cssGridStringify(sideLength, courseMapMatrice)
        return (
            <div className="wrapper" style={{gridTemplateAreas: cssGridTemplateAreas}}>
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

                {/* Syventävät opinnot */}
                {syv === null ?
                    <div></div> :
                    syv.map(course => course.visible ?
                        <div style={{ gridArea: course.code }}>
                            <Course key={course.code} course={course} />
                        </div> :
                        <div>{course.visible}</div>
                    )
                }

                {/* Muut opinnot */}
                {mat === null ?
                    <div></div> :
                    mat.map(course => course.visible ?
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

export default CourseMap