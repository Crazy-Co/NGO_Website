import React from "react";
import { ScrollNav } from "../components/ScrollNav";
import { Banner } from "../components/Banner";
import { AboutUs } from "../components/AboutUs";
import { Contributors } from "../components/Contributors";
import { Team } from "../components/Team";
import MyChart from "../components/MyChart";
import { NavBarLoggedIn } from "../components/auth/NavbarLoggedIn";
import { Contact } from "../components/ContactUs";
import { Footer } from "../components/Footer";

const HomePageLoggedIn = (props) => {
  return (
    <div style={{'overflow-y': 'hidden'}}>
      <NavBarLoggedIn />
      <ScrollNav />
      <Banner />
      <MyChart />
      <AboutUs />
      <Contributors />
      <Team />
      <Contact/>
      <Footer />
    </div>
  );
};

export default HomePageLoggedIn;
