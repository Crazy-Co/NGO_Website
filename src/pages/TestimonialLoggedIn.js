import React from "react";
import { Contributors } from "../components/Contributors";
import { NavBar } from "../components/Navbar";
import { NavBarLoggedIn } from "../components/auth/NavbarLoggedIn";
import { Footer } from "../components/Footer";

const Testimonial = (props) => {
  return (
    <div>
      <NavBarLoggedIn />
      <Contributors />
      <Footer />
    </div>
  );
};

export default Testimonial;
