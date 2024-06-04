import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/brainIcon.png")} alt="Brain icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
              <p>
               This is me and my plant looking over some code trying to solve it 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/hikingIcon.png")} alt="Brain icon" />
            <div className={styles.aboutItemText}>
              <h3>Adventourist</h3>
              <p>
               I am passionate about traveling and experiencing the great outdoors
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
