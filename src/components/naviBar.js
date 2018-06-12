import React from 'react'
import {Navbar, NavItem, Nav } from 'react-bootstrap'


const NaviBar = () => (
    <div className ="navBar">
      <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
                Kurssikartta-sovellus
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
                <NavItem href="/admin/map">
                  Admin view
                </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )

export default NaviBar