import React from 'react'
import courseInfoService from '../../services/courseinfo'
// Kurssitietojen renderointi
const CourseInfo = ({ course }) => {
    
    const courseInfo =  courseInfoService.getCourseInfo(course.code)
    console.log(courseInfo)
    return (
        <div>
            <p style={{ fontWeight: 'bold' }}>{course.name}<br />{course.code} ({course.ects} op)</p>
            <a href={course.url}>Kurssisivu</a>
            <br />
            {course.compulsory ?
                <p>Pakollinen kurssi</p> :
                <p>Valinnainen kurssi</p>
            }
            <p fontWeight='bold'>Esitiedot:</p>

            {course.prereqs.length !== 0 ?
                <div className="prereqs" style={{ paddingLeft: 8 }}>
                    {course.prereqs.map(prereq =>
                        <p>{prereq}</p>
                    )}
                </div> :
                <div className="noPrereqs" style={{ paddingLeft: 8 }}>
                    <p>Ei esitietoja</p>
                </div>
            }
            <div>
                <p>ilmo</p>
                <p>{courseInfo.ilmoauki}</p>
            </div>
        </div>
    )
}
export default CourseInfo