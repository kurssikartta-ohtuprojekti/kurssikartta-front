import React from 'react'
import './index.css';
import courseService from './services/courses'
import matriceService from './services/matrices'
import NaviBar from './components/naviBar'
import CourseList from './components/courseList'
import CourseMap from './components/courseMap'
import {BrowserRouter as Router,
        Route} from 'react-router-dom'
import {perusopinnot,
        aineopinnot,
        syventavat,
        matematiikka, 
         } from './utils/tools'
import AdminPage from './components/admin/adminPage'
import {addNewCourse,
        removeCourse,
        moveCourseToNewCoordinates,
        moveCourseEast,
        moveCourseWest,
        moveCourseSouth,
        moveCourseNorth,
        moveCourseNorthEast,
        moveCourseNorthWest,
        moveCourseSouthEast,
        moveCourseSouthWest,} from './utils/courseMatrices'
import loginService from './services/login'
import LoginForm from './components/LoginForm/LoginForm';
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
            matriceService.setToken(user.token)
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
        this.componentDidMount()
    }

    handleLoginFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    addNewCourseMatriceHandler = (event) => {
        event.preventDefault()
        // console.log(event.target.xCoord.value)
        if (event.target.xCoord.value !== '' || event.target.yCoord.value !== '') {
            const newMatrice = addNewCourse(event.target.id, // course code of the new course
                                            this.state.matrices[0].matrice, // old matrice
                                            event.target.xCoord.value, // x Coordinate value
                                            event.target.yCoord.value,) // y coordinate value
            if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                                    id: 0,
                                    name: 'Default',
                                    matrice: newMatrice
                                }
                            
            
            try {
                matriceService.postNewMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                ) 
            } catch (exception){
                window.alert(exception)
            }

            } else {
                window.alert(newMatrice.error)
            }
        } else {
            window.alert('Enter coordinates!')
        }
    }
    moveCourseToNewCoordsMatriceHandler = (code, matrice, y, x) => {
        // console.log(event.target.xCoord.value)
        if (x !== '' || y!== '') {
            const newMatrice = moveCourseToNewCoordinates(
                                                            code, // course code of the new course
                                                            matrice, // old matrice
                                                            y, // y Coordinate value
                                                            x) // x coordinate value
            if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                                    id: 0,
                                    name: 'Default',
                                    matrice: newMatrice
                                }
                            
            
            try {
                matriceService.postNewMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                ) 
            } catch (exception){
                window.alert(exception)
            }

            } else {
                window.alert(newMatrice.error)
            }
        } else {
            window.alert('Enter coordinates!')
        }
    }

    deleteCourseHandler = (event) => {
        event.preventDefault()
        console.log(event.target.id)
        console.log(this.state.matrices)
        const newMatrice = removeCourse(event.target.id, this.state.matrices[0].matrice)
        if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                id: 0,
                name: 'Default',
                matrice: newMatrice
            }
            try {
                matriceService.postNewMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                ) 
            } catch (exception){
                window.alert(exception)
            }

        } else {
            window.alert(newMatrice.error)
        }
    }

    moveWestHandler = (code, matrice) => {
        const newMatrice = moveCourseWest(code, matrice)
        if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                id: 0,
                name: 'Default',
                matrice: newMatrice
            }
            try {
                matriceService.postNewMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                ) 
            } catch (exception){
                window.alert(exception)
            }
            // window.alert('Kurssia liikutettu')

        } else {
            window.alert(newMatrice.error)
        }    
    } 
    moveEastHandler = (code, matrice) => {
        const newMatrice = moveCourseEast(code, matrice)
        if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                id: 0,
                name: 'Default',
                matrice: newMatrice
            }
            try {
                matriceService.postNewMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                ) 
            } catch (exception){
                window.alert(exception)
            }
            // window.alert('Kurssia liikutettu')

        } else {
            window.alert(newMatrice.error)
        }    
    } 
    moveNorthHandler = (code, matrice) => {
        const newMatrice = moveCourseNorth(code, matrice)
        if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                id: 0,
                name: 'Default',
                matrice: newMatrice
            }
            try {
                matriceService.postNewMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                ) 
            } catch (exception){
                window.alert(exception)
            }
            // window.alert('Kurssia liikutettu')

        } else {
            window.alert(newMatrice.error)
        }    
    } 
    moveSouthHandler = (code, matrice) => {
        const newMatrice = moveCourseSouth(code, matrice)
        if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                id: 0,
                name: 'Default',
                matrice: newMatrice
            }
            try {
                matriceService.postNewMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                ) 
            } catch (exception){
                window.alert(exception)
            }
            // window.alert('Kurssia liikutettu')

        } else {
            window.alert(newMatrice.error)
        }    
    } 
    moveNorthWestHandler = (code, matrice) => {
        const newMatrice = moveCourseNorthWest(code, matrice)
        if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                id: 0,
                name: 'Default',
                matrice: newMatrice
            }
            try {
                matriceService.postNewMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                )
            } catch (exception){
                window.alert(exception)
            }
            // window.alert('Kurssia liikutettu')

        } else {
            window.alert(newMatrice.error)
        }    
    } 
    moveNorthEastHandler = (code, matrice) => {
        const newMatrice = moveCourseNorthEast(code, matrice)
        if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                id: 0,
                name: 'Default',
                matrice: newMatrice
            }
            try {
                matriceService.postNewMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                    
                ) 
            } catch (exception){
                window.alert(exception)
            }
            // window.alert('Kurssia liikutettu')

        } else {
            window.alert(newMatrice.error)
        }    
    } 
    moveSouthWestHandler = (code, matrice) => {
        const newMatrice = moveCourseSouthWest(code, matrice)
        if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                id: 0,
                name: 'Default',
                matrice: newMatrice
            }
            matriceService.postNewMatrice(newMatriceJson).then(msg =>
                this.componentDidMount()
            )
            // window.alert('Kurssia liikutettu')

        } else {
            window.alert(newMatrice.error)
        }    
    } 
    moveSouthEastHandler = (code, matrice) => {
        const newMatrice = moveCourseSouthEast(code, matrice)
        if (newMatrice.error === undefined) {
            const newMatriceJson = {  
                id: 0,
                name: 'Default',
                matrice: newMatrice
            }
            matriceService.postNewMatrice(newMatriceJson).then(msg =>
                this.componentDidMount()
            )
            // window.alert('Kurssia liikutettu')

        } else {
            window.alert(newMatrice.error)
        }    
    } 

    courseMovementHandler = (event) => {
        event.preventDefault()
        // console.log(event.target.id)
        // console.log(event.target.name)
        if (event.target.name === 'left') {
            this.moveWestHandler(event.target.id, this.state.matrices[0].matrice)
        }
        if (event.target.name === 'right') {
            this.moveEastHandler(event.target.id, this.state.matrices[0].matrice)
        }
        if (event.target.name === 'up') {
            this.moveNorthHandler(event.target.id, this.state.matrices[0].matrice) 
        }
        if (event.target.name === 'down') {
            this.moveSouthHandler(event.target.id, this.state.matrices[0].matrice)
        }
        if (event.target.name === 'upRight') {
            this.moveNorthEastHandler(event.target.id, this.state.matrices[0].matrice)
        }
        if (event.target.name === 'upLeft') {
            this.moveNorthWestHandler(event.target.id, this.state.matrices[0].matrice)
        }
        if (event.target.name === 'downLeft') {
            this.moveSouthWestHandler(event.target.id, this.state.matrices[0].matrice)
        }
        if (event.target.name === 'downRight') {
            this.moveSouthEastHandler(event.target.id, this.state.matrices[0].matrice)
        }
        if (event.target.name === 'newCoords') {
            this.moveCourseToNewCoordsMatriceHandler(event.target.id, this.state.matrices.matrice, event.target.yCoord.value, event.target.xCoord.value)
        }
    }


    render () {
        const perus = perusopinnot(this.state.courses) // Using functions from /utils/tools.js
        const aine = aineopinnot(this.state.courses)
        const syv = syventavat(this.state.courses)       
        const mat = matematiikka(this.state.courses) 
        // console.log(this.state.user)
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
                                <CourseMap perus={perus} aine={aine} syv={syv} mat={mat} courseMapMatrice={this.state.matrices[0].matrice} matrices={this.state.matrices}/>}
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
                                    username={this.state.username}
                                    password={this.state.password}
                                    handleLoginFieldChange={this.handleLoginFieldChange}
                                    login={this.login}
                                    logout={this.logout}
                                    courses={this.state.courses}
                                    matrices={this.state.matrices}
                                    matrice={this.state.matrices[0].matrice}
                                    handleNewSubmit={this.addNewCourseMatriceHandler}
                                    perus={perus} aine={aine} syv={syv} mat={mat}
                                    user={this.state.user}
                                    deleteCourseHandler={this.deleteCourseHandler}
                                    courseMovementHandler={this.courseMovementHandler}
                                />}
                            />
                            <Route path="/login" render= {() =>
                                <LoginForm
                                    username={this.state.username}
                                    password={this.state.password}
                                    handleChange={this.handleLoginFieldChange}
                                    handleSubmit={this.login} 
                               />
                            }
                            />

                            <Route exact path="/" render={() =>
                                <CourseList perus={perus} aine={aine} syv={syv} mat={mat}/>}
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
