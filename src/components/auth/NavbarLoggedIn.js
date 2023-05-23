import React from "react";
import { Link } from "react-router-dom";
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import AuthDetails from "./AuthDetails";
import styles from '../../cssfiles/navbar.css'



export const NavBarLoggedIn = () => {

  // const [authUser, setAuthUser] = React.useState(null)

  // React.useEffect(() => {
  //   const listen = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setAuthUser(user)
  //     }
  //     else {
  //       setAuthUser(null)
  //     }
  //   })

  //   return () => {
  //     listen()
  //   }
  // }, [])

  function signedOut() {
    signOut(auth)
      .then(() => console.log("Sign Out Successful"))
      .catch(error => console.log(error))
  }

  return (
    <div className="navbar">
      <ul className="navMenu">
        <div className="logo">LOGO</div>
        <li>
          <Link to="../../NGO_Website/signedin">Home</Link>{" "}
        </li>
        <li>
          <Link to="../../NGO_Website/signedin/about">About Us</Link>{" "}
        </li>
        <li>
          <Link to="../../NGO_Website/signedin/testimonial">Contributors</Link>{" "}
        </li>
        <li>
          <Link to="../../NGO_Website/signedin/team">Our Team</Link>{" "}
        </li>
        <li  onClick={signedOut}>
          <Link to="../../../NGO_Website">Sign Out</Link>{" "}
        </li>
        <button className="donate_btn">
          <Link to="../../NGO_Website/signedin/donate" reloadDocument>Donate Us</Link>
        </button>
      </ul>
    </div>
  );
};
