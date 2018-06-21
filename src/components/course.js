
import React from 'react'
import Popup from 'reactjs-popup'
import { Button } from 'react-bootstrap' 
import CourseStyling from'./courseComponents/courseStyling'
import CourseAdminPanel from './admin/courseAdminPanel'
import CourseInfo from './courseComponents/courseInfo'
import courseInfoService from './../services/courseinfo'

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
        this.setState({hovered: true})
        hoverTimer =  window.setTimeout(function() {
            if (prereqsHandler !== undefined) {
                prereqsHandler(course)
            }
        }, 350)
    }

    toggleHoverOff = () => {
        this.setState({hovered: false})
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
        return (
            <Button onMouseEnter={this.toggleHoverOn} onMouseLeave={this.toggleHoverOff} 
                    // className="noncompulsoryBtn"
                    style={CourseStyling({course, scale, hovered, prereqHighlight})}>
                {this.props.scale > 1.5 || this.props.scale === undefined ? 
                    <span>
                        {this.props.course.code} <br/> {this.props.course.name}
                    </span> :
                    <span style= {{textAlign: 'center'}}>
                        {this.props.course.code}
                    </span>
                }            
            </Button>
        )
    }
    render () { 
        return (
        // Render a single course button
        <div className="courseBtn" style={this.props.style}> 
                <div className="course" style={{padding:3}}> 
                    {/* Popups for course information or admin control panel*/}

                    {this.props.user.role === 'admin' ?
                        <Popup
                            trigger={this.courseButton()}
                            // modal
                            closeOnDocumentClick
                        >
                            <span>
                                <CourseAdminPanel 
                                    course={this.props.course}
                                    courseMovementHandler={this.props.courseMovementHandler} 
                                    deleteCourseHandler={this.props.deleteCourseHandler}/>  
                            </span> 
                        </Popup>
                            :
                        <Popup
                            trigger={this.courseButton()}
                            modal
                            closeOnDocumentClick
                        >
                            <span>
                                <CourseInfo course={this.props.course}
                                            courseInfoService={courseInfoService}/> 
                            </span>
                        </Popup>
                    }
                </div>  
        </div>
        
    )
    }
}


export default Course