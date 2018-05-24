import React from 'react'
import Course from './course'
import './courseMap.css'


    const CourseMap = ({perus, aine, syv, mat }) => {
        
        if (perus === null) {
            return (
                <p>Error</p>
            )
        }
        if (aine === null) {
            return (
                <p>Error</p>
            ) 
        }
        return (
            <div className="wrapper">
{/* perusopinnot */}
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
{/* Aineopinnot */}
                <div className="tira">
                    <Course key={aine[0].code} course={aine[0]} style={{}}/>
                </div> 

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
{/* Syventävät opinnot */}
                <div className="cscol">
                    <Course key={syv[0].code} course={syv[0]} style={{}}/>
                </div>
                <div className="daa">
                    <Course key={syv[1].code} course={syv[1]} style={{}}/>
                </div>
                <div className="dct">
                    <Course key={syv[2].code} course={syv[2]} style={{}}/>
                </div>
                <div className="ra1">
                    <Course key={syv[3].code} course={syv[3]} style={{}}/>
                </div>
                <div className="ra2">
                    <Course key={syv[4].code} course={syv[4]} style={{}}/>
                </div>
                <div className="bisa">
                    <Course key={syv[5].code} course={syv[5]} style={{}}/>
                </div>
                <div className="seea">
                    <Course key={syv[6].code} course={syv[6]} style={{}}/>
                </div>
                <div className="sepa">
                    <Course key={syv[7].code} course={syv[7]} style={{}}/>
                </div>
                <div className="seada">
                    <Course key={syv[8].code} course={syv[8]} style={{}}/>
                </div>
                <div className="disy">
                    <Course key={syv[9].code} course={syv[9]} style={{}}/>
                </div>
                <div className="ness">
                    <Course key={syv[10].code} course={syv[10]} style={{}}/>
                </div>
                <div className="inpr">
                    <Course key={syv[11].code} course={syv[11]} style={{}}/>
                </div>
                <div className="cec">
                    <Course key={syv[12].code} course={syv[12]} style={{}}/>
                </div>
                <div className="son">
                    <Course key={syv[13].code} course={syv[13]} style={{}}/>
                </div>
                <div className="scbmn">
                    <Course key={syv[14].code} course={syv[14]} style={{}}/>
                </div>
                <div className="cin">
                    <Course key={syv[15].code} course={syv[15]} style={{}}/>
                </div>
                <div className="cyse2">
                    <Course key={syv[16].code} course={syv[16]} style={{}}/>
                </div>
                <div className="socs">
                    <Course key={syv[17].code} course={syv[17]} style={{}}/>
                </div>
                <div className="seec">
                    <Course key={syv[18].code} course={syv[18]} style={{}}/>
                </div>
                <div className="sewm">
                    <Course key={syv[19].code} course={syv[19]} style={{}}/>
                </div>
                <div className="scic">
                    <Course key={syv[20].code} course={syv[20]} style={{}}/>
                </div>
                <div className="hoi">
                    <Course key={syv[21].code} course={syv[21]} style={{}}/>
                </div>
                <div className="desis">
                    <Course key={syv[22].code} course={syv[22]} style={{}}/>
                </div>
                <div className="sathci">
                    <Course key={syv[23].code} course={syv[23]} style={{}}/>
                </div>
                <div className="oat">
                    <Course key={syv[24].code} course={syv[24]} style={{}}/>
                </div>
                <div className="mfse">
                    <Course key={syv[25].code} course={syv[25]} style={{}}/>
                </div>
                <div className="oahLabra">
                    <Course key={syv[26].code} course={syv[26]} style={{}}/>
                </div>
                <div className="spm">
                    <Course key={syv[27].code} course={syv[27]} style={{}}/>
                </div>
                <div className="ojr">
                    <Course key={syv[28].code} course={syv[28]} style={{}}/>
                </div>
                <div className="sfex">
                    <Course key={syv[29].code} course={syv[29]} style={{}}/>
                </div>
                <div className="sese">
                    <Course key={syv[30].code} course={syv[30]} style={{}}/>
                </div>
                <div className="ohte">
                    <Course key={syv[31].code} course={syv[31]} style={{}}/>
                </div>
                <div className="ohkipe">
                    <Course key={syv[32].code} course={syv[32]} style={{}}/>
                </div>
                <div className="compilers">
                    <Course key={syv[33].code} course={syv[33]} style={{}}/>
                </div>
                <div className="coge">
                    <Course key={syv[34].code} course={syv[34]} style={{}}/>
                </div>
                <div className="sojt">
                    <Course key={syv[35].code} course={syv[35]} style={{}}/>
                </div>
                <div className="snsad">
                    <Course key={syv[36].code} course={syv[36]} style={{}}/>
                </div>
                <div className="sbdm">
                    <Course key={syv[37].code} course={syv[37]} style={{}}/>
                </div>
                <div className="ids">
                    <Course key={syv[38].code} course={syv[38]} style={{}}/>
                </div>
                <div className="iml">
                    <Course key={syv[39].code} course={syv[39]} style={{}}/>
                </div>
                <div className="adcml">
                    <Course key={syv[40].code} course={syv[40]} style={{}}/>
                </div>
                <div className="ibdm">
                    <Course key={syv[41].code} course={syv[41]} style={{}}/>
                </div>
                <div className="idv">
                    <Course key={syv[42].code} course={syv[42]} style={{}}/>
                </div>
                <div className="sdlnp">
                    <Course key={syv[43].code} course={syv[43]} style={{}}/>
                </div>
                <div className="lmmobi">
                    <Course key={syv[44].code} course={syv[44]} style={{}}/>
                </div>
                <div className="smlmfda">
                    <Course key={syv[45].code} course={syv[45]} style={{}}/>
                </div>
          </div>
    )}


export default CourseMap