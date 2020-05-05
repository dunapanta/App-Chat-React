import React from 'react';
import './App.css';
import Home from './views/Home/Home';
//import Login from './views/Autenticacion/InicioSesion';
import Register from 'views/Home/HomeSections/Home-register' ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>

          <Route path="/registro">
            <Register/>
          </Route>
          </Switch >
       

      </div>
    
    </Router>
    
  );
}

export default App;
