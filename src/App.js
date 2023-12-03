import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbarly from './componentes/navegacion/Navbar';
import Homepage from './Pages/Homepage';
import Grafospage from './Pages/Grafospage';
import Arbolpage from './Pages/Arbolpage';
import Linealespage from './Pages/Linealespage';

import './App.css';
import "./Styles/Navbarly.css"

function App() {
  return (
    <Router>
      <Navbarly/>
      <div className="contenedor-principal">
        <Switch>
          <Route path="/Homepage" component={Homepage} />
          <Route path="/lineales" component={Linealespage} />
          <Route path="/grafos" component={Grafospage} />
          <Route path="/arboles" component={Arbolpage} />
          {/* Asegúrate de agregar todas las rutas necesarias */}
        </Switch>
        <div className="contenedor-body">
          <h3></h3>
        </div>
      </div>
    </Router>
  );
}

export default App;
