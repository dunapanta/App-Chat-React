import React from "react";

export default function Register(props) {
  return (
    <div className="register">
      <h2>Registro</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.handleRegister();
        }}
      >
        <input
          type="email"
          placeholder="Correo Electronico"
          onChange={props.handleRegisterForm}
          value={props.email}
          name="email"
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={props.handleRegisterForm}
          value={props.password}
          name="password"
        />
        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
}
