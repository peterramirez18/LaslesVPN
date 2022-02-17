import React from 'react';
import { useState } from "react";

import './navbar.scss';
import logo from '../../assets/Logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';




const Navbar = () => {

  // const [menuIsOpen, setmenuIsOpen] = useState<Boolean>(true);
  
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="#"><img src={logo} alt="logo" /></a>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav__item--selected">
            <a href="#">About</a>
          </li>
          <li className="nav__item">
            <a href="#">Features</a>
          </li>
          <li className="nav__item">
            <a href="#">Pricing</a>
          </li>
          <li className="nav__item">
            <a href="#">Testimonials</a>
          </li>
          <li className="nav__item">
            <a href="#">Help</a>
          </li>
        </ul>
      </nav>
      <div className="sing">
        <div className="sing__in"><a href="#">Sing In</a></div>
        <div className="sing__up btn--rounded"><a href="#">Sing Up</a></div>
      </div>
      {/* <div className="hamburguer" onClick={() => { setmenuIsOpen(!menuIsOpen); }}>
        <FontAwesomeIcon icon={menuIsOpen ? "faBarsStaggered" : "faXmark"}></FontAwesomeIcon>
      </div> */}
      <div className="hamburguer">
        <FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon>
      </div>
    </div>
    
  )
}


export default Navbar