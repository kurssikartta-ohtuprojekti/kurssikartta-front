import React from 'react'
import Course from './course'
import './courseMap.css'

    const outerDiv = {
        padding: '30px',
        width: '1600px',
        backgroundColor: '#f3f3f3'
    }
    const perusDiv = {
        // position: 'relative',
        padding: 8,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        maxWidth: '450px',
        borderRadius: '5px',
        backgroundColor: 'antiquewhite'
    }

    const aineDiv = {
        // position: 'relative',
        padding: 8,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        minWidth: '700px',
        maxWidth: '1000px',
        borderRadius: '5px',
        backgroundColor: 'lightblue'
    }
    const syvDiv = {
        // position: 'relative',
        padding: 8,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        minWidth: '1200px',
        maxWidth: '1600px',
        borderRadius: '5px',
        backgroundColor: 'yellow'
    }
    
    const CourseMap = ({perus, aine, syv }) => {
        const perusContainer = () => (
            <div className="perus">
                {{perus} === null ? 
                    <div className="nullPerus"></div> :
                    <div className="container" style={perusDiv}>
                        <h2>Perusopinnot</h2>
                        {perus.map(course => 
                            <Course key={course.code} course={course} style={{float: 'left'}}/> 
                        )}
                    </div>
                }
            </div>
        )
    
    const aineContainer = () => (
        <div className="aine">
            {aine === null ? 
                <div className="nullAine"></div> :
                <div className="container" style={aineDiv}>

                    <h2>Aineopinnot</h2>
                        {perusContainer()}

                    {aine.map(course =>
                    <Course key={course.code} course={course} style={{float: 'left'}}/>   
                    )}
                </div>
                }
        </div>
    )
    const syventavaContainer = () => (
        <div className="syv">
            {syv === null ? 
                <div className="nullSyv"></div> :
                <div className="container" style={syvDiv}>
                    <h2>Syventävät opinnot</h2>
                    {aineContainer()}

                    {syv.map(course =>
                        <Course key={course.code} course={course} style={{float: 'left'}}/>
                    )}
                </div>
            }
        </div>
    )
        return (
        <div className="mappi" style ={outerDiv}>
            {/* {console.log(syv.length)}
            {console.log(aine.length)}
            {console.log(perus.length)} */}

            {syventavaContainer()}
            
        </div> 
    )}


export default CourseMap