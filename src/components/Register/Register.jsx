import React from "react";
import { getImgUrl } from "../../utils.js";
import styles from "./Register.module.css";

export const Register = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>▶ Regístrate en nuestra plataforma!</p>
      </div>
      <div className={styles.containForm}>
        <form action="#" method="post" className={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirmar contraseña"
            required
          />
          <button type="submit">Registrarse</button>
        </form>

        <div className={styles.line}></div>

        <div className={styles.options}>
          <p>
            ¿Ya tienes una cuenta? <a href="#">Inicia sesión</a>
          </p>
        </div>
      </div>
    </div>
  );
};
