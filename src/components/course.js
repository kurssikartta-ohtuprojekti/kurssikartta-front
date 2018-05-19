
import React from 'react'
import Popup from 'reactjs-popup'
import { Button } from 'react-bootstrap' 
import CompCourseStyling from'./courseComponents/compCourseStyling'
import CourseStyling from'./courseComponents/courseStyling'

import CourseInfo from './courseComponents/courseInfo'
// import CompCourseStyling from './courseComponents/compCourseStyling';
const Course = ({ course }) => {

    const compulsoryCourseButton = () => {
        return (
        <Button className="compulsoryBtn" style={CompCourseStyling({course})}>
                    {course.code}<br/>{course.name}
            </Button> 
        )    
    }

    const noncompulsoryCourseButton = () => {
        return (
            <Button className="noncompulsoryBtn" style={CourseStyling({course})}>
                    {course.code}<br/>{course.name}
            </Button>
        )
    }

    return (
        <div className="courseBtn"> 
            {course.compulsory ?
                <div className="compulsory" style={{padding:3}}> 
                    
                    <Popup
                        trigger={compulsoryCourseButton()}
                        modal
                        closeOnDocumentClick
                    >
                        <span> <CourseInfo course={course}/> </span>
                    </Popup>
                </div> :

                <div className="noncompulsory" style={{padding:3}}> 
                    <Popup
                        trigger={noncompulsoryCourseButton()}
                        modal
                        // overlayStyle={{borderRadius:20}}
                        closeOnDocumentClick
                    >
                        <span> <CourseInfo course={course}/> </span>
                    </Popup>
                </div>
            } 
        </div>
        
    )
}


export default Course