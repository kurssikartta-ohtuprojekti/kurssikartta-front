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

        const courseMap = () => (
            <div className="mappi" style ={mapCss}>
                <div className="perus" style={{float: 'left', padding: 4}}>
                    {perus.map(course => 
                        <Course course={course}/>
                    )}
                </div>
                <div className="aine" style={{float: 'right', padding: 4}}>
                    {aine.map(course =>
                        <Course course={course} style={{}}/>   
                    )}
                </div>
                <div className="syventavat" style={{float: 'right', padding: 4}}>
                    {syv.map(course =>
                        <Course course={course}/>
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
            {navBar()}
            {this.state.courses.length === 0 ?
                <div>
                    <h1> Loading... </h1>
                    <div class="loader"></div>
                </div> :
                courseMap()
            }

        </div>
        )
    }
}

export default App;
