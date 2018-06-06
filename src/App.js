import React from 'react'
import './index.css';
import courseService from './services/courses'
import matriceService from './services/matrices'
// import Course from './components/course'
import NaviBar from './components/naviBar'
import CourseList from './components/courseList'
import CourseMap from './components/courseMap'
import CourseMapAdmin from './components/admin/courseMapAdmin'
import CourseUpdate from './components/admin/courseUpdate'
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
import loginService from './services/login'
class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        courses: [],
        matrices: null,
        user: null,
        username: '',
        password: '',
      }    
    }

    componentDidMount() {
        courseService.getAll().then(courses =>
            this.setState({ courses })
        )
        
        matriceService.getAll().then(matrices =>
            this.setState({ matrices })
        )
        const loggedUserJSON = window.localStorage.getItem('loggedAdmin')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            this.setState({ user })
            // blogService.setToken(user.token)
        }
    }

    logout = async (event) => {
        event.preventDefault()
        console.log(window.localStorage.getItem('loggedAdmin'))
        window.localStorage.removeItem('loggedAdmin')
        this.setState({ user: null })
    }
    
    login = async (event) => {
        event.preventDefault()
        try {
          const user = await loginService.login({
            username: this.state.username,
            password: this.state.password
          })
    
          window.localStorage.setItem('loggedAdmin', JSON.stringify(user))
          this.setState({ username: '', password: '', user })
        } catch (exception) {
          window.alert("Invalid username or password")
        }
    }

    handleLoginFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    modifyMatriceHandler = (event) => {
        event.preventDefault()
        console.log(event.target.xCoord.value)
        if (event.target.xCoord.value !== '' || event.target.yCoord.value !== '') {
            const newMatrice = addNewCourse(event.target.id, // course code of the new course
                                            this.state.matrices.matrice, // old matrice
                                            event.target.xCoord.value, // x Coordinate value
                                            event.target.yCoord.value,) // y coordinate value
            if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                                    id: 0,
                                    name: 'Default',
                                    matrice: newMatrice
                                }
                            
            
            matriceService.postNewMatrice(newMatriceJson).then(msg =>
                this.componentDidMount()
            )
            window.alert('Kurssi lisätty kartalle')

        } else {
            window.alert(newMatrice.error)
        }
    } else {
        window.alert('Enter coordinates!')
    }

        // this.setState({matrices: newMatrices})
        // console.log(newMatrice)
    }

    render () {
        const perus = perusopinnot(this.state.courses) // Using functions from /utils/tools.js
        const aine = aineopinnot(this.state.courses)
        const syv = syventavat(this.state.courses)       
        const mat = matematiikka(this.state.courses) 
        console.log(this.state.user)
        return (
        <div className="container" style={{position:'relative'}}>
            <Router>
                <div>
                    <NaviBar/>
                    {this.state.courses.length === 0  || this.state.matrices === null ?
                        <div style={{position:'absolute', left:'45%'}}>
                            <h1> Loading... </h1>
                            <div className="loader"></div>
                        </div> :
                        
                        <div>
                            <Route path="/kartta" render={() =>
                                <CourseMap perus={perus} aine={aine} syv={syv} mat={mat} courseMapMatrice={this.state.matrices.matrice}/>}
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
                                    unmappedCourses={<UnmappedCourses handleSubmit={this.modifyMatriceHandler} courses={this.state.courses} matrice={this.state.matrices.matrice}/>}
                                    courseMapAdmin={<CourseMapAdmin perus={perus} aine={aine} syv={syv} mat={mat} matrice={this.state.matrices.matrice}/>}
                                    courseUpdate={<CourseUpdate/>}
                                    />}
                            />
                            
                            <Route exact path="/" render={() =>
                                <CourseList perus={perus} aine={aine} syv={syv} mat={mat}/>}
                            />
                            
                            <Route exact path="/login" render={() =>
                                <LoginForm 
                                        username={this.state.username}
                                        password={this.state.password}
                                        handleChange={this.handleLoginFieldChange}
                                        handleSubmit={this.login}/>}
                            />
                        </div>
                    }
                </div>
            </Router>

        </div>
        )
    }
}

export default App;
