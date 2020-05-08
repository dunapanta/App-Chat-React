import React from 'react';
import './App.css';
import Home from './views/Home/Home';
// import Registre from './registro/Registrarse/register-component';
// import Login from './views/Autenticacion/InicioSesion';


import HomeRegister from './views/Home/HomeSections/Home-register';
import HomeLogin from './views/Home/HomeSections/Home-login';


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
            <HomeRegister/>
          </Route>                   

          <Route path="/" exact >
            <Home />
          </Route>
          </Switch >
          
        <Switch>
          <Route path="/home" exact >
            <Home />
          </Route>

          <Route path="/login">
            <HomeLogin/>
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
