import React from "react";
import facebook_icon from "../images/facebook.png";
import linkedin_icon from "../images/linkedin.png";
import instagram_icon from "../images/instagram.png";

export const TeamBox = () => {
    return(
        <div className="team_box">
            <div className="profile_pic"><img src="https://picsum.photos/200" alt="" /></div>
            <div className="name">Tom Riddle</div>
            <div className="role">Lord Voldemort</div>
            <div className="social">
                <a href="https://www.facebook.com/"><img src={facebook_icon} alt="facebook" /></a>
                <a href="https://www.instagram.com/"><img src={instagram_icon } alt="instagram" /></a>
                <a href="https://www.linkedin.com/"><img src={linkedin_icon} alt="linkedin" /></a>
            </div>
        </div>
    );
}