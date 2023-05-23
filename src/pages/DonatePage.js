import React from "react";
import { Donate } from "../components/Donate";
import { NavBar } from "../components/Navbar";
// import { NavBarLoggedIn } from '../components/NavbarLoggedIn'

const DonatePage = (props) => {
  return (
    <div>
      <NavBar />
      <Donate />
    </div>
  );
};

export default DonatePage;

// const DonatePageLoggedIn = () => {
//   return (
//     <div>
//       <NavBarLoggedIn />
//     </div>
//   )
// }
