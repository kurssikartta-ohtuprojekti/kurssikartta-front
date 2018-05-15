import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Navbar, NavbarBrand,NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap'

const App = () => (
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
      <img src="https://raw.githubusercontent.com/juhapekkamoilanen/cshy-coursemap/master/cs-hy-coursemap.png" alt="kuva" width="1200"/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))