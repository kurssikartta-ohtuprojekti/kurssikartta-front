import React from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

// Renders the navigation bar
const NaviBar = (props) => (
  <div className="navBar">
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <a href="/" className="navbar-left"><img
          height="51" width="auto" src={require("../images/tko_logo.jpg")} alt="Tko-äly ry"
          style={{ padding: 4 }} /></a>
        <Navbar.Brand>
          <b style={{ color: 'black' }}>Kurssikartta-sovellus</b>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem href="/">
            <b style={{ color: 'black' }}>Etusivu</b>
          </NavItem>
          <NavItem href="/kartta">
            <b style={{ color: 'black' }}>Kartta</b>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem href="/myStudies">
            {props.user === null ?
              <b style={{ color: 'black' }}>Login</b>
              :
              loggedUser(props.user)
            }</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

function loggedUser(user) {
  return <b style={{ color: 'black' }}>{user.username}</b>
}

export default NaviBar