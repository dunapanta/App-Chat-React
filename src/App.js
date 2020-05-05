import React from 'react';
import './App.css';
import Home from './views/Home/Home';
import Registre from './registro/Registrarse/register-component';
//import Login from './views/Autenticacion/InicioSesion';
function App() {
  return (
    <div className="App">
      <Home />
      <Registre/>
    </div>
  );
}

export default App;
