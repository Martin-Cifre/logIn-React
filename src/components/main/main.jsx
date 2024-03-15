import React from 'react'

export const Main = () => {
  return (
    <div>
    <h2>Iniciar Sesión</h2>
    <form action="#" method="post">
      <input type="text" name="username" placeholder="Usuario" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <input type="submit" value="Iniciar Sesión" />
    </form>
  </div>
  )
}
