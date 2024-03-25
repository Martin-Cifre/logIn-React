import React from 'react';
import { getImgUrl } from "../../utils.js";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <section>
      <a href="/" className={styles.links}>
        <div className={styles.nav1}>
          <img
            src={getImgUrl("navbar/lizard.png")}
            alt="Imagen Logo"
            className={styles.navImg}
          />
          Lizard
        </div>
      </a>
      <ul>
        <a href="/login" className={styles.links}>
          <li>
            <img
              src={getImgUrl("navbar/login.png")}
              alt="login"
              className={styles.icon}
            />
            log-in
          </li>
        </a>

        <a href="/signup" className={styles.links}>
          <li>
            <img
              src={getImgUrl("navbar/signup.png")}
              alt="signup"
              className={styles.icon}
            />
            sign-up
          </li>
        </a>
      </ul>
    </section>
  );
}
