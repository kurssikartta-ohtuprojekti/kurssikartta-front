import React from 'react'
import {Navbar, NavItem, Nav } from 'react-bootstrap'


const NaviBar = () => (
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

export default NaviBar