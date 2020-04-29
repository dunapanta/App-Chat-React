import React from 'react';
import './App.css';
import {Home} from './views/Home/Home';
import Login from './views/Autenticacion/InicioSesion';
function App() {
  return (
    <div className="App">
      <Home />
      <Login/>
    </div>
  );
}

export default App;
