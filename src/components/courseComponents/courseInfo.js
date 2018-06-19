import React from 'react'
// Kurssitietojen renderointi

const instructionEventMapper = (instructionEvent) => {

    const beginDateString = new Date(instructionEvent.begins).toLocaleDateString()
    const endDateString = new Date(instructionEvent.ends).toLocaleDateString()
    // console.log('opetustapahtuma: ', opetustapahtuma)
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


        <div key={studyObject.key}>

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
            <div fontWeight='bold'>Esitiedot:</div>

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
            Opintojaksot:
            {courseInfo.map(studyObjectMapper)}
        </div>
    )
}
export default class CourseInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: props.course,
            courseInfoService: props.courseInfoService
        }

    }

    componentDidMount() {
        this.state.courseInfoService.getCourseInfo(this.state.course.code).then(courseInfo => {
            this.setState({ courseInfo })
            // console.log('A', this.state.courseInfo)
        }).catch(() => console.log('coult not fetch course info from weboodi'))

    }



    render() {

        //  console.log('process.env', process.env)
        return (
            <div>
                <p style={{ fontWeight: 'bold' }}>{this.state.course.name}<br />{this.state.course.code} ({this.state.course.ects} op)</p>
                <a href={this.state.course.url}>Kurssisivu</a>
                <br />

                <div>
                    {this.state.course.compulsory ?
                        <div>Pakollisuus: Kyllä</div> :
                        <div>Pakollisuus: Ei</div>
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
