import React from 'react'
import Course from './course'
import './courseMap.css'

//  Näkyväksi asetettujen kurssien renderointi kartalle
    const CourseMap = ({perus, aine, syv, mat }) => {
        
        return (
            <div className="wrapper">
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