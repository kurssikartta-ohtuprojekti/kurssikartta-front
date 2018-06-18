
import React from 'react'
import Popup from 'reactjs-popup'
import { Button } from 'react-bootstrap' 
import CompCourseStyling from'./courseComponents/compCourseStyling'
import CourseStyling from'./courseComponents/courseStyling'
import CourseAdminPanel from './admin/courseAdminPanel'
import CourseInfo from './courseComponents/courseInfo'
import courseInfoService from './../services/courseinfo'

// const Course = ({ course, style, user, courseMovementHandler, deleteCourseHandler, scale }) => {
class Course extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                hovered: false,                
            }
        }
    
    toggleHover = () => {
        if (!this.state.hovered) {
            // console.log("in")
            this.setState({hovered: true})
        } else {
            // console.log("out")
            this.setState({hovered: false})
        }
    }
    // Pakollisen kurssin Button-ominaisuus
    compulsoryCourseButton = () => {
        const course = this.props.course
        const scale = this.props.scale
        const hovered = this.state.hovered
        return (
            <Button onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className="compulsoryBtn" style={CompCourseStyling({course, scale, hovered})}>   
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

    // Valinnasen kurssin Button-ominaisuus
    noncompulsoryCourseButton = () => {
        const course = this.props.course
        const scale = this.props.scale
        const hovered = this.state.hovered
        return (
            <Button onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className="noncompulsoryBtn" style={CourseStyling({course, scale, hovered})}>
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
        // Yksittäisen kurssin renderointi
        <div className="courseBtn" style={this.props.style}> 
            {this.props.course.compulsory ?
                <div className="compulsory" style={{padding:3}}> 
                    {/* Popup-ominaisuus kurssitietojen avaamiselle */}

                    {this.props.user !== undefined ? 
                        <Popup
                            trigger={this.compulsoryCourseButton()}
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
                            trigger={this.compulsoryCourseButton()}
                            modal
                            closeOnDocumentClick
                        >
                            <span>
                                <CourseInfo course={this.props.course}
                                            courseInfoService={courseInfoService}/> 
                            </span>
                        </Popup>
                    }
                </div> :

                <div className="noncompulsory" style={{padding:3}}> 
                    {/* Popup-ominaisuus kurssitietojen avaamiselle */}
                    {this.props.user !== undefined ? 
                        <Popup
                            trigger={this.noncompulsoryCourseButton()}
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
                            trigger={this.noncompulsoryCourseButton()}
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
            } 
        </div>
        
    )
    }
}


export default Course