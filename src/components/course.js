
import React from 'react'
import Popup from 'reactjs-popup'
import { Button } from 'react-bootstrap' 
import CompCourseStyling from'./courseComponents/compCourseStyling'
import CourseStyling from'./courseComponents/courseStyling'
import CourseAdminPanel from './admin/courseAdminPanel'
import CourseInfo from './courseComponents/courseInfo'
import courseInfoService from './../services/courseinfo'

// import CompCourseStyling from './courseComponents/compCourseStyling';
const Course = ({ course, style, user, courseMovementHandler, deleteCourseHandler }) => {

    // Pakollisen kurssin Button-ominaisuus
    const compulsoryCourseButton = () => {
        return (
            <Button className="compulsoryBtn" style={CompCourseStyling({course})}>
                    {course.code}<br/>{course.name}
            </Button> 
        )    
    }

    // Valinnasen kurssin Button-ominaisuus
    const noncompulsoryCourseButton = () => {
        return (
            <Button className="noncompulsoryBtn" style={CourseStyling({course})}>
                    {course.code}<br/>{course.name}
            </Button>
        )
    }
    return (
        // Yksittäisen kurssin renderointi
        <div className="courseBtn" style={style}> 
            {course.compulsory ?
                <div className="compulsory" style={{padding:3}}> 
                    {/* Popup-ominaisuus kurssitietojen avaamiselle */}
                    <Popup
                        trigger={compulsoryCourseButton()}
                        modal
                        closeOnDocumentClick
                    >
                        {user !== undefined ? 
                            <span>
                                <CourseAdminPanel 
                                    course={course}
                                    courseMovementHandler={courseMovementHandler} 
                                    deleteCourseHandler={deleteCourseHandler}/>  
                            </span> 
                            :
                            <span>
                                <CourseInfo course={course}
                                            courseInfoService={courseInfoService}/> 
                            </span>
                        }
                    </Popup>
                </div> :

                <div className="noncompulsory" style={{padding:3}}> 
                    {/* Popup-ominaisuus kurssitietojen avaamiselle */}
                    <Popup
                        trigger={noncompulsoryCourseButton()}
                        modal
                        // overlayStyle={{borderRadius:20}}
                        closeOnDocumentClick
                    >
                        {user !== undefined ? 

                            <span>
                                <CourseAdminPanel 
                                    course={course}
                                    courseMovementHandler={courseMovementHandler} 
                                    deleteCourseHandler={deleteCourseHandler}/>  
                            </span> 
                            :
                            <span>
                                <CourseInfo course={course} 
                                            courseInfoService={courseInfoService}/> 
                            </span>
                        }
                    </Popup>
                </div>
            } 
        </div>
        
    )
}


export default Course