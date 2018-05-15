import React from 'react'
import './index.css';
import {Navbar, NavbarBrand,NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap'
import courseService from './services/courses'
import Course from './components/course'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        courses: [],
      }    
    }

    componentDidMount() {
          courseService.getAll().then(courses =>
            this.setState({ courses })
          )
        }

    render () {
        return (
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
            {this.state.courses.map(course => 
                  <Course course={course}/>
             )}

            {/* <img src="https://raw.githubusercontent.com/juhapekkamoilanen/cshy-coursemap/master/cs-hy-coursemap.png" alt="kuva" width="1200"/> */}
          </div>
        )
    }
}

export default App;
