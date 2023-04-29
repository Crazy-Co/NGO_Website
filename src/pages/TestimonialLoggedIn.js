import React from "react";
import { Contributors } from "../components/Contributors";
import { NavBar } from "../components/Navbar";
import { NavBarLoggedIn } from "../components/auth/NavbarLoggedIn";


const Testimonial = (props) => {
  return (
    <div>
      <NavBarLoggedIn />

      <Contributors />
    </div>
  );
};

export default Testimonial;
