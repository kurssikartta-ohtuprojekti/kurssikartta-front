import React from 'react'
import './index.css';
import {Navbar, NavItem, Nav } from 'react-bootstrap'
import courseService from './services/courses'
import Course from './components/course'
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

        const navBar = () => (
          <div>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    Kurssikartta-sovellus
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <NavItem href="#">
                    Kandi
                    </NavItem>
                    <NavItem href="#">
                    Maisteri
                    </NavItem>
                    <NavItem href="#">
                    Linjat
                    </NavItem>
                    <NavItem>
          
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
          </div>
        )
        return (
        <div className="container" style={{position:'relative'}}>
            {navBar()}
            <div className="mappi" style ={{backgroundColor: 'lightgreen', borderRadius: 30, borderWidth: 5, position: 'absolute'}}>
                <div className="perus" style={{float: 'left'}}>
                    {perus.map(course => 
                        <Course course={course}/>
                    )}
                </div>
                <div className="aine" style={{float: 'right'}}>
                    {aine.map(course =>
                        <Course course={course}/>   
                    )}
                </div>
                <div className="syventavat" style={{float: 'right'}}>
                    {syv.map(course =>
                        <Course course={course}/>
                    )}
                </div>
            </div> 

            {/* <img src="https://raw.githubusercontent.com/juhapekkamoilanen/cshy-coursemap/master/cs-hy-coursemap.png" alt="kuva" width="1200"/> */}
        </div>
        )
    }
}

export default App;
