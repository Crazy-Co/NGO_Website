import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import React from "react";
import AuthDetails from "../components/auth/AuthDetails";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Navbar";
import { NavBarLoggedIn } from "../components/auth/NavbarLoggedIn";

export default function LoginOrRegisterPage(props) {
  const [isCurrentForm, setCurrentForm] = React.useState(true);

  function toggleForm(formName) {
    setCurrentForm(formName);
  }
  return (
    <>
      {props.login === "loggedIn" ? <NavBarLoggedIn /> : <NavBar />}

      {/* <Routes>

            <Route exact path="NGO_Website/joinus/signin" element={<Login />} />
            <Route exact path="NGO_Website/joinus/signup" element={<Register />} />
        </Routes> */}
      <Outlet />
      <AuthDetails />
    </>
  );
}
