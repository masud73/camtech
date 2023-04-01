import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import { NavLink } from 'react-router-dom';

import "react-bootstrap-submenu/dist/index.css";


export default function AppNavbar()
{
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar collapseOnSelect expanded={expanded} expand="lg" id="navbar" variant="dark">
      <Container className='px-0'>
        <Navbar.Brand href="/" id="brand"><img src="./assets/images/logo.jpeg" alt="camtech" height={30}    width={30} className='rounded me-2' />CAMTECH</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded? false: 'expanded')} aria-controls="responsive-navbar-nav" className='me-3 px-1 py-0 shadow-sm' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100 me-auto d-flex justify-content-center">
            <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/library" onClick={() => setExpanded(false)}>Library</Nav.Link>
            <NavDropdown title="Admissions">
              <NavDropdown.Item as={NavLink} to="/admissions" target='_blank' rel='noopener noreferrer'>Ordinary National Diploma (OND)</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/admissions" target='_blank' rel='noopener noreferrer'>Higher National Diploma (HND)</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/admissions" target='_blank' rel='noopener noreferrer'>Part-Time</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/admissions" target='_blank' rel='noopener noreferrer'>Certificate</NavDropdown.Item>
            </NavDropdown>
            <NavDropdownMenu title="Academics">
            <DropdownSubmenu title="Departments">
                {/* <NavDropdown.Item href="#">Department of Library and Information Science</NavDropdown.Item>
                <NavDropdown.Item href="#">Department of Local Government Studies</NavDropdown.Item> */}
                <NavDropdown.Item href="/departments/public_admin" target='_blank'>Department of Public Administration</NavDropdown.Item>
                <NavDropdown.Item href="/departments/accountancy" target='_blank'>Department of Accountancy</NavDropdown.Item>
                {/* <NavDropdown.Item href="#">Department of Business Administration</NavDropdown.Item> */}
                <NavDropdown.Item href="/departments/otm" target='_blank'>Department of Office Technology and Management</NavDropdown.Item>
                {/* <NavDropdown.Item href="#">Department of Banking and Finance</NavDropdown.Item> */}
                <NavDropdown.Item href="/departments/social_dev" target='_blank'>Department of Social Development</NavDropdown.Item>
                {/* <NavDropdown.Item href="#">Department of Community development and Mass Education</NavDropdown.Item>
                <NavDropdown.Item href="#">Department of General Studies</NavDropdown.Item>
                <NavDropdown.Item href="#">Department of Remedial Arts</NavDropdown.Item> */}
              </DropdownSubmenu>
              <DropdownSubmenu title="Directorites">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
              </DropdownSubmenu>
              <NavDropdown.Item href="#action/3.2">Students' Affairs Division</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Calendars</NavDropdown.Item>
              <NavDropdown.Item href="#news">News</NavDropdown.Item>
            </NavDropdownMenu>
            <NavDropdown title="Research">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdown>
            <NavDropdownMenu title="TETFund Interventions">
              <DropdownSubmenu title="Special Intervention">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
              </DropdownSubmenu>
              <DropdownSubmenu title="Annual Intervention">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Action</NavDropdown.Item>
              </DropdownSubmenu>
            </NavDropdownMenu>
            <NavDropdown title="Portals">
              <NavDropdown.Item href="/student/login" target='_blank'>Student login</NavDropdown.Item>
              <NavDropdown.Item href="/staff/login" target='_blank'>Staff login</NavDropdown.Item>
              <NavDropdown.Item href="/admissions">Admission portal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact_us" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}