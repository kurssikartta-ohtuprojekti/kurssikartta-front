import React from 'react'
import './index.css';
import courseService from './services/courses'
// import Course from './components/course'
import NaviBar from './components/naviBar'
import CourseList from './components/courseList'
import CourseMap from './components/courseMap'
import CourseMapAdmin from './components/admin/courseMapAdmin'
import {BrowserRouter as Router,
    Route} from 'react-router-dom'
import { perusopinnot, aineopinnot, syventavat, matematiikka } from './utils/tools'
import LoginForm from './components/LoginForm/LoginForm.js'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        courses: [],
      }    
    }

    componentDidMount() {
        courseService.getAll().then(courses =>
            this.setState({ courses })
        )
    }

    render () {
        const perus = perusopinnot(this.state.courses) // Using functions from /utils/tools.js
        const aine = aineopinnot(this.state.courses)
        const syv = syventavat(this.state.courses)       
        const mat = matematiikka(this.state.courses) 
       
        return (
        <div className="container" style={{position:'relative'}}>
            <Router>
                <div>
                    <NaviBar/>
                    {this.state.courses.length === 0 ?
                        <div style={{position:'absolute', left:'45%'}}>
                            <h1> Loading... </h1>
                            <div className="loader"></div>
                        </div> :
                        <div>
                            <Route path="/kartta" render={() =>
                                <CourseMap perus={perus} aine={aine} syv={syv} mat={null}/>}
                            />
                            <Route path="/perus" render={() =>
                                <CourseMap perus={perus} aine={null} syv={null} mat={null}/>}
                            />
                            <Route path="/kandi" render={() =>
                                <CourseMap perus={perus} aine={aine} syv={null} mat={null}/>}
                            />
                            <Route path="/mat" render={() =>
                                <CourseMap perus={null} aine={null} syv={null} mat={mat}/>}
                            />
                            <Route path="/admin/map" render ={() =>
                                <CourseMapAdmin perus= {perus} aine={aine} syv={syv} mat={null} />}
                            />
                            <Route exact path="/" render={() =>
                                <CourseList perus={perus} aine={aine} syv={syv} mat={mat}/>}
                            />
                            
                            <Route exact path="/login" component={LoginForm}/>
                        </div>
                    }
                </div>
            </Router>

        </div>
        )
    }
}

export default App;
