import React from 'react'
import './index.css';
import courseService from './services/courses'
import matriceService from './services/matrices'
import NaviBar from './components/naviBar'
import CourseList from './components/courseList'
import CourseMap from './components/courseMap'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import {
    basics,
    intermediate,
    advanced,
    mathematics,
    statistics,
} from './utils/tools'
import AdminPage from './components/admin/adminPage'
import {
    addNewCourse,
    removeCourse,
    moveCourseToNewCoordinates,
    moveCourseEast,
    moveCourseWest,
    moveCourseSouth,
    moveCourseNorth,
    moveCourseNorthEast,
    moveCourseNorthWest,
    moveCourseSouthEast,
    moveCourseSouthWest,
} from './utils/courseMatrices'
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
            selectedMatrice: null,
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
        if (event.target.xCoord.value !== '' || event.target.yCoord.value !== '') {
            const newMatrice = addNewCourse(event.target.id, // course code of the new course
                this.state.selectedMatrice.matrice, // old matrice
                event.target.xCoord.value, // x Coordinate value
                event.target.yCoord.value, ) // y coordinate value
            this.postChangedMatrice(newMatrice);
        } else {
            window.alert('Enter coordinates!')
        }
    }
    moveCourseToNewCoordsMatriceHandler = (code, matrice, y, x) => {
        // console.log(event.target.xCoord.value)
        if (x !== '' || y !== '') {
            const newMatrice = moveCourseToNewCoordinates(
                code, // course code of the new course
                matrice, // old matrice
                y, // y Coordinate value
                x) // x coordinate value
            this.postChangedMatrice(newMatrice);
        } else {
            window.alert('Enter coordinates!')
        }
    }

    deleteCourseHandler = (event) => {
        event.preventDefault()
        console.log(event.target.id)
        console.log(this.state.matrices)
        const newMatrice = removeCourse(event.target.id, this.state.selectedMatrice.matrice)
        this.postChangedMatrice(newMatrice);
    }

    moveWestHandler = (code, matrice) => {
        const newMatrice = moveCourseWest(code, matrice)
        this.postChangedMatrice(newMatrice);
    }
    moveEastHandler = (code, matrice) => {
        const newMatrice = moveCourseEast(code, matrice)
        this.postChangedMatrice(newMatrice);
    }
    moveNorthHandler = (code, matrice) => {
        const newMatrice = moveCourseNorth(code, matrice)
        this.postChangedMatrice(newMatrice);
    }
    moveSouthHandler = (code, matrice) => {
        const newMatrice = moveCourseSouth(code, matrice)
        this.postChangedMatrice(newMatrice);
    }
    moveNorthWestHandler = (code, matrice) => {
        const newMatrice = moveCourseNorthWest(code, matrice)
        this.postChangedMatrice(newMatrice);
    }
    moveNorthEastHandler = (code, matrice) => {
        const newMatrice = moveCourseNorthEast(code, matrice)
        this.postChangedMatrice(newMatrice);
    }
    moveSouthWestHandler = (code, matrice) => {
        const newMatrice = moveCourseSouthWest(code, matrice)
        this.postChangedMatrice(newMatrice);
    }
    moveSouthEastHandler = (code, matrice) => {
        const newMatrice = moveCourseSouthEast(code, matrice)
        this.postChangedMatrice(newMatrice);
    }

    // Wrapper to handle admin course movement on map
    courseMovementHandler = (event) => {
        event.preventDefault()
        if (event.target.name === 'left') {
            this.moveWestHandler(event.target.id, this.state.selectedMatrice.matrice)
        }
        if (event.target.name === 'right') {
            this.moveEastHandler(event.target.id, this.state.selectedMatrice.matrice)
        }
        if (event.target.name === 'up') {
            this.moveNorthHandler(event.target.id, this.state.selectedMatrice.matrice)
        }
        if (event.target.name === 'down') {
            this.moveSouthHandler(event.target.id, this.state.selectedMatrice.matrice)
        }
        if (event.target.name === 'upRight') {
            this.moveNorthEastHandler(event.target.id, this.state.selectedMatrice.matrice)
        }
        if (event.target.name === 'upLeft') {
            this.moveNorthWestHandler(event.target.id, this.state.selectedMatrice.matrice)
        }
        if (event.target.name === 'downLeft') {
            this.moveSouthWestHandler(event.target.id, this.state.selectedMatrice.matrice)
        }
        if (event.target.name === 'downRight') {
            this.moveSouthEastHandler(event.target.id, this.state.selectedMatrice.matrice)
        }
        if (event.target.name === 'newCoords') {
            this.moveCourseToNewCoordsMatriceHandler(event.target.id, this.state.selectedMatrice.matrice, event.target.yCoord.value, event.target.xCoord.value)
        }
    }


    matriceCallback = (event) => {
        event.preventDefault()
        if (event.target.name === "clone") {
            const newMatrice = this.state.selectedMatrice
            console.log((parseInt(this.state.matrices.length, 10)))
            if (newMatrice.error === undefined) {
                const newMatriceJson = {
                    id: (parseInt(this.state.matrices.length, 10)),
                    name: 'Clone of ' + newMatrice.name,
                    matrice: newMatrice.matrice
                }
                matriceService.postNewMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                )
                this.setState({ selectedMatrice: newMatriceJson })
                window.alert('Matriisi kloonattu')

            } else {
                window.alert(newMatrice.error)
            }
        } else if (event.target.name === "rename") {
            var newName = prompt("Anna uusi nimi", this.state.selectedMatrice.name)
            const newMatriceJson = {
                id: this.state.selectedMatrice.id,
                name: newName,
                matrice: this.state.selectedMatrice.matrice
            }
            matriceService.postNewMatrice(newMatriceJson).then(msg =>
                this.componentDidMount()
            )
            this.setState({ selectedMatrice: newMatriceJson })
            window.alert('Nimi muutettu')

        } else if (event.target.name === "delete") {
            if (this.state.matrices.length >= 2) {
                matriceService.deleteById(this.state.selectedMatrice.id).then(msg =>
                    this.componentDidMount()
                )
                var changeMatrice = this.state.matrices[0]
                this.setState({ selectedMatrice: changeMatrice })
                window.alert('Matriisi poistettu')
            } else {
                window.alert('Matriisia ei voitu poistaa')
            }

        } else {

            var newMatrice = this.state.matrices.find(matrice => matrice.id.toString() === event.target.name)
            this.setState({ selectedMatrice: newMatrice })
        }
    }

    postChangedMatrice(newMatrice) {
        if (newMatrice.error === undefined) {
            const newMatriceJson = {
                id: this.state.selectedMatrice.id,
                name: this.state.selectedMatrice.name,
                matrice: newMatrice
            };
            matriceService.postNewMatrice(newMatriceJson).then(msg => this.componentDidMount());
            // window.alert('Kurssia liikutettu')
        }
        else {
            window.alert(newMatrice.error);
        }
    }

    render() {
        const basic = basics(this.state.courses) // Using functions from /utils/tools.js
        const inter = intermediate(this.state.courses)
        const adv = advanced(this.state.courses)
        const math = mathematics(this.state.courses)
        const stats = statistics(this.state.courses)
        if (this.state.matrices !== null && this.state.selectedMatrice === null) {
            this.setState({ selectedMatrice: this.state.matrices[0] })
        }
        return (
            <div className="containerFluid" style={{ position: 'relative' }}>
                <Router>
                    <div>
                        <NaviBar />
                        {this.state.courses.length === 0 || this.state.matrices === null || this.state.selectedMatrice === null ?
                            <div style={{ position: 'absolute', left: '45%' }}>
                                <h1> Loading... </h1>
                                <div className="loader"></div>
                            </div> :

                            <div>
                                <Route path="/kartta" render={() =>
                                    <CourseMap basic={basic} inter={inter} adv={adv} math={math} stats={stats} selectedMatrice={this.state.selectedMatrice} courseMapMatrice={this.state.selectedMatrice.matrice} matrices={this.state.matrices} matriceCallback={this.matriceCallback} />}
                                />
                                <Route path="/perus" render={() =>
                                    <CourseMap basic={basic} inter={null} adv={null} math={null} />}
                                />
                                <Route path="/kandi" render={() =>
                                    <CourseMap basic={basic} inter={inter} adv={null} math={null} />}
                                />
                                <Route path="/mat" render={() =>
                                    <CourseMap basic={null} inter={null} adv={null} math={math} />}
                                />
                                <Route path="/admin" render={() =>
                                    <AdminPage
                                        username={this.state.username}
                                        password={this.state.password}
                                        handleLoginFieldChange={this.handleLoginFieldChange}
                                        login={this.login}
                                        logout={this.logout}
                                        courses={this.state.courses}
                                        matrices={this.state.matrices}
                                        matrice={this.state.selectedMatrice.matrice}
                                        handleNewSubmit={this.addNewCourseMatriceHandler}
                                        basic={basic} inter={inter} adv={adv} math={math} stats={stats}
                                        user={this.state.user}
                                        deleteCourseHandler={this.deleteCourseHandler}
                                        courseMovementHandler={this.courseMovementHandler}
                                        matriceCallback={this.matriceCallback}
                                        selectedMatrice={this.state.selectedMatrice}
                                    />}
                                />
                                <Route path="/login" render={() =>
                                    <LoginForm
                                        username={this.state.username}
                                        password={this.state.password}
                                        handleChange={this.handleLoginFieldChange}
                                        handleSubmit={this.login}
                                    />
                                }
                                />

                                <Route exact path="/" render={() =>
                                    <CourseList basic={basic} inter={inter} adv={adv} math={math} stats={stats} />}
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
