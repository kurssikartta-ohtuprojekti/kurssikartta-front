import React from 'react'
import Course from './course'

    const mapCss = {
        backgroundColor: 'lightgreen',
        borderRadius: 30,
        borderWidth: 5,
        position: 'absolute'
    }

    const outerDiv = {
        padding: '30px',
        backgroundColor: '#f3f3f3'
    }
    const innerDiv = {
        margin: 'auto',
        width: '100px',
        height: '100px',
        backgroundColor: '#ccc',
        borderRadius: '3px'
    }
    const CourseMap = ({perus, aine, syv }) => (
        <div className="mappi" style ={mapCss}>
            {syv === null ? 
            <div className="nullSyv"></div> :
            <div className="syventavat" style={outerDiv}>
                <h2>Syventävät opinnot</h2>
                {syv.map(course =>
                    <Course key={course.code} course={course}/>
                )}
            </div>
            }
            {aine === null ? 
            <div className="nullAine"></div> :
            <div className="aine" style={innerDiv}>
                <h2>Aineopinnot</h2>
                {aine.map(course =>
                    <Course key={course.code} course={course} style={{}}/>   
                )}
            </div>
            }
            {perus === null ? 
            <div className="nullPerus"></div> :
            <div className="perus" style={innerDiv}>
                <h2>Perusopinnot</h2>
                {perus.map(course => 
                    <Course key={course.code} course={course}/>                    )}
            </div>
            }
        </div> 
    )


export default CourseMap