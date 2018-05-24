import React from 'react'
import courseInfoService from '../../services/courseinfo'
// Kurssitietojen renderointi

const opetustapahtumaMapper = (opetustapahtuma) => {
    return (
        <div key={opetustapahtuma.key}>
            <small>
                Toteutus: {opetustapahtuma.nimi}  <br />
                <div style={{ paddingLeft: 8 }}>
                    Tyyppi: {opetustapahtuma.tyyppi}  <br />
                    Alkamisaika: {new Date(opetustapahtuma.alkamisaika).toLocaleDateString()}  <br />
                    Loppumisaika: {new Date(opetustapahtuma.loppumisaika).toLocaleDateString()} <br />
                    Ilmoittautuminen käynnissä: {opetustapahtuma.ilmoittautuminenKaynnissa ? "Kyllä" : "Ei"}
                </div>

            </small>
        </div>
    )
}
const opintokohdeMapper = (opintokohde) => {
    console.log('opintokohde.key: ', opintokohde.key)
    return (


        <div key={opintokohde.key}>
            {console.log('opetustapahtumat: ', opintokohde.opetustapahtumat)}
            <div>
                {opintokohde.opintokohteenTunniste}
                {opintokohde.opetustapahtumat.length !== 0 ?
                    opintokohde.opetustapahtumat.map(opetustapahtumaMapper)

                    : <p>WebOodissa ei opetustapahtumia</p>
                }
            </div>
        </div>

    )
}

const esitietovaatimukset = (prereqs) => {

    return (

        <div>
            <p fontWeight='bold'>Esitiedot:</p>

            {
                prereqs.length !== 0 ?
                    <div className="prereqs" style={{ paddingLeft: 8 }}>
                        {prereqs.map(prereq =>
                            <p key={prereq} >{prereq}</p>
                        )}
                    </div> :
                    <div className="noPrereqs" style={{ paddingLeft: 8 }}>
                        <p>Ei esitietoja</p>
                    </div>
            }
        </div>
    )

}

const toteutukset = (courseInfo) => {
    return (
        <div>
            {courseInfo !== undefined ?
                <div>
                    Opintojaksot
                    {courseInfo.map(opintokohdeMapper)}
                </div>
                : <p></p>
            }
        </div>
    )
}
export default class CourseInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: props.course,
        }
    }

    componentDidMount() {
        courseInfoService.getCourseInfo(this.state.course.code).then(courseInfo => {
            this.setState({ courseInfo })
            console.log(this.state.courseInfo)
        }
        )
    }



    render() {
        return (
            <div>
                <p style={{ fontWeight: 'bold' }}>{this.state.course.name}<br />{this.state.course.code} ({this.state.course.ects} op)</p>
                <a href={this.state.course.url}>Kurssisivu</a>
                <br />
                {this.state.course.compulsory ?
                    <p>Pakollinen kurssi</p> :
                    <p>Valinnainen kurssi</p>
                }
                {esitietovaatimukset(this.state.course.prereqs)}
                {toteutukset(this.state.courseInfo)}
            </div>
        )
    }
}
