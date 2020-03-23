import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {Container} from 'semantic-ui-react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap'


function GlobalNav(props){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // const [isActive, setIsActive] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{background:props.theme.navbar}}>
    <Container style={{padding:'0px'}}>
      <Navbar dark expand="md" style={{padding: '7px 0px'}}>
        <NavbarBrand tag={Link} to="">
        <h1 style={{fontSize:'20px',fontFamily:'Arima Madurai, cursive'}}>Paul Lewis Johnston</h1>
        </NavbarBrand>
        <NavbarToggler style={{border:'none'}} type='button' onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink tag={Link} to="projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="blog">Blog</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
    </div>
  );
}

export default GlobalNav