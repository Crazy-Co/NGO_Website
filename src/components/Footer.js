import React from "react";
import { useRef } from "react";
import SendIcon from "../images/send-button.png";

export const Footer = () => {
    const ref = useRef(null);

  function emailForm() {
    const scriptURL = "https://script.google.com/macros/s/AKfycbwKeC7DVngq7_jNDlJ39nrKdUAPumWVYeDkuoWK4q--1GEiI7gZBiiSDLmE-8vywxcy/exec";
    const form = document.forms["submit-to-google-sheet"];
    const msg = document.getElementsByClassName("msg");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML="Thank You for subscribing..."
            setTimeout(function(){
                msg.innerHTML=""
            },2000)

            form.reset()
        })
        .catch((error) => console.error("Error!", error.message));
    });
  }

  return (
    <div className="footer" id="footer_section">
      <div className="wrapper_h">
        <div className="wrapper_v">
          <div className="logo">
            Logo
            <img src="" alt="" />
          </div>
          <div className="text">
            Want to work with us. <br /> Get contacted by our team.
          </div>
          <form className="email_subscribe_form" name="submit-to-google-sheet">
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Your email address"
            />
            <button type="submit" onClick={emailForm}>
              <img src={SendIcon} width="30px" />
            </button>
          </form>
          <span className="msg" ref={ref}></span>
        </div>
        <div className="wrapper_v">
          <h2>Useful links</h2>
          <ul>
            <li>
              <a href="#">Home</a>{" "}
            </li>
            <li>
              <a href="#">About Us</a>{" "}
            </li>
            <li>
              <a href="#">Programs</a>{" "}
            </li>
            <li>
              <a href="#">Education</a>{" "}
            </li>
            <li>
              <a href="#">Gallery</a>{" "}
            </li>
            <li>
              <a href="#">Join Us</a>{" "}
            </li>
          </ul>
        </div>
        <div className="wrapper_v">
          <h2>Connect With Us</h2>
          <ul>
            <li>
              <span>Address: </span>IIT Madras, Chennai
            </li>
            <li>
              <span>Contact: </span>+91 9414xxx xxx
            </li>
            <li>
              <span>Email: </span>harry@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_end"></div>
    </div>
  );
};
