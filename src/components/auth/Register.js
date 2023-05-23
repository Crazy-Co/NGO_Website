import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import styles from "./login.css";

export default function Register(props) {
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isConfirmedPassword, setConfirmedPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (isPassword == isConfirmedPassword) {
      createUserWithEmailAndPassword(auth, isEmail, isPassword)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert("Password does not match");
    }
  }

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
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
        <div id="con_password">
          <label for="con-password">Confirm Password</label>
          <input
            type="password"
            name="con-password"
            value={isConfirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Create Account" />
        <p>
          Already have an account? <Link to="../signin">Sign In</Link>
        </p>

        {/* <button
                    onClick={() => props.onFormSwitched = 'login'}
                >
                    Already have an account? Login here
                </button> */}
        {/* <Link to="../signin">Alredy have an account? Register</Link> */}
      </form>
    </div>
  );
}
