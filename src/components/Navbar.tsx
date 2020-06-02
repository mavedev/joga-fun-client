import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar as BNavbar,
  NavbarBrand,
  Nav
} from 'react-bootstrap';
import 'styles/Navbar.scss';

const Navbar = () => (
  <BNavbar className='navbar' expand='lg' bg='dark' sticky='top'>
    <NavbarBrand>
      <Link className='navbar__link' to='/'>Joga.fun</Link>
    </NavbarBrand>
    <BNavbar.Toggle aria-controls='basic-navbar-nav' />
    <BNavbar.Collapse className='navbar__nav'>
      {/* Right aligned nav items. */}
      <Nav className='ml-auto navbar-nav'>
        <ul className='nav navbar-nav navbar-right ml-auto'>
          <li className='nav-item'>
            <Nav.Link href='/' className='nav-link'>
              <i className='fa fa-facebook navbar__link' />
            </Nav.Link>
          </li>
          <li className='nav-item'>
            <Nav.Link href='/' className='nav-link'>
              <i className='fa fa-twitter navbar__link' />
            </Nav.Link>
          </li>
          <li className='nav-item'>
            <Nav.Link href='/' className='nav-link'>
              <i className='fa fa-vk navbar__link' />
            </Nav.Link>
          </li>
        </ul>
      </Nav>
    </BNavbar.Collapse>
  </BNavbar>
);

export default Navbar;
