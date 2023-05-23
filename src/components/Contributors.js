import styles from '../cssfiles/contributors.css'

import { Card } from "./Contributors_card";

export const Contributors = () => {
  return (
    <section className="contributors" id="contributors_section">
      <h2 className="title">Testimonials</h2>
        <Card className="card_left_shift"/>
        <Card className="card_right_shift"/>
        <Card className="card_left_shift"/>
    </section>
  );
};
