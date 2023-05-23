import React from "react";
import { Team } from "../components/Team";
import { NavBar } from "../components/Navbar";
import { NavBarLoggedIn } from "../components/auth/NavbarLoggedIn";
import { Footer } from "../components/Footer";

const TeamPage = (props) => {
  return (
    <div>
      <NavBarLoggedIn />
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;
