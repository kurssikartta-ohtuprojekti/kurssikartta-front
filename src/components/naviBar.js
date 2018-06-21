import React from 'react'
import {Navbar, NavItem, Nav } from 'react-bootstrap'
import './naviBar.css'

// Renders the navigation bar
const NaviBar = () => (
    <div className ="navBar">
      <Navbar collapseOnSelect>
          <Navbar.Header>
          <a href="/" className="navbar-left"><img 
          height="51" width="auto" src={require("../images/tko_logo.jpg")} alt="Tko-äly ry"
          style={{padding: 4}}/></a>
            <Navbar.Brand>
                <b style={{color: 'black', }}>Kurssikartta-sovellus</b>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
                <NavItem href="/">
                  <b>Etusivu</b>
                </NavItem>
                <NavItem href="/kartta">
                  <b>Kartta</b>
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem href="/admin">
                  <b>Admin view</b>
                </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )

export default NaviBar