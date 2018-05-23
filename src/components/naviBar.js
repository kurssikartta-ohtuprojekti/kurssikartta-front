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
              {/* <NavItem href="/perus">
                Perusopinnot
              </NavItem>
              <NavItem href="/kandi">
                Kandi

              </NavItem>
              <NavItem href="/mat">
                Matematiikka
              </NavItem>
              
              {/* <NavItem href="/maisteri">
                Maisteri
              </NavItem> */}
              {/* <NavItem href="/linjat">
                Linjat
              </NavItem> */}
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )

export default NaviBar