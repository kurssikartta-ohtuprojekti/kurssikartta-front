import React from 'react'
import './index.css';
import courseService from './services/courses'
import matriceService from './services/matrices'
import NaviBar from './components/naviBar'
import CourseList from './components/courseList'
import CourseMap from './components/courseMap'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
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
import registerService from './services/register'
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/LoginForm/RegisterForm';
import StudiesPage from './components/studiesPage';
import userService from './services/user'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            selectedPrereqs: [],
            matrices: null,
            user: null,
            admin: null,
            role: null,
            username: '',
            password: '',
            selectedMatrice: null,
            reCaptchaResponse: null,
            verified: null,
            loginMessage: null,
            checkboxVerified: null,
            redirectAddress: null,
        }
    }

    componentDidMount() {
        courseService.getAll().then(courses =>
            this.setState({ courses })
        )

        matriceService.getAll().then(matrices =>
            this.setState({ matrices })
        )
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            this.setState({ user })
            matriceService.setToken(user.token)
            userService.setToken(user.token)
        }
    }

    // Logout handler
    logout = async (event) => {
        event.preventDefault()
        // console.log(window.localStorage.getItem('loggedUser'))
        window.localStorage.removeItem('loggedUser')
        matriceService.setToken(null)
        userService.setToken(null)
        this.setState({ user: null, admin: false, verified: false })
    }

    // Login and register handler
    login = async (event) => {
        event.preventDefault()
        if (event.target.id === 'login') {
            this.loginHandle();
        } else if (event.target.id === 'register') {
            this.register();
        }
    }

    // Register handler logic
    async register() {
        try {
            const user = await registerService.register({
                username: this.state.username,
                password: this.state.password,
            });
            window.localStorage.setItem('loggedUser', JSON.stringify(user));
            this.setState({ username: '', password: '', user });
        }
        catch (exception) {
            this.setState({ loginMessage: "Could not register user" });
        }
        this.componentDidMount();
        this.setState({ verified: false, redirectAddress: 'mystudies' });
    }

    // Login handler logic
    async loginHandle() {
        try {
            const user = await loginService.login({
                username: this.state.username,
                password: this.state.password,
                role: this.state.role,
                reCaptchaResponse: this.state.reCaptchaResponse,
            });
            window.localStorage.setItem('loggedUser', JSON.stringify(user));
            this.setState({ username: '', password: '', user });
        }
        catch (exception) {
            this.setState({ loginMessage: "Invalid username or password" });
        }
        this.componentDidMount();
        this.setState({ verified: false });
    }

    // Login text input handler
    handleLoginFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }

    // Verifying reCaptcha is entered
    reCaptcha = (value) => {
        this.setState({ verified: true, reCaptchaResponse: value })

        this.componentDidMount();
    }

    reCaptchaExpire = () => {
        this.setState({ verified: false })

        this.componentDidMount();
    }

    checkboxVerify = () => {
        if (this.state.checkboxVerified === null) {
            this.setState({ checkboxVerified: true })
        } else {
            this.setState({ checkboxVerified: !this.state.checkboxVerified })
        }
        this.componentDidMount();
    }


    // Admin handler for adding courses to maps
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

    // Admin handler to set new coordinates for courses in maps
    moveCourseToNewCoordsMatriceHandler = (code, matrice, y, x) => {
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

    // Admin handler for removing courses from maps
    deleteCourseHandler = (event) => {
        event.preventDefault()
        const newMatrice = removeCourse(event.target.id, this.state.selectedMatrice.matrice)
        this.postChangedMatrice(newMatrice);
    }

    // Move course by one step in matrice
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
            if (newMatrice.error === undefined) {
                const newMatriceJson = {
                    name: 'Clone of ' + newMatrice.name,
                    matrice: newMatrice.matrice
                }
                var clonedMatrice = matriceService.postNewMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                )
                this.setState({ selectedMatrice: clonedMatrice })
                window.alert('Matriisi kloonattu')

            } else {
                window.alert(newMatrice.error)
            }
        } else if (event.target.name === "rename") {
            var newName = prompt("Anna uusi nimi", this.state.selectedMatrice.name)
            newName = String(newName)
            if (newName !== '' || newName !== this.state.selectedMatrice.name) {
                const newMatriceJson = {
                    id: this.state.selectedMatrice.id,
                    name: newName,
                    matrice: this.state.selectedMatrice.matrice
                }
                matriceService.updateMatrice(newMatriceJson).then(msg =>
                    this.componentDidMount()
                )
                this.setState({ selectedMatrice: newMatriceJson })
                window.alert('Nimi muutettu')
            } else {
                window.alert('Nimeä ei muutettu')
            }

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
            matriceService.updateMatrice(newMatriceJson).then(msg => this.componentDidMount());
            // window.alert('Kurssia liikutettu')
        }
        else {
            window.alert(newMatrice.error);
        }
    }

    // Handle highlighed prerequirement courses for mouse overed course
    prerequirementHighlightHandler = (course) => {
        let found = []
        for (let i = 0; i < course.prereqs.length; i++) {
            found.push(this.state.courses.find(c => c.code === course.prereqs[i]))
        }

        this.setState({ selectedPrereqs: found })
    }

    prerequirementHighlightOffHandler = () => {
        this.setState({ selectedPrereqs: [] })
    }

    userCompletedCourseHandler = async (handleCourse) => {
        let setCourses = []
        if (this.state.user.courses) {
            setCourses = this.state.user.courses
        }
        if (setCourses.includes(handleCourse)) {
            setCourses = setCourses.filter(item => item !== handleCourse)
        } else {
            setCourses.push(handleCourse)
        }
        // console.log(setCourses)
        const res = await userService.completedCourses(setCourses)
        // console.log(res)
        const user = {
            token: this.state.user.token,
            username: res.username,
            courses: res.courses,
            role: res.role
        }
        this.setState({ user })
        window.localStorage.setItem('loggedUser', JSON.stringify(user));

    }

    // Redirect if needed
    redirect() {
        if (this.state.redirectAddress === 'mystudies') {
            this.setState({ redirectAddress: null });
            return <Redirect to='/mystudies' />;
        } else {
            return
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
        // console.log(this.state.user)
        // console.log(this.state.user)
        return (
            <div className="containerFluid" style={{ position: 'relative' }}>
                <Router>
                    <div>
                        <NaviBar user={this.state.user} />
                        {this.state.courses.length === 0 || this.state.matrices === null || this.state.selectedMatrice === null ?
                            <div style={{ position: 'absolute', left: '45%' }}>
                                <h1> Loading... </h1>
                                <div className="loader"></div>
                            </div> :

                            <div>
                                <Route path="/kartta" render={() =>
                                    <CourseMap
                                        prereqsOffHandler={this.prerequirementHighlightOffHandler}
                                        prereqsHandler={this.prerequirementHighlightHandler}
                                        highlightedPrereqs={this.state.selectedPrereqs}
                                        basic={basic} inter={inter} adv={adv} math={math} stats={stats}
                                        selectedMatrice={this.state.selectedMatrice}
                                        courseMapMatrice={this.state.selectedMatrice.matrice}
                                        matrices={this.state.matrices}
                                        user={this.state.user}
                                        userCompletedCourseHandler={this.userCompletedCourseHandler}
                                        matriceCallback={this.matriceCallback} />}
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
                                        reCaptcha={this.reCaptcha}
                                        verified={this.state.verified}
                                        login={this.login}
                                        loginMessage={this.state.loginMessage}
                                        logout={this.logout}
                                        courses={this.state.courses}
                                        matrices={this.state.matrices}
                                        matrice={this.state.selectedMatrice.matrice}
                                        handleNewSubmit={this.addNewCourseMatriceHandler}
                                        basic={basic} inter={inter} adv={adv} math={math} stats={stats}
                                        user={this.state.user}
                                        admin={this.state.admin}
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
                                        reCaptcha={this.reCaptcha}
                                        onExpire={this.reCaptchaExpire}
                                        verified={this.state.verified}
                                        handleSubmit={this.login}
                                        loginMessage={this.state.loginMessage}
                                    />
                                }
                                />
                                <Route path="/mystudies" render={() =>
                                    <StudiesPage
                                        username={this.state.username}
                                        password={this.state.password}
                                        handleLoginFieldChange={this.handleLoginFieldChange}
                                        reCaptcha={this.reCaptcha}
                                        verified={this.state.verified}
                                        login={this.login}
                                        loginMessage={this.state.loginMessage}
                                        logout={this.logout}
                                        courses={this.state.courses}
                                        matrices={this.state.matrices}
                                        matrice={this.state.selectedMatrice.matrice}
                                        basic={basic} inter={inter} adv={adv} math={math} stats={stats}
                                        user={this.state.user}
                                        admin={this.state.admin}
                                        deleteCourseHandler={this.deleteCourseHandler}
                                        courseMovementHandler={this.courseMovementHandler}
                                        matriceCallback={this.matriceCallback}
                                        selectedMatrice={this.state.selectedMatrice}
                                        handleNewSubmit={this.addNewCourseMatriceHandler}
                                    />
                                }
                                />

                                <Route exact path="/" render={() =>
                                    <CourseList prereqsOffHandler={this.prerequirementHighlightOffHandler}
                                        prereqsHandler={this.prerequirementHighlightHandler}
                                        highlightedPrereqs={this.state.selectedPrereqs}
                                        user={this.state.user}
                                        userCompletedCourseHandler={this.userCompletedCourseHandler}
                                        basic={basic} inter={inter} adv={adv} math={math} stats={stats}
                                    />}
                                />

                                <Route path="/register" render={() =>
                                    <RegisterForm
                                        username={this.state.username}
                                        password={this.state.password}
                                        handleChange={this.handleLoginFieldChange}
                                        reCaptcha={this.reCaptcha}
                                        onExpire={this.reCaptchaExpire}
                                        verified={this.state.verified}
                                        handleSubmit={this.login}
                                        loginMessage={this.state.loginMessage}
                                        checkboxVerify={this.checkboxVerify}
                                        checkboxVerified={this.state.checkboxVerified} />
                                }
                                />

                                {this.redirect()}
                            </div>
                        }
                    </div>
                </Router>

            </div>
        )
    }
}

export default App;
