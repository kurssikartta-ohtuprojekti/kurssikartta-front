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
    // Handler for mouse scroll zoom
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
        // return (x, y)
    }

    ifOutsideOnPanEnd(x, y) {
        if (x > 0) {
            this.setState({x: 0})
        }
        if (y > 0) {
            this.setState({y: 0})
        }
    }
    // Handler for period filter checkboxes
    periodCallback = (event) => {
        this.setState({ [event.target.name]: event.target.checked })
    }
    // Handler for period filter years
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
        let highlightedPrereqs = this.props.highlightedPrereqs
        if (highlightedPrereqs === undefined) {
            highlightedPrereqs = []
        }

        const wrapperWidth = 37.5 * 50
        const wrapperHeight = 15 * 50

        // Makes sure unmapped courses aren't rendered in the map
        const basic = removeUnmappedCourses(courseMapMatrice, this.props.basic)
        const inter = removeUnmappedCourses(courseMapMatrice, this.props.inter)
        const adv = removeUnmappedCourses(courseMapMatrice, this.props.adv)
        const math = removeUnmappedCourses(courseMapMatrice, this.props.math)
        const stats = removeUnmappedCourses(courseMapMatrice, this.props.stats)
        const {x, y, scale} = this.state;

        // Turn the course matrice into the css property grid-template-areas
        const cssGridTemplateAreas = cssGridStringify(sideLength, courseMapMatrice)

        // Maps courses to wrapper div
        const mapCourses = (courses) => (
            courses.map(course =>
                <div key={course.code}
                    style={{ gridArea: course.code, width: `${scale * 37.5}px`, height: `${scale* 15}px`}}>
                    {periodFilter({ p1: this.state.p1, p2: this.state.p2, p3: this.state.p3, p4: this.state.p4, pC: this.state.pC, pS: this.state.pS, year: this.state.year }, course.periodyear) ?
                        // If course is to be filtered by periods
                        highlightedPrereqs.includes(course) ? 
                            // If course is to be highlihted as prerequirement
                            <Course key={course.code}
                                    course={course}
                                    scale={this.state.scale}
                                    prereqsHandler={this.props.prereqsHandler}
                                    prereqsOffHandler={this.props.prereqsOffHandler}
                                    prereqHighlighted={true}/> 
                                                
                            :
                            <Course key={course.code}
                                    course={course}
                                    scale={this.state.scale}
                                    prereqsHandler={this.props.prereqsHandler}
                                    prereqsOffHandler={this.props.prereqsOffHandler}
                                    prereqHighlighted={false}/>
                                    
                        :
                        highlightedPrereqs.includes(course) ?
                            // If course is to be highlihted as prerequirement
                            <Course key={course.code}
                                    course={course}
                                    scale={this.state.scale}
                                    style={{ opacity: '0.3'}}
                                    prereqHighlighted={true}
                                    prereqsHandler={this.props.prereqsHandler}
                                    prereqsOffHandler={this.props.prereqsOffHandler}/>            
                            :
                            <Course key={course.code}
                                    course={course}
                                    scale={this.state.scale}
                                    style={{ opacity: '0.3'}}
                                    prereqsHandler={this.props.prereqsHandler}
                                    prereqsOffHandler={this.props.prereqsOffHandler}
                                    prereqHighlighted={false}/>
                    }
                </div>
        )
    )
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
                {/* Enables Panning and zooming */}
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
                {/* Wrapper for the map */}
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
                        {basic === null || basic === undefined ?
                            <div></div> :
                            mapCourses(basic)
                        }
                        {/* Aineopinnot */}
                        {inter === null || inter === undefined ?
                            <div></div> :
                            mapCourses(inter)
                        }
                        {/* Syventävät opinnot */}
                        {adv === null || adv === undefined ?
                            <div></div> :
                            mapCourses(adv)
                        }

                        {/* Matematiikan opinnot */}
                        {math === null || math === undefined ?
                            <div></div> :
                            mapCourses(math)
                        }
                        {/* Tilastotieteen opinnot */}
                        {stats === null || stats === undefined ?
                            <div></div> :
                            mapCourses(stats)
                        }

                    </div>
                </InteractiveDiv>
            </div>
        )
    }
}

export default CourseMap