import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { NavLink } from "react-router-dom";
import styles from "./login.css";

// export default function Login(props) {
export const Login = () => {
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, isEmail, isPassword)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div id="email">
          <label for="email">Email ID</label>
          <input
            type="email"
            name="email"
            value={isEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div id="password">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            value={isPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Sign In" />
        <p>Don't have an account? <NavLink to="../signup">Create Account</NavLink></p>
      </form>
    </div>
  );
};

export default Login;
