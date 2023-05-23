import React from "react";
import { AboutUs } from "../components/AboutUs";
import { NavBar } from "../components/Navbar";
import {NavBarLoggedIn} from '../components/auth/NavbarLoggedIn'


const AboutPage = (props) => {
  return (
    <div>
      <NavBarLoggedIn />
      <AboutUs />
    </div>
  );
};

export default AboutPage;


// const AboutPageLoggedIn = () => {
//   return (
//     <div>
//       <NavBarLoggedIn />
//       <AboutUs />
//     </div>
//   );
// };

// export default AboutPageLoggedIn;
