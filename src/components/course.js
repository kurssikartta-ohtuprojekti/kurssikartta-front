
import React from 'react'
import Popup from 'reactjs-popup'
import { Button } from 'react-bootstrap'
import CourseStyling from './courseComponents/courseStyling'
import CourseAdminPanel from './admin/courseAdminPanel'
import CourseInfo from './courseComponents/courseInfo'
import courseInfoService from './../services/courseinfo'
import {completedFilter} from './../utils/tools'
let hoverTimer // Variable to control timed out hover functions

class Course extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false,
        }
    }


    toggleHoverOn = () => {
        const course = this.props.course
        const prereqsHandler = this.props.prereqsHandler
        this.setState({ hovered: true })
        hoverTimer = window.setTimeout(function () {
            if (prereqsHandler !== undefined) {
                prereqsHandler(course)
            }
        }, 350)
    }

    toggleHoverOff = () => {
        this.setState({ hovered: false })
        window.clearTimeout(hoverTimer);
        if (this.props.prereqsOffHandler !== undefined) {
            this.props.prereqsOffHandler()
        }
    }

    // Valinnasen kurssin Button-ominaisuus
    courseButton = () => {
        const course = this.props.course
        const scale = this.props.scale
        const hovered = this.state.hovered
        const prereqHighlight = this.props.prereqHighlighted
        const periodFiltered = this.props.periodFiltered
        let completedCourses = []
            if (this.props.user !== undefined && this.props.user !== null && this.props.user.role === 'user') {
                completedCourses = this.props.user.courses
            }
        // console.log(completedCourses)
        return (
            <Button onMouseEnter={this.toggleHoverOn} onMouseLeave={this.toggleHoverOff}
                // className="noncompulsoryBtn"
                style={CourseStyling({ course, scale, hovered, prereqHighlight, periodFiltered})}>
                {this.props.scale > 1.5 || this.props.scale === undefined ?
                     <span>
                     {completedFilter(this.props.course.code, completedCourses) ? 
                         <span style={{color: 'green'}} className="glyphicon glyphicon-ok"/>
                         :
                         <span/>}
                     <span>
                         {this.props.course.code} <br/> {this.props.course.name}
                     </span> 
                 </span>
                 :
                 <span>
                     {completedFilter(this.props.course.code, completedCourses) ? 
                         <span style={{color: 'green'}} className="glyphicon glyphicon-ok"/>
                         :
                         <span/>}
                     <span style= {{textAlign: 'center'}}>
                         {this.props.course.code}
                     </span>
                 </span>
                }
            </Button>
        )
    }
    render() {
        return (
            // Render a single course button
            <div className="courseBtn" style={this.props.style}>
                <div className="course" style={{ padding: 3 }}>
                    {/* Popups for course information or admin control panel*/}

                    {this.props.user !== undefined && this.props.user !== null && this.props.user.role === 'admin' && this.props.adminFuncts === true?
                        <Popup
                            trigger={this.courseButton()}
                            // modal
                            closeOnDocumentClick
                        >
                            {this.isAdmin()}
                        </Popup>
                        :

                        <Popup
                            trigger={this.courseButton()}
                            closeOnDocumentClick
                            modal
                            contentStyle={{ maxHeight: "70vh", width: "380px", overflow: 'auto', zIndex: 99 }}
                        >
                            <span>
                                <CourseInfo course={this.props.course}
                                            user={this.props.user}
                                            courseInfoService={courseInfoService} 
                                            userCompletedCourseHandler={this.props.userCompletedCourseHandler}
                                            />
                            </span>
                        </Popup>
                    }
                </div>
            </div>

        )
    }

    isAdmin() {
        if (this.props.user.role === 'admin') {
            return <span>
                <CourseAdminPanel course={this.props.course} courseMovementHandler={this.props.courseMovementHandler} deleteCourseHandler={this.props.deleteCourseHandler} />
            </span>;
        } else {
            return
        }
    }
}


export default Course