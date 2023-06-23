import React from "react";
import { NavBar } from "../components/Navbar";
import { ScrollNav } from "../components/ScrollNav";
import { Banner } from "../components/Banner";
import { AboutUs } from "../components/AboutUs";
import { Contributors } from "../components/Contributors";
import { Team } from "../components/Team";
import { Contact } from "../components/ContactUs";
import { Footer } from "../components/Footer";

const HomePageLoggedOut = () => {
  return (
    <div style={{'overflow-y': 'hidden'}}>
      <NavBar />
      <ScrollNav />
      <Banner />
      <AboutUs />
      <Contributors />
      <Team />
      <Contact/>
      <Footer />
    </div>
  );
};

export default HomePageLoggedOut;
