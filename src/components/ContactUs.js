import React from "react";
import styles from "../cssfiles/contact.css";
import map from "../images/map - Copy.jpg";
import contact from "../images/contact.jpg";
export const Contact = () => {
  return (
    <section className="contact" id="contact_section">
      <h2 className="title">Where are we?</h2>
      <div className="container">
        <div className="map_section">
          <h2>Location</h2>
          <img src={map} alt="map" />
          <p>Jaipur.New Delhi.Mumbai.Chennai</p>
        </div>
        <div className="form_section">
          <h2>Get in touch!</h2>
          <form>
            <input type="text" name="name" placeholder="Enter your Name" />
            <br />
            <input type="text" name="address" placeholder="Enter your Address" />
            <br />
            <input type="tel" name="contact" placeholder="Enter your contact number" />
            <br />
            <textarea id="freeform"  name="help" placeholder="How can we help you today?" rows="5" cols="50"></textarea>
            
            <div>
              <p>Any prefered time to reach out: </p>
              <label>7am - 11am
                <input type="radio" name="time" value="7am - 11am" id="morning" />
              </label>
              <label>1pm - 4pm
                <input type="radio" name="time" value="1pm - 4pm" id="afternoon" />
              </label>
              <label> 5pm - 8pm
              <input type="radio" name="time" value="5pm - 8pm" id="evening" />
              </label>
              <br />
              <input type="submit" value="Submit" />

            </div>
          </form>
          <img src={contact} alt="join_image" />
        </div>
      </div>
    </section>
  );
};
