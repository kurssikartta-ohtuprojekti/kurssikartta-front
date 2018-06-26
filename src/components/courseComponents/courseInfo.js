import React from 'react'
import {Button} from 'react-bootstrap'
import {completedFilter} from './../../utils/tools'
// Renders course information for nonadmin users when course button is clicked
const instructionEventMapper = (instructionEvent) => {

    const beginDateString = new Date(instructionEvent.begins).toLocaleDateString()
    const endDateString = new Date(instructionEvent.ends).toLocaleDateString()
    return (
        <div key={instructionEvent.key}>
            <small>
                {instructionEvent.studyObjectCode}: {instructionEvent.name}  <br />
                <div style={{ paddingLeft: 8 }}>
                    Tyyppi: {instructionEvent.type}  <br />

                    {beginDateString === endDateString ?

                        <span> Ajankohta: {beginDateString}  <br /> </span>

                        :
                        <span>
                            Alkamisaika: {beginDateString}  <br />
                            Loppumisaika: {endDateString} <br />
                        </span>
                    }
                    Ilmoittautuminen käynnissä: {instructionEvent.signupAvailability ? "Kyllä" : "Ei"}
                </div>

            </small>
        </div>
    )
}
const studyObjectMapper = (studyObject) => {
    const instructionEvents = studyObject.instructionEvents.map(instructionEvent => {
        const event = instructionEvent
        event.studyObjectCode = studyObject.studyObjectCode
        return event
    })
    return (


        <div key={studyObject.key} color="black">

            <div>
                {instructionEvents.length !== 0 ?

                    instructionEvents.map(instructionEventMapper)

                    : <div><small>{studyObject.studyObjectCode}: WebOodissa ei opetustapahtumia</small> </div>
                }
            </div>
        </div>

    )
}

const prerequirements = (prereqs) => {

    return (

        <div>
            <div style={{ fontWeight: 'bold' }}>Esitiedot:</div>

            {
                prereqs.length !== 0 ?
                    <div className="prereqs" style={{ paddingLeft: 8 }}>
                        {prereqs.map(prereq =>
                            <div key={prereq} > <small> <a href={'https://courses.helsinki.fi/fi/' + prereq} >{prereq}</a> </small></div>
                        )}
                    </div> :
                    <div className="noPrereqs" style={{ paddingLeft: 8 }}>
                        <small>Ei esitietoja</small>
                    </div>
            }
        </div>
    )

}

const instructions = (courseInfo) => {
    return (
        <div>
            <b>Opintojaksot:</b>
            {courseInfo.map(studyObjectMapper)}
        </div>
    )
}
export default class CourseInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: props.course,
            courseInfoService: props.courseInfoService,
            completed: false
        }
        

    }

    componentDidMount() {
        this.state.courseInfoService.getCourseInfo(this.state.course.code).then(courseInfo => {
            this.setState({ courseInfo })
            // console.log('A', this.state.courseInfo)
        }).catch(() => console.log('coult not fetch course info from weboodi'))
        let completedCourses = []
        if (this.props.user !== undefined && this.props.user !== null && this.props.user.role === 'user') {
            completedCourses = this.props.user.completedCourses
        }
        const setCompleted = completedFilter(this.state.course.code, completedCourses)
        this.setState({completed: setCompleted})
    }

    completedHandler = () => {
        const set = !this.state.completed 
        this.setState({completed: set})
    }


    render() {

        //  console.log('process.env', process.env)
        return (
            <div style={{color: 'black'}}>
                {this.props.user !== undefined && this.props.user !== null && this.props.user.role === 'user' ?
                    
                    <Button onClick={this.completedHandler} style={{position: 'relative', float: 'right'}} bsStyle="success">
                        {this.state.completed ? 'Poista suoritus' : 'Merkitse suoritetuksi'}
                    </Button>
                :
                    <div/>
                }

                <p style={{ fontWeight: 'bold' }}>{this.state.course.name}
                <br />{this.state.course.code} ({this.state.course.ects} op)</p>
                <a href={this.state.course.url} style={{ fontWeight: 'bold' }}>Kurssisivu</a>
                <br />
                <div>
                    {this.state.course.compulsory ?
                        <div style={{ fontWeight: 'bold' }}>Pakollinen kurssi</div> :
                        <div style={{ fontWeight: 'bold' }}>Vapaavalintainen kurssi</div>
                    }
                </div>
                
                {prerequirements(this.state.course.prereqs)}

                {this.state.courseInfo !== undefined ?

                    instructions(this.state.courseInfo)

                    : <div style={{ position: 'inherit' }}>
                        <h5> Ladataan opintojaksoja WebOodista... </h5>
                    </div>
                }
                
            </div>
        )
    }
}
