import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar as BNavbar,
  NavbarBrand as BNavbarBrand,
  Nav as BNav
} from 'react-bootstrap';
import 'styles/Navbar.scss';

const Navbar = () => (
  <BNavbar className='navbar' expand='lg' bg='dark' sticky='top'>

    {/* Bootstrap logo-like site name. */}
    <BNavbarBrand>
      <Link className='navbar__link navbar__link_curved' to='/'>Joga.fun</Link>
    </BNavbarBrand>

    {/* The 'show/hide' button of the navbar. */}
    <BNavbar.Toggle aria-controls='basic-navbar-nav' />

    {/* Center-aligned nav items. */}
    <BNavbar.Collapse className='navbar__navbar-collapse'>
      {/* Bootstrap navbar link wrapper. */}
      {/* Third-party classes: navbar-nav, ml-auto. */}
      <BNav className='navbar__nav navbar-nav ml-auto'>
        {/* Inner list of links. */}
        {/* Third-party classes: nav, navbar-nav, ml-auto. */}
        <ul className='nav navbar-nav ml-auto'>
          {/* The Facebook link. */}
          {/* Third-party classes: nav-item. */}
          <li className='nav-item'>
            <BNav.Link href='/'>
              {/* Third-party classes: fa, fa-*. */}
              <i className='fa fa-facebook navbar__link' />
            </BNav.Link>
          </li>
          {/* The Twitter link. */}
          {/* Third-party classes: nav-item. */}
          <li className='nav-item'>
            <BNav.Link href='/'>
              {/* Third-party classes: fa, fa-*. */}
              <i className='fa fa-twitter navbar__link' />
            </BNav.Link>
          </li>
          {/* The VK link. */}
          {/* Third-party classes: nav-item. */}
          <li className='nav-item'>
            <BNav.Link href='/'>
              {/* Third-party classes: fa, fa-*. */}
              <i className='fa fa-vk navbar__link' />
            </BNav.Link>
          </li>
        </ul>
      </BNav>
    </BNavbar.Collapse>
  </BNavbar>
);

export default Navbar;
