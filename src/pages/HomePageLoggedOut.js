import React from "react";
import { ScrollNav } from "../components/ScrollNav";
import { Banner } from "../components/Banner";
import { AboutUs } from "../components/AboutUs";
import { Contributors } from "../components/Contributors";
import { Team } from "../components/Team";
import { NavBar } from "../components/Navbar";
import styles from '../cssfiles/map.css'


const HomePageLoggedOut = () => {
  return (
    <div>
      <NavBar />
      <ScrollNav />
      <Banner />
      <AboutUs />
      <Contributors />
      <Team />

      <div className="container" id="container4">
        <div className="text">
          <div className="map-wrapper">
            <h2>Where are we?</h2>

            <div className="map-wrapper-sub">
              <div className="map"></div>
              <ul>
                <li>Jaipur</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Banglore</li>
                <li>Chennai</li>
              </ul>
            </div>
            <button>Join Us Today!!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLoggedOut;
