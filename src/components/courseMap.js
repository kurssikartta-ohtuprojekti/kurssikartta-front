import React from 'react'
import Course from './course'
import './courseMap.css'

    const CourseMap = ({perus, aine, syv }) => {
  
        return (
            <div className="wrapper">
                <div className="jtkt">
                    <Course key={perus[0].code} course={perus[0]} style={{}}/>
                </div>

                <div className="ohpe">
                    <Course key={perus[1].code} course={perus[1]} style={{}}/>
                </div>

                <div className="ohja">
                    <Course key={perus[2].code} course={perus[2]} style={{}}/>
                </div>

                <div className="tikape">
                    <Course key={perus[3].code} course={perus[3]} style={{}}/>  
                </div>

                <div className="tito">
                    <Course key={perus[4].code} course={perus[4]} style={{}}/>
                </div>

                <div className="tira">
                    <Course key={aine[0].code} course={aine[0]} style={{}}/>
                </div> 

                {/* <div className="tiraLabra">
                    <Course key={aine[0].code} course={aine[0]} style={{}}/>
                </div>  */}

                <div className="otm">
                    <Course key={aine[1].code} course={aine[1]} style={{}}/>
                </div>

                <div className="kaja">
                    <Course key={aine[2].code} course={aine[2]} style={{}}/>
                </div>

                <div className="tilpe">
                    <Course key={aine[3].code} course={aine[3]} style={{}}/>
                </div>

                <div className="lama">
                    <Course key={aine[4].code} course={aine[4]} style={{}}/>
                </div>

                <div className="ohtu">
                    <Course key={aine[5].code} course={aine[5]} style={{}}/>
                </div>

                <div className="ohtupr">
                    <Course key={aine[6].code} course={aine[6]} style={{}}/>
                </div>

          </div>
          
    )}


export default CourseMap