import React from "react";
import styles from '../cssfiles/banner.css'

export const Banner = () => {
  return (
    <section className="banner" id="banner_section">
      <div className="banner_text">
        <h2>Helping.Caring.Healing</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi hic
          mollitia labore magni facere voluptatem pariatur soluta voluptatibus.
          Non, expedita?
        </p>
        <button>Become a foster parent</button>
      </div>
    </section>
  );
};
