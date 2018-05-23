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

                <div className="jtka">
                    <Course key={aine[7].code} course={aine[7]} style={{}}/>
                </div>

                <div className="ttpe">
                    <Course key={aine[8].code} course={aine[8]} style={{}}/>
                </div>

                <div className="tiraLabra">
                    <Course key={aine[9].code} course={aine[9]} style={{}}/>
                </div>

                <div className="tikapeLabra">
                    <Course key={aine[10].code} course={aine[10]} style={{}}/>
                </div>

                <div className="tilpeLabra">
                    <Course key={aine[11].code} course={aine[11]} style={{}}/>
                </div>

                <div className="tisu">
                    <Course key={aine[12].code} course={aine[12]} style={{}}/>
                </div>

                <div className="igp">
                    <Course key={aine[13].code} course={aine[13]} style={{}}/>
                </div>

                <div className="ruby">
                    <Course key={aine[14].code} course={aine[14]} style={{}}/>
                </div>

                <div className="tito2">
                    <Course key={aine[15].code} course={aine[15]} style={{}}/>
                </div>

                <div className="otjs">
                    <Course key={aine[16].code} course={aine[16]} style={{}}/>
                </div>

                <div className="wepa">
                    <Course key={aine[17].code} course={aine[17]} style={{}}/>
                </div>

                <div className="c">
                    <Course key={aine[18].code} course={aine[18]} style={{}}/>
                </div>

                <div className="fssk">
                    <Course key={aine[19].code} course={aine[19]} style={{}}/>
                </div>

                <div className="fsskLabra">
                    <Course key={aine[20].code} course={aine[20]} style={{}}/>
                </div>

                <div className="alon">
                    <Course key={aine[21].code} course={aine[21]} style={{}}/>
                </div>

                <div className="roha">
                    <Course key={aine[22].code} course={aine[22]} style={{}}/>
                </div>

                <div className="ifp">
                    <Course key={aine[23].code} course={aine[23]} style={{}}/>
                </div>

                <div className="vh">
                    <Course key={aine[24].code} course={aine[24]} style={{}}/>
                </div>

                <div className="rubyLabra">
                    <Course key={aine[25].code} course={aine[25]} style={{}}/>
                </div>

                <div className="kilpa">
                    <Course key={aine[26].code} course={aine[26]} style={{}}/>
                </div>

                <div className="eai">
                    <Course key={aine[27].code} course={aine[27]} style={{}}/>
                </div>

                <div className="ilc">
                    <Course key={aine[28].code} course={aine[28]} style={{}}/>
                </div>

                <div className="ssh">
                    <Course key={aine[29].code} course={aine[29]} style={{}}/>
                </div>


          </div>
    )}


export default CourseMap