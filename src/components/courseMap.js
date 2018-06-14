import React from 'react'
import Course from './course'
import PeriodButton from './periodButton'
import './courseMap.css'
import LegendButton from './legendButton'
import MatriceSelect from './matriceSelect'

import {
    cssGridStringify,
    removeUnmappedCourses
} from '.././utils/courseMatrices.js'
import './matriceSelect.css'

import { periodFilter } from '.././utils/tools.js'
import panAndZoomHoc from 'react-pan-and-zoom-hoc';
 
const InteractiveDiv = panAndZoomHoc('div');

//  Kartalla näkyväksi asetettujen kurssien renderointi kartalle
class CourseMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // panAndZoom values
            x: 0,
            y: 0,
            scale: 2,

            //checkbox values
            p1: false,
            p2: false,
            p3: false,
            p4: false,
            pC: false,
            pS: false,
            year: (new Date()).getFullYear().toString()
        }
    }
    // Handler for zoom
    handlePanAndZoom(x, y, scale) {
        if (scale < 0.9) {
            this.setState({x, y, scale: 0.9})
        }
        else if (scale > 2.5) {
            this.setState({x, y, scale: 2.5})
        } 
        else {
            this.setState({x, y, scale});
        }
    }
 
    // Handler for maps drag movement
    handlePanMove(x, y) {
        console.log(x)
        console.log(y)
        if (x > 0) {
            this.setState({x: 0})
        } 
        if (y > 0) {
            this.setState({y: 0})
        }
        else {
            this.setState({x, y})
        }
    }
    periodCallback = (event) => {
        this.setState({ [event.target.name]: event.target.checked })
    }

    yearCallback = (event) => {
        this.setState({ year: event.target.name })
    }

    render() {
    
        let courseMapMatrice = []
        if (this.props.courseMapMatrice === undefined) {
            courseMapMatrice = []
        } else {
            courseMapMatrice = this.props.courseMapMatrice
        }
        let sideLength = 0
        if (this.props.sideLength === undefined) {
            sideLength = courseMapMatrice.length
        }
        const wrapperWidth = 37.5 * 50
        const wrapperHeight = 15 * 50

        const perus = removeUnmappedCourses(courseMapMatrice, this.props.perus)
        const aine = removeUnmappedCourses(courseMapMatrice, this.props.aine)
        const syv = removeUnmappedCourses(courseMapMatrice, this.props.syv)
        const mat = removeUnmappedCourses(courseMapMatrice, this.props.mat)
        const {x, y, scale} = this.state;

        console.log(this.state.x)
        console.log(this.state.y)
        const cssGridTemplateAreas = cssGridStringify(sideLength, courseMapMatrice)
        return (
            <div>
                <div>
                    <PeriodButton p1={this.state.p1} p2={this.state.p2} p3={this.state.p3}
                        p4={this.state.p4} pC={this.state.pC} pS={this.state.pS} callback={this.periodCallback}
                        year={this.state.year} yearCallback={this.yearCallback} />
                    {this.props.matrices === undefined ?
                        <div /> :
                        <div style={{position: 'absolute', top: '75px', right: '115px', zIndex: 98}}>
                            <MatriceSelect selected={this.props.selectedMatrice} matrices={this.props.matrices} matriceCallback={this.props.matriceCallback} />
                        </div>
                    }  
                </div>

                <InteractiveDiv 
                    x={x}
                    y={y}
                    scale={scale}
                    scaleFactor={Math.sqrt(1.3)}
                    minScale={0.9}
                    maxScale={2.5}
                    onPanAndZoom={(x, y, scale) => this.handlePanAndZoom(x, y, scale)}
                    style={{overflow: 'hidden', height: '88vh',  border: '3px solid #a6a6a6', borderRadius: '5px', position: 'relative'}}
                    onPanMove={(x, y) => this.handlePanMove(x, y)}
                >
                    <div className="wrapper"
                        style={{   gridTemplateAreas: cssGridTemplateAreas,
                                    gridAutoRows: `${scale * 15}px`,
                                    gridAutoColumns: `${scale * 37.5}px`,
                                    gridTemplateRows: `${scale * 15}px`,
                                    gridTemplateColumns: `${scale * 37.5}px`,
                                    position: 'absolute',
                                    top: `${y * 100}%`, 
                                    left: `${x * 100}%`,
                                    width :`${scale * wrapperWidth}px`,
                                    height :`${scale * wrapperHeight}px`}}>
                        {/* perusopinnot */}

                        {perus === null || perus === undefined ?
                            <div></div> :
                            perus.map(course =>
                                <div key={course.code}
                                    style={{ gridArea: course.code, width: `${scale * 37.5}px`, height: `${scale* 15}px`}}>
                                    {periodFilter({ p1: this.state.p1, p2: this.state.p2, p3: this.state.p3, p4: this.state.p4, pC: this.state.pC, pS: this.state.pS, year: this.state.year }, course.periodyear) ?
                                        <Course key={course.code} course={course} scale={this.state.scale}/> :
                                        <Course key={course.code} course={course} scale={this.state.scale} style={{ opacity: '0.3' }} />
                                    }
                                </div>
                            )
                        }
                        {/* Aineopinnot */}
                        {aine === null || aine === undefined ?
                            <div></div> :
                            aine.map(course =>
                                <div key={course.code} style={{ gridArea: course.code, width: `${scale * 37.5}px`, height: `${scale* 15}px` }}>
                                    {periodFilter({ p1: this.state.p1, p2: this.state.p2, p3: this.state.p3, p4: this.state.p4, pC: this.state.pC, pS: this.state.pS, year: this.state.year }, course.periodyear) ?
                                        <Course key={course.code} course={course} scale={this.state.scale}/> :
                                        <Course key={course.code} course={course} scale={this.state.scale} style={{ opacity: '0.3' }} />
                                    }
                                </div>
                            )
                        }
                        {/* Syventävät opinnot */}
                        {syv === null || syv === undefined ?
                            <div></div> :
                            syv.map(course =>
                                <div key={course.code} style={{ gridArea: course.code, width: `${scale * 37.5}px`, height: `${scale* 15}px` }}>
                                    {periodFilter({ p1: this.state.p1, p2: this.state.p2, p3: this.state.p3, p4: this.state.p4, pC: this.state.pC, pS: this.state.pS, year: this.state.year }, course.periodyear) ?
                                        <Course key={course.code} course={course} scale={this.state.scale}/> :
                                        <Course key={course.code} course={course} scale={this.state.scale} style={{ opacity: '0.3' }} />
                                    }
                                </div>
                            )
                        }

                        {/* Muut opinnot */}
                        {mat === null || mat === undefined ?
                            <div></div> :
                            mat.map(course =>
                                <div key={course.code} style={{ gridArea: course.code, width: `${scale * 37.5}px`, height: `${scale* 15}px` }}>
                                    {periodFilter({ p1: this.state.p1, p2: this.state.p2, p3: this.state.p3, p4: this.state.p4, pC: this.state.pC, pS: this.state.pS, year: this.state.year }, course.periodyear) ?
                                        <Course key={course.code} course={course} scale={this.state.scale}/> :
                                        <Course key={course.code} course={course} scale={this.state.scale} style={{ opacity: '0.3' }} />
                                    }
                                </div>
                            )
                        }

                    </div>
                </InteractiveDiv>
            </div>
        )
    }
}

export default CourseMap