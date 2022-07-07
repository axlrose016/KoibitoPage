import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from '../Navbar/NVelement';

const NavBarIndex = () => {
  return (
    <>
    <Nav>
        <NavLink to="/">
        <img style={{
                        maxWidth:'100%',
                        maxHeight:'100%',
                        borderRadius:'50%'
                    }} src={require('../../images/sample-image.jpg')}></img>
                    
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default NavBarIndex