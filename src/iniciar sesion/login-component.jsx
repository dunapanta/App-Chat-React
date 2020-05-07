import React from "react";

export default function Register(props) {
  return (
    <div className="login">
      <h2>Iniciar Sesión</h2>
      <form>
        <input
          type="email"
          placeholder="Correo Electronico"
          onChange={props.handleLoginForm}
          value={props.email}
          name="email"
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={props.handleLoginForm}
          value={props.password}
          name="password"
        />
        <button>Iniciar Sesión</button>
      </form>
    </div>
  );
 }
