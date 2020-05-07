import React from 'react';
import './App.css';
import Home from './views/Home/Home';
//import Registre from './registro/Registrarse/register-component';
import Login from './views/Autenticacion/InicioSesion';
import Register from 'views/Home/HomeSections/' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route path="/home" exact >
            <Home />
          </Route>

          <Route path="/registro">
            <Register/>
          </Route>
          
          <Route path="/Login">
            <Login/>
          </Route>

          <Route path="/" exact >
            <Home />
          </Route>
          </Switch >
          
       

      </div>
    
    </Router>
    
  );
}

export default App;
