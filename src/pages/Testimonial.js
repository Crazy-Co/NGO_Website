import React from "react";
import { Contributors } from "../components/Contributors";
import { NavBar } from "../components/Navbar";
import { Footer } from "../components/Footer";
// import { NavBarLoggedIn } from "../components/NavbarLoggedIn";

const Testimonial = (props) => {
  return (
    <div>
      <NavBar />
      <Contributors />
      <Footer />
    </div>
  );
};

export default Testimonial;
