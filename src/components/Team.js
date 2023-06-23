import styles from '../cssfiles/team.css'


import React from "react";
// rafc: create react component
import { TeamBox } from "./Team_member_box";
export const Team = () => {
  return (
    <section className="team " id="team_section">
      <h2 className="title">Meet our team</h2>
      <div className="wrapper_h carousel-container">
        <TeamBox />
        <TeamBox />
        <TeamBox />
      {/* </div>
      <div className="wrapper_h"> */}
        <TeamBox />
        <TeamBox />
        <TeamBox />
        <TeamBox />
      </div>
      <h4>We work like a family...</h4>
    </section>
  );
};
