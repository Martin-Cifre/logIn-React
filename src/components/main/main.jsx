/*import React from 'react'
import { getImgUrl } from "../../utils.js";*/
import styles from "./main.module.css";

export const Main = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Iniciar Sesión</h2>

      <form action="#" method="post" className={styles.form}>
        <input type="text" name="username" placeholder="Usuario" required />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <button type="submit">Log In</button>
      </form>

      <div className={styles.line}></div>

      <div className={styles.options}>
        <p>
          Aun no tienes cuenta? <a href="#">Registrate</a>
        </p>
        <p>
          <a href="#">Olvidé mi contraseña</a>
        </p>
      </div>
    </div>
  );
}
