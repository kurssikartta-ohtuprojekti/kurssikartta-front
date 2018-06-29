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
 
/* Should be replaced with a better library,
preferably one that enables touch screens */
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
        // console.log(scale, 'scale')
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
        // console.log(x)
        // console.log(y)
        // console.log(this.state.scale, 'scale')

        this.setState({x,y})
        // return (x, y)
    }

    ifOutsideOnPanEnd(x, y) {
        
        if (x > 0) {
            this.setState({x: 0})
        }
        if (y > 0) {
            this.setState({y: 0})
        }

        /*
        (bad temp solution for further zoom)
        If scale less than one, limit the movement on other ends of the map.
        this should be replaced with function that works nicely for all scales
        */
        if (this.state.scale < 1) {
            if (x < -0.46) {
                this.setState({x: -0.45})
            } if (y < -0.222) {
                this.setState({y: -0.21})
            }
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

        // Maps courses to be rendered in wrapper div
        const mapCourses = (courses) => (
            courses.map(course =>
                <div key={course.code}
                    style={{ gridArea: course.code, width: `${scale * 37.5}px`, height: `${scale* 15}px`}}> 
                        <Course key={course.code}
                                course={course}
                                user={this.props.user}
                                userCompletedCourseHandler={this.props.userCompletedCourseHandler}
                                adminFuncts={false}
                                scale={this.state.scale}
                                prereqsHandler={this.props.prereqsHandler}
                                prereqsOffHandler={this.props.prereqsOffHandler}                                    
                                prereqHighlighted={highlightedPrereqs.includes(course)} 
                                periodFiltered={periodFilter({ p1: this.state.p1, p2: this.state.p2, p3: this.state.p3, p4: this.state.p4, pC: this.state.pC, pS: this.state.pS, year: this.state.year }, course.periodyear)}
                            />
    
                    
                </div>
        )
    )
        return (
            <div>
                <div style={{position: 'relative', height: 0}}>
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
                {/* Should be replaced with a better technology,
                preferably one that enables touch screens */}
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

                            {/* Maps all courses to wrapper */}
                            {[basic, inter, adv, math, stats].map(courses =>
                                (courses ? mapCourses(courses) : <div/>)
                            )}
                        
                    </div>
                </InteractiveDiv>
            </div>
        )
    }
}

export default CourseMap