import React from 'react'
import './index.css';
import courseService from './services/courses'
import matriceService from './services/matrices'
// import Course from './components/course'
import NaviBar from './components/naviBar'
import CourseList from './components/courseList'
import CourseMap from './components/courseMap'
import CourseMapAdmin from './components/admin/courseMapAdmin'
import {BrowserRouter as Router,
        Route} from 'react-router-dom'
import {perusopinnot,
        aineopinnot,
        syventavat,
        matematiikka, 
         } from './utils/tools'
import LoginForm from './components/LoginForm/LoginForm.js'
import AdminPage from './components/admin/adminPage'
import UnmappedCourses from './components/admin/unmappedCourses';
import {addNewCourse} from './utils/courseMatrices'
class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        courses: [1],
        matrices: [1],
      }    
    }

    componentDidMount() {
        courseService.getAll().then(courses =>
            this.setState({ courses })
        )
        
        matriceService.getAll().then(matrices =>
            this.setState({ matrices })
        )
        
    }

    modifyMatriceHandler = (event) => {
        event.preventDefault()
        const newMatrice = addNewCourse(event.target.id, // course code of the new course
                                        this.state.matrices[0].matrice, // matrice
                                        event.target.yCoord.value, // y coordinate value 
                                        event.target.xCoord.value) // x coordinate value
        
        const newMatriceJson = {  
                                id: 0,
                                name: 'Default',
                                matrice: newMatrice
                            }
                        
          
        matriceService.postNewMatrice(newMatriceJson).then(msg =>
            this.componentDidMount()
        )
        // this.setState({matrices: newMatrices})
        // console.log(newMatrice)
    }

    render () {
        const perus = perusopinnot(this.state.courses) // Using functions from /utils/tools.js
        const aine = aineopinnot(this.state.courses)
        const syv = syventavat(this.state.courses)       
        const mat = matematiikka(this.state.courses) 
        console.log(this.state.matrices)
        // console.log(this.state.courses)
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
                                <CourseMap perus={perus} aine={aine} syv={syv} mat={mat} courseMapMatrice={this.state.matrices[0].matrice}/>}
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
                            <AdminPage 
                                    unmappedCourses={<UnmappedCourses handleSubmit={this.modifyMatriceHandler} courses={this.state.courses} matrice={this.state.matrices[0].matrice}/>}
                                    courseMapAdmin={<CourseMapAdmin perus={perus} aine={aine} syv={syv} mat={mat} matrice={this.state.matrices[0].matrice}/>}
                                    />}
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
