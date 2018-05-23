import React from 'react'
import Course from './course'

    const mapCss = {
        backgroundColor: 'lightgreen',
        borderRadius: 30,
        borderWidth: 5,
        position: 'absolute'
    }

    const CourseMap = ({perus, aine, syv, mat }) => (
        <div className="mappi" style ={mapCss}>
            {perus === null ? 
            <div className="nullPerus"></div> :
            <div className="perus" style={{float: 'left', padding: 4}}>
                <h2>Perusopinnot</h2>
                {perus.map(course => 
                    <Course key={course.code} course={course}/>                    )}
            </div>
            }
            {aine === null ? 
            <div className="nullAine"></div> :
            <div className="aine" style={{float: 'left', padding: 4}}>
                <h2>Aineopinnot</h2>
                {aine.map(course =>
                    <Course key={course.code} course={course} style={{}}/>   
                )}
            </div>
            }
            {syv === null ? 
            <div className="nullSyv"></div> :
            <div className="syventavat" style={{float: 'left', padding: 4}}>
                <h2>Syventävät opinnot</h2>
                {syv.map(course =>
                    <Course key={course.code} course={course}/>
                )}
            </div>
            }
            {mat === null ? 
            <div className="nullMat"></div> :
            <div className="matematiikka" style={{float: 'left', padding: 4}}>
                <h2>Matematiikan opinnot</h2>
                {mat.map(course =>
                        <Course key={course.code} course={course}/>
                )}
                </div>
            }
        </div> 
    )


export default CourseMap