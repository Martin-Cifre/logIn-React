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
        <li>
          <img
            src={getImgUrl("navbar/login.png")}
            alt="login"
            className={styles.icon}
          />
          log-in
        </li>
        <li>
          <img
            src={getImgUrl("navbar/signup.png")}
            alt="signup"
            className={styles.icon}
          />
          sign-up
        </li>
      </ul>
    </section>
  );
}
