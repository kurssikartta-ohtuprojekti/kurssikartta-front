import React from 'react'
import Course from './course'
import PeriodButton from './periodButton'
import './courseMap.css'
import './matriceSelect.css'
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
        if (scale < 0.8) {
            this.setState({x, y, scale: 0.8})
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
        this.setState({x, y})
    }

    ifOutsideOnPanEnd(x, y) {
        if (x > 0) {
            this.setState({x: 0})
        }
        if (y > 0) {
            this.setState({y: 0})
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

        // Makes sure unmapped courses aren't rendered in the map
        const perus = removeUnmappedCourses(courseMapMatrice, this.props.perus)
        const aine = removeUnmappedCourses(courseMapMatrice, this.props.aine)
        const syv = removeUnmappedCourses(courseMapMatrice, this.props.syv)
        const mat = removeUnmappedCourses(courseMapMatrice, this.props.mat)
        
        const {x, y, scale} = this.state;

        // Turn the course matrice into the css property grid-template-areas
        const cssGridTemplateAreas = cssGridStringify(sideLength, courseMapMatrice)
        return (
            <div>
                <div style={{position: 'relative'}}>
                    <PeriodButton   
                            p1={this.state.p1} p2={this.state.p2} p3={this.state.p3}
                            p4={this.state.p4} pC={this.state.pC} pS={this.state.pS}
                            callback={this.periodCallback}
                            year={this.state.year} yearCallback={this.yearCallback} 
                    />
                    {this.props.matrices === undefined ?
                        <div /> :
                        <div className="matriceSelect">
                            <MatriceSelect  
                                    selected={this.props.selectedMatrice}
                                    matrices={this.props.matrices}
                                    matriceCallback={this.props.matriceCallback}
                            />
                        </div>
                    }  

                <LegendButton />

                </div>
                
                <InteractiveDiv 
                    className="interactive"
                    x={x}
                    y={y}
                    scale={scale}
                    scaleFactor={Math.sqrt(1.15)}
                    minScale={0.8}
                    maxScale={2.5}
                    onPanAndZoom={(x, y, scale) => this.handlePanAndZoom(x, y, scale)}
                    onPanMove={(x, y) => this.handlePanMove(x, y)}
                    onPanEnd={(x, y) => this.ifOutsideOnPanEnd(x, y)}
                >
                    <div className="wrapper"
                        style={{gridTemplateAreas: cssGridTemplateAreas,
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