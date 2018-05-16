import React from 'react'
import './index.css';
import courseService from './services/courses'
import Course from './components/course'
import NaviBar from './components/naviBar'

import { perusopinnot, aineopinnot, syventavat } from './utils/tools'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        courses: [],
      }    
    }

    componentDidMount() {
        courseService.getAll().then(courses =>
            this.setState({ courses }),

        )
          
        }

    render () {
        // console.log(perusopinnot(this.state.courses))
        const perus = perusopinnot(this.state.courses)
        const aine = aineopinnot(this.state.courses)
        const syv = syventavat(this.state.courses)

        const courseMap = () => (
            <div className="mappi" style ={mapCss}>
                <div className="perus" style={{float: 'left', padding: 4}}>
                    <h2>Perusopinnot</h2>
                    {perus.map(course => 
                        <Course key={course.code} course={course}/>
                    )}
                </div>
                <div className="aine" style={{float: 'left', padding: 4}}>
                    <h2>Aineopinnot</h2>
                    {aine.map(course =>
                        <Course key={course.code} course={course} style={{}}/>   
                    )}
                </div>
                <div className="syventavat" style={{float: 'left', padding: 4}}>
                <h2>Syventävät opinnot</h2>
                    {syv.map(course =>
                        <Course key={course.code} course={course}/>
                    )}
                </div>
            </div> 
        )

        const mapCss = {
            backgroundColor: 'lightgreen',
            borderRadius: 30,
            borderWidth: 5,
            position: 'absolute'
        }
        
        return (
        <div className="container" style={{position:'relative'}}>
            <NaviBar/>
            {this.state.courses.length === 0 ?
                <div>
                    <h1> Loading... </h1>
                    <div className="loader"></div>
                </div> :
                courseMap()
            }

        </div>
        )
    }
}

export default App;
