import React from "react";
import { ScrollNav } from "../components/ScrollNav";
import { Banner } from "../components/Banner";
import { AboutUs } from "../components/AboutUs";
import { Contributors } from "../components/Contributors";
import { Team } from "../components/Team";
import MyChart from '../components/MyChart'
import { NavBarLoggedIn } from "../components/auth/NavbarLoggedIn";
import ReachOutForm from "../components/ReachOutForm";

const HomePageLoggedIn = (props) => {
    return (
        <div>
            <NavBarLoggedIn/>
            <ScrollNav/>
            <Banner/>
            <MyChart/>
            <AboutUs/>
            <Contributors/>
            <Team/>

            <div className="container" id="container4">
                <div className="text">
                    <div className="wrapper_h">
                        <h2>Where are we?</h2>
                        <div className="map"></div>
                        <ul>
                            <li>Jaipur</li>
                            <li>Delhi</li>
                            <li>Mumbai</li>
                            <li>Banglore</li>
                            <li>Chennai</li>
                        </ul>
                        <button>Join Us Today!!</button>
                    </div>
                </div>
            </div>

            <ReachOutForm />
        </div>
    );
};

export default HomePageLoggedIn;
