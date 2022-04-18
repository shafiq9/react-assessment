import React, { useState } from "react";
import './style.css';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import {NavDropdown} from 'react-bootstrap';
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  let user = JSON.parse(localStorage.getItem('user-info'));
  const navigate  = useNavigate();
  
  function LogOut(){
    localStorage.clear();
    navigate('/registration');
  }

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>R</span>act
            <span>A</span>ssessment
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
          <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Registration</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/logout">
              <nav>
              <NavDropdown title="Logout">
                <NavDropdown.Item onClick={LogOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </nav>
              </NavLink>
            </li>
            <li>
              <NavLink to="/guest">Guest</NavLink>
            </li>
          </ul>
        </div>

            {/* 3rd social media links */}
            <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_facebook">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_instagram">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_youtube">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>React Assessment</h1>
      </section> */}
    </>
  );
};

export default Navbar;
