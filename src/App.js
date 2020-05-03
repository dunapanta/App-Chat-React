import React from 'react';
import './App.css';
import Home from './views/Home/Home';
//import Login from './views/Autenticacion/InicioSesion';
import Register from 'views/Home/HomeSections/Home-register' ;
function App() {
  return (
    <div className="App">
      <Home/>
      <Register/>
    </div>
  );
}

export default App;
