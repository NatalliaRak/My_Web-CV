import React, { useState } from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import './navs.css';
import Title from "./Title";


const Layout = () => {

  const [isOpen, setOpen] = useState(false);
  return (
    
    <>
      <Navbar
        expanded={isOpen}
        expand={false}
        bg="light"
        fixed="top"
        className="bg-white text-the-primary bg-gradient shadow py-3 navbarI"
        
      >
          <Container>
            <Navbar.Brand href="/">
            <span className="d-block fs-1"><Title /></span>{" "}
            </Navbar.Brand>
            <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setOpen(isOpen ? false : "expanded")}
            />
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            
            >
            <Offcanvas.Header
              closeButton
              className="justify-content-end"
              onClick={() => setOpen(false)}
            >
            </Offcanvas.Header>
            <Offcanvas.Body
            className=''>
              <Nav className="justify-content-end flex-grow-1 pe-0 tooGl">
                <NavLink reloadDocument to="/" onClick={() => setOpen(false)} className='colorIt'>
                  Home
                </NavLink>
                <NavLink
                  reloadDocument
                  to="/time"
                  onClick={() => setOpen(false)} className='colorIt'
                >
                  Education and Work Expierence
                </NavLink>
                <NavLink
                  reloadDocument
                  to="/portfolio"
                  onClick={() => setOpen(false)} className='colorIt'
                >
                  Portfolio
                </NavLink>
                <NavLink
                  reloadDocument
                  to="/contact"
                  onClick={() => setOpen(false)} className='colorIt'
                >
                  Contact
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>  
      </Navbar>
      
      <Outlet/>
    </>
  )
}

export default Layout;
