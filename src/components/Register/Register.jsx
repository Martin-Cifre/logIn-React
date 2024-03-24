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
          <input type="text" name="username" placeholder="Usuario" required />
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
          <select name="country" required>
            <option value="" disabled selected>
              Selecciona tu país
            </option>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Ecuador">Ecuador</option>
            <option value="España">España</option>
            <option value="Guatemala">Guatemala</option>
            <option value="México">México</option>
            <option value="Perú">Perú</option>
            <option value="Uruguay">Uruguay</option>
          </select>
          <label>
            <input type="checkbox" name="accept_terms" required />
            He leído y acepto los términos y condiciones
          </label>
          <button type="submit">Registrarse</button>
        </form>

        <div className={styles.line}></div>

        <div className={styles.options}>
          <p>
            ¿Ya tienes una cuenta? <a href="#">Inicia sesión</a>
          </p>
          <p>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>
        </div>
      </div>
    </div>
  );
};
