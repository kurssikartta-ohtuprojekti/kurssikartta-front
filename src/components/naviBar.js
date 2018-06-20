import React from 'react'
import {Navbar, NavItem, Nav } from 'react-bootstrap'

// Renders the navigation bar
const NaviBar = () => (
    <div className ="navBar">
      <Navbar collapseOnSelect>
          <Navbar.Header>
          <a href="/" className="navbar-left"><img 
          height="50" width="auto" src={require("../images/tko_logo.jpg")}
          style={{padding: 4}}/></a>
            <Navbar.Brand>
                <b>Kurssikartta-sovellus</b>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
                <NavItem href="/">
                  Etusivu
                </NavItem>
                <NavItem href="/kartta">
                  Kartta
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem href="/admin">
                  Admin view
                </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )

export default NaviBar