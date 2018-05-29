import React from 'react'
import Course from './course'
import './courseMap.css'
// import CourseMapMatrice from './courseMapMatrice'
import {cssGridStringify, defaultMatrix, cssTestString} from './courseMatrices.js'

//  Kartalla näkyväksi asetettujen kurssien renderointi kartalle
    const CourseMap = ({perus, aine, syv, mat }) => {
        const courseMapMatrice = defaultMatrix()
        // console.log(courseMapMatrice)
        const cssGridTemplateAreas = cssGridStringify(38, courseMapMatrice)
        // const cssGridTemplateAreas = cssTestString()
        
        console.log(cssGridTemplateAreas)
        return (
            <div className="wrapper" style={{gridTemplateAreas: cssGridTemplateAreas}}>
{/* perusopinnot */}
                {perus === null ?
                    <div></div> :
                    perus.map(course => 
                        course.visible ?
                            <div style={{gridArea: course.code}}>
                                <Course key={course.code} course={course}/>
                            </div> :
                            <div>{course.visible}</div> 
                    ) 
                }
{/* Aineopinnot */}
                {aine === null ?
                    <div></div> :
                    aine.map(course => course.visible ?
                                            <div style={{gridArea: course.code}}>
                                                <Course key={course.code} course={course}/>
                                            </div> :
                                            <div>{course.visible}</div> 
                    )
                }

{/* Syventävät opinnot */}
                {syv === null ?
                    <div></div> :
                    syv.map(course => course.visible ?
                                            <div style={{gridArea: course.code}}>
                                                <Course key={course.code} course={course}/>
                                            </div> :
                                            <div>{course.visible}</div> 
                    )
                }

{/* Muut opinnot */}
                {mat === null ?
                    <div></div> :
                    mat.map(course => course.visible ?
                                            <div style={{gridArea: course.code}}>
                                                <Course key={course.code} course={course}/>
                                            </div> :
                                            <div>{course.visible}</div> 
                    )
                }


            </div>
    )}


export default CourseMap