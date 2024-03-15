import React from 'react';
import { getImgUrl } from "../../utils.js";
import styles from "./navbar.module.css";

export const Header = () => {
  return (
    <section>
      <div className={styles.nav1}>
        <img
          src={getImgUrl("navbar/lizard.png")}
          alt="Imagen Logo"
          className={styles.navImg}
        />
        Lizard
      </div>
      <ul>
        <li>log-in</li>
        <li>sign-up</li>
      </ul>
    </section>
  );
}
