import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../img/headerlogo.avif'
import blackLogo from '../img/whitelogo.png'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Announcement from './Announcement';

const Container = styled.div`
  height: 133.7px;
  width: 100%;
  padding: 0px;
  margin-top: -10px;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image = styled.img``

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Navigation = () => {
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY > 140) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  const style = {
    marginRight: '10px',
    marginTop: '10px',
    fontSize: '10px',
    color: color? 'black' : 'white',
}

  return (
      <Navbar bg={color? 'light' : 'none'} sticky='top' fixed='top' style={{transition: '0.3s ease'}}>
        <Container>
          <Announcement/>
          <LogoContainer>
            <Navbar.Brand href='/'>
              <Image src={color? logo : blackLogo} />
            </Navbar.Brand>
          </LogoContainer>
          <LinksContainer>
            <Nav.Link style={style}>
              MAHIRI EMBROIDERED LAWN
            </Nav.Link>
            <NavDropdown title="New Arrival" style={style}>

            </NavDropdown>
            <NavDropdown title="UNSTITCHED" style={style}>
              
            </NavDropdown>
            <NavDropdown title="READY TO WEAR" style={style}>
              
            </NavDropdown>
            <NavDropdown title="ACCESCORIES" style={style}>
              
            </NavDropdown>
            <NavDropdown title="LOOKBOOK" style={style}>
              
            </NavDropdown>
            <Nav.Link style={style}>
              BEST SELLERS
            </Nav.Link>
            <NavDropdown title="SALE" style={style}>
              
            </NavDropdown>
          </LinksContainer>
        </Container>
      </Navbar>
  )
}

export default Navigation