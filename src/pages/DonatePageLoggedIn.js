import React from "react";
import { Donate } from "../components/Donate";
import { NavBar } from "../components/Navbar";
import { NavBarLoggedIn } from "../components/auth/NavbarLoggedIn";

const DonatePage = (props) => {
  return (
    <div>
      <NavBarLoggedIn />
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
