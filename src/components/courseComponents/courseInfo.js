import React from 'react'
import courseInfoService from '../../services/courseinfo'
// Kurssitietojen renderointi



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
                <p fontWeight='bold'>Esitiedot:</p>

                {this.state.course.prereqs.length !== 0 ?
                    <div className="prereqs" style={{ paddingLeft: 8 }}>
                        {this.state.course.prereqs.map(prereq =>
                            <p>{prereq}</p>
                        )}
                    </div> :
                    <div className="noPrereqs" style={{ paddingLeft: 8 }}>
                        <p>Ei esitietoja</p>
                    </div>
                }
                <div>

                    {this.state.courseInfo !== undefined ?
                        <div>
                            <p>Opintojaksot</p>
                            {this.state.courseInfo.map(opintokohde => {
                                console.log('opintokohde.key: ', opintokohde.key)
                                return (
                                    <div key = {opintokohde.key}>
                                        {console.log('opintokohteen tunniste: ', opintokohde.opintokohteenTunniste)}
                                        <div>

                                            <p>{opintokohde.opintokohteenTunniste}</p>
                                        </div>
                                        <div>
                                            {opintokohde.opetustapahtumat.map(opetustapahtuma => {
                                                console.log('opetustapahtuma.key', opetustapahtuma.key)
                                     
                                                return (
                                                    <div key = {opetustapahtuma.key}>
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
                                            })}
                                        </div>
                                    </div>
                                )
                            }
                            )
                            }
                        </div>
                        : <p></p>
                    }
                </div>

            </div>
        )
    }
}
