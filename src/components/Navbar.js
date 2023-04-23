import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <div className="logo">LOGO</div>
        <li>
          <Link to="NGO_Website/">Home</Link>{" "}
        </li>
        <li>
          <Link to="NGO_Website/about">About Us</Link>{" "}
        </li>
        <li>
          <Link to="NGO_Website/testimonial">Contributors</Link>{" "}
        </li>
        <li>
          <Link to="NGO_Website/team">Our Team</Link>{" "}
        </li>
        <li>
          <Link to="NGO_Website/joinus/signin">Join Us</Link>{" "}
        </li>
        <button className="donate_btn">
          <Link to="NGO_Website/donate">Donate Us</Link>
        </button>
      </ul>
    </div>
  );
};
