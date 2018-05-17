
import React from 'react'
import Popup from 'reactjs-popup'
import { Button } from 'react-bootstrap' 
// import CourseInfo from './courseInfo'
const Course = ({ course }) => {
    // console.log(course)
    //  console.log(course.prereqs)

    const compul = {
        border: 'solid',
        borderWidth: 3,
        borderRadius: 6,
        borderColor: 'Red',
        fontWeight: 'bold'
    }

    const compulsoryCourse = () => {
        return (
            <Button style={compul}>
                    {course.code}<br/>{course.name}
            </Button> 
        )    
    }

    const noncompulsoryCourse = () => {
        return (
            <Button >
                    {course.code}<br/>{course.name}
            </Button>
        )
    }
    const courseInfo = () => {
        return (
            <div>
                <p style={{fontWeight: 'bold'}}>{course.name}<br/>{course.code} ({course.ects} op)</p>
                <a href={course.url}>Kurssisivu</a>
                <br/>
                <br/>

                <p fontWeight='bold'>Esitiedot:</p>

                {course.prereqs.length !== 0 ?
                <div style={{paddingLeft:8}}> 
                    {course.prereqs.map(prereq =>
                        <p>{prereq}</p>
                    )}
                </div> :
                <div style={{paddingLeft:8}}>
                    <p>Ei esitietoja</p>
                </div>
                }
            </div>
        )
    }

    return (
        <div> 
            {course.compulsory ?
                <div className="compulsory" style={{padding:3}}> 
                    
                    <Popup
                        trigger={compulsoryCourse()}
                        modal
                        closeOnDocumentClick
                    >
                        <span> {courseInfo()} </span>
                    </Popup>
                </div> :

                <div className="noncompulsory" style={{padding:3}}> 
                    <Popup
                        trigger={noncompulsoryCourse()}
                        modal
                        closeOnDocumentClick
                    >
                        <span> {courseInfo()} </span>
                    </Popup>
                </div>
            }
            
            
        </div>
        
    )
}


export default Course