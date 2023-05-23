import styles from '../cssfiles/footer.css'


import React from "react";

export const Footer = () => {
    return(
        <div className="footer" id="footer_section">
        <div className="wrapper_h">
            <div className="wrapper_v">
                <div className="logo"><img src="" alt="" /></div>
                <div className="text">Want to work with us. Get contacted by our team.</div>

            </div>
            <div className="wrapper_v">
                <h2>Useful links</h2>
                <ul>
                    <li><a href="#">Home</a> </li>
                    <li><a href="#">About Us</a> </li>
                    <li><a href="#">Programs</a> </li>
                    <li><a href="#">Education</a> </li>
                    <li><a href="#">Gallery</a> </li>
                    <li><a href="#">Join Us</a> </li>
                </ul>
            </div>
            <div className="wrapper_v">
                <h2>Connect With Us</h2>
                <ul>
                    <li><span>Address: </span>IIT Madras, Chennai</li>
                    <li><span>Contact: </span>+91 9414xxx xxx</li>
                    <li><span>Email: </span>harry@gmail.com</li>
                </ul>
            </div>
        </div>
        </div>
    );
}