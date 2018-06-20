import React from 'react'
import Course from './course'
import PeriodButton from './periodButton'
import { periodFilter } from '.././utils/tools.js'
import LegendButton from './legendButton'

const mapCss = {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 5,
    position: 'absolute',
    padding: 8,
}
// Kaikkien kurssien renderointi listaan
class CourseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            p1: false,
            p2: false,
            p3: false,
            p4: false,
            pC: false,
            pS: false,
            year: (new Date()).getFullYear().toString()
        }
    }
    periodCallback = (event) => {
        this.setState({ [event.target.name]: event.target.checked })
    }
    yearCallback = (event) => {
        this.setState({ year: event.target.name })
    }
    render () {
        const basic = this.props.basic
        const inter = this.props.inter
        const adv = this.props.adv
        const math = this.props.math
        const stats = this.props.stats
        let highlightedPrereqs = this.props.highlightedPrereqs
        if (highlightedPrereqs === undefined) {
            highlightedPrereqs = []
        }

        // Maps courses to mappi div
        const listCourses  = (courses) => (
            courses.map(course =>
                <div key={course.code} style={{ display: 'inline-block' }}>
                    {periodFilter({ p1: this.state.p1, p2: this.state.p2, p3: this.state.p3, p4: this.state.p4, pC: this.state.pC, pS: this.state.pS, year: this.state.year }, course.periodyear) ?
                        highlightedPrereqs.includes(course) ? 
                            <Course key={course.code}
                                    course={course}
                                    scale={2}
                                    prereqsHandler={this.props.prereqsHandler}
                                    prereqsOffHandler={this.props.prereqsOffHandler}
                                    prereqHighlighted={true}
                                    />            
                            :
                            <Course key={course.code}
                                    course={course}
                                    scale={2}
                                    prereqsHandler={this.props.prereqsHandler}
                                    prereqsOffHandler={this.props.prereqsOffHandler}
                                    prereqHighlighted={false}/> 

                        :
                        highlightedPrereqs.includes(course) ? 
                            <Course key={course.code}
                                    course={course}
                                    scale={2}
                                    style={{ opacity: '0.3'}}
                                    prereqHighlighted={true}
                                    prereqsHandler={this.props.prereqsHandler}
                                    prereqsOffHandler={this.props.prereqsOffHandler}/>            
                            :
                            <Course key={course.code}
                                    course={course}
                                    scale={2}
                                    style={{ opacity: '0.3'}}
                                    prereqsHandler={this.props.prereqsHandler}
                                    prereqsOffHandler={this.props.prereqsOffHandler}
                                    prereqHighlighted={false}/>
                    }
                </div>
            )
        )
        return (
            <div className="mappi" style={mapCss}>
                <PeriodButton   
                            p1={this.state.p1} p2={this.state.p2} p3={this.state.p3}
                            p4={this.state.p4} pC={this.state.pC} pS={this.state.pS}
                            callback={this.periodCallback}
                            year={this.state.year} yearCallback={this.yearCallback} 
                />
                <LegendButton />
                    <div className="perus" style={{ float: 'left', padding: 8 }}>
                        <h3>Perusopinnot</h3>
                        {listCourses(basic)}
                    </div>
                    <div className="aine" style={{ float: 'left', padding: 8 }}>
                        <h3>Aineopinnot</h3>
                        {listCourses(inter)}
                    </div>
                    <div className="syventavat" style={{ float: 'left', padding: 8 }}>
                        <h3>Syventävät opinnot</h3>
                        {listCourses(adv)}
                    </div>
                    <div className="matematiikka" style={{ float: 'left', padding: 8 }}>
                        <h3>Matematiikan opinnot</h3>
                        {listCourses(math)}
                    </div>
                    <div className="tilastotiede" style={{ float: 'left', padding: 8 }}>
                        <h3>Tilastotieteen opinnot</h3>
                        {listCourses(stats)}
                    </div>
            </div>
        )
    }
}



export default CourseList