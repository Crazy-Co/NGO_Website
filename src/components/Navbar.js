import React from "react";
import { Link } from "react-router-dom";
import styles from '../cssfiles/navbar.css'


export const NavBar = () => {
  const [isActive, setIsActive] = React.useState(false)
  // const hamburger = document.querySelector('.hamburger')
  // const navMenu = document.querySelector('.navMenu')

  function toggleHamburger () {
    setIsActive(!isActive)
  }
  return (
    <div className="navbar">
      <ul className={isActive ? "navMenu active" : "navMenu"}>
        <div className="logo">LOGO</div>
        <li>
          <Link to="../../NGO_Website/">Home</Link>{" "}
        </li>
        <li>
          <Link to="../../NGO_Website/about">About Us</Link>{" "}
        </li>
        <li>
          <Link to="../../NGO_Website/testimonial">Contributors</Link>{" "}
        </li>
        <li>
          <Link to="../../NGO_Website/team">Our Team</Link>{" "}
        </li>
        <li>
          <Link to="../../../NGO_Website/joinus/signin">Sign in</Link>{" "}
        </li>
        <button className="donate_btn">
          <Link to="../../NGO_Website/donate">Donate Us</Link>
        </button>
      </ul>
      <div className={isActive ? "hamburger active" : "hamburger"} onClick={toggleHamburger}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>

      </div>
    </div>
  );
};
