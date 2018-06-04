import React from 'react'
// Kurssitietojen renderointi

const opetustapahtumaMapper = (opetustapahtuma) => {

    const alkuString = new Date(opetustapahtuma.alkamisaika).toLocaleDateString()
    const loppuString = new Date(opetustapahtuma.loppumisaika).toLocaleDateString()
   // console.log('opetustapahtuma: ', opetustapahtuma)
    return (
        <div key={opetustapahtuma.key}>
            <small>
                {opetustapahtuma.opintokohteenTunniste}: {opetustapahtuma.nimi}  <br />
                <div style={{ paddingLeft: 8 }}>
                    Tyyppi: {opetustapahtuma.tyyppi}  <br />

                    {alkuString === loppuString ?

                        <span> Ajankohta: {alkuString}  <br /> </span>

                        :
                        <span>
                            Alkamisaika: {alkuString}  <br />
                            Loppumisaika: {loppuString} <br />
                        </span>
                    }
                    Ilmoittautuminen käynnissä: {opetustapahtuma.ilmoittautuminenKaynnissa ? "Kyllä" : "Ei"}
                </div>

            </small>
        </div>
    )
}
const opintokohdeMapper = (opintokohde) => {
    //console.log('opintokohde.key: ', opintokohde)
    const opetustapahtumat = opintokohde.opetustapahtumat.map(opetustapahtuma => {
        const tapahtuma = opetustapahtuma
        tapahtuma.opintokohteenTunniste = opintokohde.opintokohteenTunniste
      // console.log('tapahtuma:', tapahtuma)
        return tapahtuma
    })
    return (


        <div key={opintokohde.key}>
            {console.log('opetustapahtumat: ', opintokohde.opetustapahtumat)}

            <div>
                {opetustapahtumat.length !== 0 ?

                    opetustapahtumat.map(opetustapahtumaMapper)

                    : <div><small>{opintokohde.opintokohteenTunniste}: WebOodissa ei opetustapahtumia</small> </div>
                }
            </div>
        </div>

    )
}

const esitietovaatimukset = (prereqs) => {

    return (

        <div>
            <div fontWeight='bold'>Esitiedot:</div>

            {
                prereqs.length !== 0 ?
                    <div className="prereqs" style={{ paddingLeft: 8 }}>
                        {prereqs.map(prereq =>
                            <div key={prereq} > <small> {prereq} </small></div>
                        )}
                    </div> :
                    <div className="noPrereqs" style={{ paddingLeft: 8 }}>
                        <small>Ei esitietoja</small>
                    </div>
            }
        </div>
    )

}

const toteutukset = (courseInfo) => {
    return (
        <div>
            Opintojaksot:
            {courseInfo.map(opintokohdeMapper)}
        </div>
    )
}
export default class CourseInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: props.course,
            onToteutuksia: false,
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
                {esitietovaatimukset(this.state.course.prereqs)}

                {this.state.courseInfo !== undefined ?

                    toteutukset(this.state.courseInfo)

                    : <div style={{ position: 'inherit' }}>
                        <h5> Ladataan opintojaksoja WebOodista... </h5>
                    </div>
                }
            </div>
        )
    }
}
