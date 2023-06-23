import React from "react";
import { Team } from "../components/Team";
import { NavBar } from "../components/Navbar";
import { Footer } from "../components/Footer";
// import { NavBarLoggedIn } from '../components/NavbarLoggedIn';

const TeamPage = (props) => {
  return (
    <div >
      <NavBar />
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;
